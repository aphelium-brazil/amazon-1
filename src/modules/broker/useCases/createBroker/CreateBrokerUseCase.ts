import { IBrokerRepository } from "@modules/broker/repositories/IBrokerRepository";
import { Broker } from "@modules/broker/typeorm/entities/Broker";
import { inject, injectable } from "tsyringe";

interface IRequest {
    name: string;
    description: string;
    slug: string;
    logo: string;
    dateLaunched: Date;
}

@injectable()
class CreateBrokerUseCase {
    constructor(
        @inject("BrokersRepository")
        private brokerRegistry: IBrokerRepository
    ) {}

    async execute({
        name,
        description,
        slug,
        logo,
        dateLaunched,
    }: IRequest): Promise<Broker> {
        const broker = await this.brokerRegistry.create({
            name,
            description,
            slug,
            logo,
            dateLaunched,
        });
        return broker;
    }
}

export { CreateBrokerUseCase };
