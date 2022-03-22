import { ICreateBrokerDTO } from "@modules/broker/dtos/ICreateBrokerDTO";
import { Broker } from "@modules/broker/typeorm/entities/Broker";
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
