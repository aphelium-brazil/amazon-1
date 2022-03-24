import { ICreateFiatDTO } from "@modules/fiats/dtos/ICreateFiatDTO";
import { IFiatsRepository } from "@modules/fiats/repositories/IFiatsRepository";
import { Fiat } from "@modules/fiats/typeorm/entities/Fiat";
import { getRepository, Repository } from "typeorm";

class FiatsRepository implements IFiatsRepository {
    private repository: Repository<Fiat>;

    constructor() {
        this.repository = getRepository(Fiat);
    }
    async findById(id: string): Promise<Fiat> {
        const fiat = await this.repository.findOne(id);
        return fiat;
    }
    async findByName(name: string): Promise<Fiat> {
        const fiat = await this.repository.findOne({ name });
        return fiat;
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
