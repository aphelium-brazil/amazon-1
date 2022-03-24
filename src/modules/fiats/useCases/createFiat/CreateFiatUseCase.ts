import { ICreateFiatDTO } from "@modules/fiats/dtos/ICreateFiatDTO";
import { AppError } from "@shared/errors/AppError";
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
        const fiatAlreadyExists = await this.fiatsRepository.findByName(name);

        if (fiatAlreadyExists) {
            throw new AppError("Fiat already exists!");
        }

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
