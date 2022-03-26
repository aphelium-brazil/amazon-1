import { ICreateCoinDTO } from "../dtos/ICreateCoinDTO";
import { Coin } from "../typeorm/entities/Coin";

interface ICoinsRepository {
    create(data: ICreateCoinDTO): Promise<Coin>;
    all(): Promise<Coin[]>;
    findById(id: string): Promise<Coin>;
    findByName(name: string): Promise<Coin>;
    findBySymbol(symbol: string): Promise<Coin>;
}

export { ICoinsRepository };
