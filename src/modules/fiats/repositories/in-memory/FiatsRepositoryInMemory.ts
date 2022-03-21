import { ICreateFiatDTO } from "@modules/fiats/dtos/ICreateFiatDTO";
import { Fiat } from "@modules/fiats/typeorm/entities/Fiat";

import { IFiatsRepository } from "../IFiatsRepository";

class FiatsRepositoryInMemory implements IFiatsRepository {
    fiats: Fiat[] = [];

    async create({
        name,
        country,
        description,
        symbol,
        sign,
    }: ICreateFiatDTO): Promise<void> {
        const fiat = new Fiat();
        Object.assign(fiat, { name, country, description, symbol, sign });
        this.fiats.push(fiat);
    }
}

export { FiatsRepositoryInMemory };
