import { inject, injectable } from "tsyringe";

import { IFiatsRepository } from "../repositories/IFiatsRepository";
import { Fiat } from "../typeorm/entities/Fiat";

interface IRequest {
    name: string;
    country: string;
    description: string;
    symbol: string;
    sign: string;
}

@injectable()
class CreateFiatUseCase {
    constructor(
        @inject("FiatsRepository")
        private fiatsRepository: IFiatsRepository
    ) {}

    async execute({
        name,
        country,
        description,
        symbol,
        sign,
    }: IRequest): Promise<Fiat> {
        const fiat = await this.fiatsRepository.create({
            name,
            country,
            description,
            symbol,
            sign,
        });
        return fiat;
    }
}

export { CreateFiatUseCase };
