import type { ICreateExplorerDTO } from '@modules/coin/dtos/ICreateExplorerDTO';
import { IExplorerRepository } from '@modules/coin/repositories/interfaces/IExplorerRepository';
import type { Explorer } from '@modules/coin/entities/Explorer';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateExplorerUseCase {
	constructor(
		@inject('ExplorerRepository')
		private readonly explorer: IExplorerRepository
	) {}

	async execute({ name, description, url }: ICreateExplorerDTO): Promise<Explorer> {
		const explorer = await this.explorer.create({
			name,
			description,
			url
		});

		return explorer;
	}
}
