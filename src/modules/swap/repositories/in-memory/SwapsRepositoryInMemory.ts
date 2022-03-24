import { ICreateSwapDTO } from "@modules/swap/dtos/ICreateSwapDTO";
import { Swap } from "@modules/swap/typeorm/entities/Swap";
import { ISwapsRepository } from "../ISwapsRepository";

class SwapsRepositoryInMemory implements ISwapsRepository {
    swaps: Swap[] = [];

    async create({ name, isActive }: ICreateSwapDTO): Promise<Swap> {
        const swap = new Swap();
        Object.assign(swap, { name, isActive });
        this.swaps.push(swap);

        return swap;
    }
}

export { SwapsRepositoryInMemory };
