import type { ICreateBrokerDTO } from "@modules/brokers/dtos/ICreateBrokerDTO";
import type { IBrokerRepository } from "@modules/brokers/repositories/interfaces/IBrokerRepository";

import type { Broker } from "../entities/Broker";

export class BrokersRepository implements IBrokerRepository {
    create(data: ICreateBrokerDTO): Promise<Broker | undefined> {
        throw new Error("Method not implemented.");
    }

    findById(id: string): Promise<Broker | undefined> {
        throw new Error("Method not implemented.");
    }

    findByName(name: string): Promise<Broker | undefined> {
        throw new Error("Method not implemented.");
    }
}
