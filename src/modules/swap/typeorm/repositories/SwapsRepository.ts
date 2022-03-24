import { ICreateSwapDTO } from "@modules/swap/dtos/ICreateSwapDTO";
import { ISwapsRepository } from "@modules/swap/repositories/ISwapsRepository";
import { getRepository, Repository } from "typeorm";
import { Swap } from "../entities/Swap";

class SwapsRepository implements ISwapsRepository {
    private repository: Repository<Swap>;

    constructor() {
        this.repository = getRepository(Swap);
    }

    async create({ name, isActive }: ICreateSwapDTO): Promise<Swap> {
        const swap = await this.repository.create({
            name,
            isActive,
        });

        await this.repository.save(swap);

        return swap;
    }
}

export { SwapsRepository };
