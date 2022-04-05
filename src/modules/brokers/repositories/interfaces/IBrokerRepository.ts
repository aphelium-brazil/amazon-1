import { ICreateBrokerDTO } from '@modules/brokers/dtos/ICreateBrokerDTO';
import { Broker } from '@modules/brokers/entities/Broker';

export interface IBrokerRepository {
	create(data: ICreateBrokerDTO): Promise<Broker>;
	findById(id: string): Promise<Broker>;
	findByName(name: string): Promise<Broker>;
}
