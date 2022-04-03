import { ICreateCoinDTO } from "../dtos/ICreateCoinDTO";
import { Coin } from "../typeorm/entities/Coin";

export interface ICoinsRepository {
    create(data: ICreateCoinDTO): Promise<Coin>;
    all(): Promise<Coin[]>;
    findByIds(ids: string[]): Promise<Coin[]>;
    findByName(name: string): Promise<Coin>;
    findBySymbol(symbol: string): Promise<Coin>;
}
