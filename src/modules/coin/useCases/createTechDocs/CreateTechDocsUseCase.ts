import type { TechDoc } from '@modules/coin/entities/TechDoc';
import type { ICreateTechDocDTO } from '@modules/coin/dtos/ICreateTechDocDTO';
import { ITechDocsRepository } from '@modules/coin/repositories/interfaces/ITechDocsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateTechDocsUseCase {
	constructor(
		@inject('TechDocsRepository')
		private readonly techDocsRepository: ITechDocsRepository
	) {}

	async execute({
		title,
		description,
		url,
		coinId
	}: ICreateTechDocDTO): Promise<TechDoc> {
		const techDoc = await this.techDocsRepository.create({
			title,
			description,
			url,
			coinId
		});

		return techDoc;
	}
}
