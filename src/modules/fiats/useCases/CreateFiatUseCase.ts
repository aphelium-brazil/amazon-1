import { inject, injectable } from "tsyringe";

import { IFiatsRepository } from "../repositories/IFiatsRepository";

interface IRequest {
    name: string;
    country: string;
    description: string;
    symbol: string;
    sign: string;
}

// @injectable()
class CreateFiatUseCase {
    constructor(
        // @inject("FiatsRepository")
        private fiatsRepository: IFiatsRepository
    ) {}

    async execute({
        name,
        country,
        description,
        symbol,
        sign,
    }: IRequest): Promise<void> {
        this.fiatsRepository.create({
            name,
            country,
            description,
            symbol,
            sign,
        });
    }
}

export { CreateFiatUseCase };
