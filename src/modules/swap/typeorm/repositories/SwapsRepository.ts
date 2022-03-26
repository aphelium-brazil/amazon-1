import { ICreateSwapDTO } from "@modules/swap/dtos/ICreateSwapDTO";
import { ISwapsRepository } from "@modules/swap/repositories/ISwapsRepository";
import { getRepository, Repository } from "typeorm";
import { Swap } from "../entities/Swap";

class SwapsRepository implements ISwapsRepository {
    private repository: Repository<Swap>;

    constructor() {
        this.repository = getRepository(Swap);
    }

    async listAll(): Promise<Swap[]> {
        const swaps = await this.repository.find({ relations: ["coins"] });
        return swaps;
    }

    async findByIds(ids: string[]): Promise<Swap[]> {
        const swap = await this.repository.findByIds(ids);
        return swap;
    }

    async create({ id, name, coins, isActive }: ICreateSwapDTO): Promise<Swap> {
        const swap = await this.repository.create({
            id,
            name,
            coins,
            isActive,
        });

        await this.repository.save(swap);

        return swap;
    }
}

export { SwapsRepository };
