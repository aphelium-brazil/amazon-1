import { ICreateBrokerDTO } from "@modules/brokers/dtos/ICreateBrokerDTO";
import { IBrokerRepository } from "@modules/brokers/repositories/IBrokerRepository";
import { getRepository, Repository } from "typeorm";
import { Broker } from "../entities/Broker";

class BrokersRepository implements IBrokerRepository {
    private repository: Repository<Broker>;

    constructor() {
        this.repository = getRepository(Broker);
    }

    async create({
        name,
        description,
        slug,
        logo,
        dateLaunched,
    }: ICreateBrokerDTO): Promise<Broker> {
        const broker = this.repository.create({
            name,
            description,
            slug,
            logo,
            dateLaunched,
        });

        await this.repository.save(broker);
        return broker;
    }
}

export { BrokersRepository };
