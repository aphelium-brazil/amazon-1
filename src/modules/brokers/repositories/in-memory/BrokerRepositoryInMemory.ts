import type { ICreateBrokerDTO } from '@modules/brokers/dtos/ICreateBrokerDTO';
import { Broker } from '@modules/brokers/entities/Broker';
import type { IBrokerRepository } from '../interfaces/IBrokerRepository';

export class BrokerRepositoryInMemory implements IBrokerRepository {
	brokers: Broker[] = [];

	async findById(id: string) {
		return this.brokers.find((broker) => broker.id === id);
	}

	async findByName(name: string) {
		return this.brokers.find((broker) => broker.name === name);
	}

	async create({
		name,
		description,
		slug,
		logo,
		dateLaunched
	}: ICreateBrokerDTO): Promise<Broker> {
		const broker = new Broker();

		Object.assign(broker, {
			name,
			description,
			slug,
			logo,
			dateLaunched
		});

		this.brokers.push(broker);

		return broker;
	}
}
