import type { ICreateExplorerDTO } from '@modules/coin/dtos/ICreateExplorerDTO';
import type { IExplorerRepository } from '@modules/coin/repositories/interfaces/IExplorerRepository';
import type { Repository } from 'typeorm';
import { getRepository } from 'typeorm';

import { Explorer } from '../entities/Explorer';

export class ExplorerRepository implements IExplorerRepository {
	private readonly repository: Repository<Explorer>;

	constructor() {
		this.repository = getRepository(Explorer);
	}

	async create({ name, description, url }: ICreateExplorerDTO): Promise<Explorer> {
		const explorer = this.repository.create({
			name,
			description,
			url
		});

		return this.repository.save(explorer);
	}
}
