import { ICreateBrokerDTO } from "@modules/brokers/dtos/ICreateBrokerDTO";
import { Broker } from "@modules/brokers/typeorm/entities/Broker";
import { IBrokerRepository } from "../IBrokerRepository";

class BrokerRepositoryInMemory implements IBrokerRepository {
    brokers: Broker[] = [];

    async create({
        name,
        description,
        slug,
        logo,
        dateLaunched,
    }: ICreateBrokerDTO): Promise<Broker> {
        const broker = new Broker();

        Object.assign(broker, {
            name,
            description,
            slug,
            logo,
            dateLaunched,
        });

        this.brokers.push(broker);

        return broker;
    }
}

export { BrokerRepositoryInMemory };
