import type { Repository } from 'typeorm';
import { getRepository } from 'typeorm';
import type { ICreateTechDocDTO } from '../dtos/ICreateTechDocDTO';
import { TechDoc } from '../entities/TechDoc';
import type { ITechDocsRepository } from './interfaces/ITechDocsRepository';

export class TechDocsRepository implements ITechDocsRepository {
	private readonly repository: Repository<TechDoc>;

	constructor() {
		this.repository = getRepository(TechDoc);
	}

	async create({ title, description, url, coinId }: ICreateTechDocDTO): Promise<TechDoc> {
		const techDoc = this.repository.create({ title, description, url, coinId });
		return this.repository.save(techDoc);
	}
}
