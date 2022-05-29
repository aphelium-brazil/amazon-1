import type { ICreateBrokerDTO } from "@modules/brokers/dtos/ICreateBrokerDTO";
import type { Broker } from "@modules/brokers/entities/Broker";

export interface IBrokerRepository {
    create(data: ICreateBrokerDTO): Promise<Broker | undefined>;
    findById(id: string): Promise<Broker | undefined>;
    findByName(name: string): Promise<Broker | undefined>;
}
