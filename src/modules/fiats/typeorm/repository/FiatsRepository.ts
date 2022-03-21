import { ICreateFiatDTO } from "@modules/fiats/dtos/ICreateFiatDTO";
import { IFiatsRepository } from "@modules/fiats/repositories/IFiatsRepository";
import { Fiat } from "@modules/fiats/typeorm/entities/Fiat";
import { getRepository, Repository } from "typeorm";

class FiatsRepository implements IFiatsRepository {
    private repository: Repository<Fiat>;

    constructor() {
        this.repository = getRepository(Fiat);
    }

    async create({
        name,
        country,
        description,
        symbol,
        sign,
    }: ICreateFiatDTO): Promise<Fiat> {
        const fiat = this.repository.create({
            name,
            country,
            description,
            symbol,
            sign,
        });
        await this.repository.save(fiat);
        return fiat;
    }
}

export { FiatsRepository };
