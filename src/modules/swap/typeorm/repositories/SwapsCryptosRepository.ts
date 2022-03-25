import { ICreateSwapDTO } from "@modules/swap/dtos/ICreateSwapDTO";
import { ISwapsRepository } from "@modules/swap/repositories/ISwapsRepository";
import { getRepository, Repository } from "typeorm";
import { Swap } from "../entities/Swap";
import { SwapCryptos } from "../entities/SwapCryptos";

class SwapsCryptosRepository implements ISwapsRepository {
    private repository: Repository<Swap>;

    constructor() {
        this.repository = getRepository(SwapCryptos);
    }

    async findById(id: string): Promise<Swap> {
        const swap = await this.repository.findOne(id);
        return swap;
    }

    async create({ name, isActive, coins, id }: ICreateSwapDTO): Promise<Swap> {
        const swap = await this.repository.create({
            id,
            name,
            isActive,
            coins,
        });

        await this.repository.save(swap);

        return swap;
    }
}

export { SwapsCryptosRepository };
