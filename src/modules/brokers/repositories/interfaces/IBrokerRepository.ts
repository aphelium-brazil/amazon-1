import type { ICreateBrokerDTO } from '@modules/brokers/dtos/ICreateBrokerDTO';
import type { Broker } from '@modules/brokers/entities/Broker';

export interface IBrokerRepository {
	create(data: ICreateBrokerDTO): Promise<Broker | null>;
	findById(id: string): Promise<Broker | null>;
	findByName(name: string): Promise<Broker | null>;
}
