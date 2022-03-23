import { ICreateFiatDTO } from "@modules/fiats/dtos/ICreateFiatDTO";
import { inject, injectable } from "tsyringe";

import { IFiatsRepository } from "../../repositories/IFiatsRepository";
import { Fiat } from "../../typeorm/entities/Fiat";

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
    }: ICreateFiatDTO): Promise<Fiat> {
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
