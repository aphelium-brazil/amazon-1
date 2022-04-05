import { ICreateCoinDTO } from "@modules/coin/dtos/ICreateCoinDTO";
import { IUpdateCoinDTO } from "@modules/coin/dtos/IUpdateCoinDTO";
import { Coin } from "@modules/coin/entities/Coin";

export interface ICoinsRepository {
    create(data: ICreateCoinDTO): Promise<Coin>;
    all(): Promise<Coin[]>;
    findByIds(ids: string[]): Promise<Coin[]>;
    findByName(name: string): Promise<Coin>;
    findBySymbol(symbol: string): Promise<Coin>;
    update(data: IUpdateCoinDTO): Promise<Coin>;
    remove(id: string): Promise<void>;
}
