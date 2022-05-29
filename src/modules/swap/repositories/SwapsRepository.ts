import type { ICreateSwapDTO } from "@modules/swap/dtos/ICreateSwapDTO";
import type { ISwapsRepository } from "@modules/swap/repositories/interfaces/ISwapsRepository";

import type { Swap } from "../entities/Swap";

export class SwapsRepository implements ISwapsRepository {
    create(data: ICreateSwapDTO): Promise<Swap> {
        throw new Error("Method not implemented.");
    }

    findByIds(ids: string[]): Promise<Swap[]> {
        throw new Error("Method not implemented.");
    }

    listAll(): Promise<Swap[]> {
        throw new Error("Method not implemented.");
    }
}
