import { IBrokerRepository } from '@modules/brokers/repositories/interfaces/IBrokerRepository';
import { Broker } from '@modules/brokers/entities/Broker';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
	name: string;
	description: string;
	slug: string;
	logo: string;
	dateLaunched: Date;
}

@injectable()
export class CreateBrokerUseCase {
	constructor(
		@inject('BrokersRepository')
		private readonly brokerRepository: IBrokerRepository
	) {}

	async execute({
		name,
		description,
		slug,
		logo,
		dateLaunched
	}: IRequest): Promise<Broker> {
		const brokerAlreadyExists = await this.brokerRepository.findByName(name);

		if (brokerAlreadyExists) {
			throw new AppError('Broker already exists!');
		}

		const broker = await this.brokerRepository.create({
			name,
			description,
			slug,
			logo,
			dateLaunched
		});
		return broker;
	}
}
