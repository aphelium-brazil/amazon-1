import { ICreateSwapDTO } from "@modules/swap/dtos/ICreateSwapDTO";
import { Swap } from "@modules/swap/typeorm/entities/Swap";
import { ISwapsRepository } from "../ISwapsRepository";

class SwapsRepositoryInMemory implements ISwapsRepository {
    swaps: Swap[] = [];

    async listAll(): Promise<Swap[]> {
        return this.swaps;
    }

    async findById(id: string): Promise<Swap> {
        return this.swaps.find((swap) => swap.id === id);
    }

    async create({ id, name, coins, isActive }: ICreateSwapDTO): Promise<Swap> {
        const swap = new Swap();
        Object.assign(swap, { id, name, coins, isActive });
        this.swaps.push(swap);
        return swap;
    }
}

export { SwapsRepositoryInMemory };
