import type { ICreateBrokerDTO } from '@modules/brokers/dtos/ICreateBrokerDTO';
import type { IBrokerRepository } from '@modules/brokers/repositories/interfaces/IBrokerRepository';
import { getRepository, Repository } from 'typeorm';

import { Broker } from '../entities/Broker';

export class BrokersRepository implements IBrokerRepository {
	private readonly repository: Repository<Broker>;

	constructor() {
		this.repository = getRepository(Broker);
	}

	async findById(id: string) {
		return this.repository.findOne(id);
	}

	async findByName(name: string) {
		return this.repository.findOne({ name });
	}

	async create({
		id,
		name,
		description,
		slug,
		logo,
		dateLaunched,
		swaps
	}: ICreateBrokerDTO): Promise<Broker> {
		const broker = this.repository.create({
			id,
			name,
			description,
			slug,
			logo,
			dateLaunched,
			swaps
		});

		await this.repository.save(broker);
		return broker;
	}
}
