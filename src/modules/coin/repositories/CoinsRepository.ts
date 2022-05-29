import type { ICreateCoinDTO } from "../dtos/ICreateCoinDTO";
import type { IUpdateCoinDTO } from "../dtos/IUpdateCoinDTO";
import type { Coin } from "../entities/Coin";
import type { ICoinsRepository } from "./interfaces/ICoinRepository";

export class CoinsRepository implements ICoinsRepository {
    create(data: ICreateCoinDTO): Promise<Coin> {
        throw new Error("Method not implemented.");
    }

    all(): Promise<Coin[]> {
        throw new Error("Method not implemented.");
    }

    findByIds(ids: string[]): Promise<Coin[]> {
        throw new Error("Method not implemented.");
    }

    findByName(name: string): Promise<Coin | undefined> {
        throw new Error("Method not implemented.");
    }

    findBySymbol(symbol: string): Promise<Coin | undefined> {
        throw new Error("Method not implemented.");
    }

    update(data: IUpdateCoinDTO): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    remove(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}
