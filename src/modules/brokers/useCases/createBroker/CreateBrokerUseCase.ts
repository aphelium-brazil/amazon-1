import { IBrokerRepository } from "@modules/brokers/repositories/interfaces/IBrokerRepository";
import type { Broker } from "@modules/brokers/entities/Broker";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

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
        @inject("BrokersRepository")
        private readonly brokerRepository: IBrokerRepository
    ) {}

    async execute({
        name,
        description,
        slug,
        logo,
        dateLaunched,
    }: IRequest): Promise<Broker | undefined> {
        const brokerAlreadyExists = await this.brokerRepository.findByName(
            name
        );

        if (brokerAlreadyExists) {
            throw new AppError("Broker already exists!");
        }

        return this.brokerRepository.create({
            name,
            description,
            slug,
            logo,
            dateLaunched,
        });
    }
}
