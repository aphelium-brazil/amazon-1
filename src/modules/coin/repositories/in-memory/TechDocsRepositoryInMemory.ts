import type { ICreateTechDocDTO } from '@modules/coin/dtos/ICreateTechDocDTO';
import { TechDoc } from '@modules/coin/entities/TechDoc';
import type { ITechDocsRepository } from '../interfaces/ITechDocsRepository';

export class TechDocsRepositoryInMemory implements ITechDocsRepository {
	readonly techDocs = [] as TechDoc[];

	async create({ title, description, url, coinId }: ICreateTechDocDTO): Promise<TechDoc> {
		const techDoc = new TechDoc();
		Object.assign(techDoc, { title, description, url, coinId });
		this.techDocs.push(techDoc);
		return techDoc;
	}
}
