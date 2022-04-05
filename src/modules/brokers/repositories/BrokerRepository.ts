import { ICreateBrokerDTO } from '@modules/brokers/dtos/ICreateBrokerDTO';
import { IBrokerRepository } from '@modules/brokers/repositories/interfaces/IBrokerRepository';
import { getRepository, Repository } from 'typeorm';

import { Broker } from '../entities/Broker';

export class BrokersRepository implements IBrokerRepository {
	private repository: Repository<Broker>;

	constructor() {
		this.repository = getRepository(Broker);
	}

	async findById(id: string): Promise<Broker> {
		const broker = await this.repository.findOne(id);
		return broker;
	}

	async findByName(name: string): Promise<Broker> {
		const broker = await this.repository.findOne({ name });
		return broker;
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
