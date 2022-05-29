import type { ICreateCoinDTO } from "@modules/coin/dtos/ICreateCoinDTO";
import type { IUpdateCoinDTO } from "@modules/coin/dtos/IUpdateCoinDTO";
import type { Coin } from "@modules/coin/entities/Coin";

export interface ICoinsRepository {
    create(data: ICreateCoinDTO): Promise<Coin>;
    all(): Promise<Coin[]>;

    findByIds(ids: string[]): Promise<Coin[]>;

    findByName(name: string): Promise<Coin | undefined>;
    findBySymbol(symbol: string): Promise<Coin | undefined>;

    update(data: IUpdateCoinDTO): Promise<boolean>;

    remove(id: string): Promise<void>;
}
