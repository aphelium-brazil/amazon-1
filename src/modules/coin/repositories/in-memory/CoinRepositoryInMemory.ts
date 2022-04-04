import { ICreateCoinDTO } from "@modules/coin/dtos/ICreateCoinDTO";
import { Coin } from "@modules/coin/entities/Coin";

import { ICoinsRepository } from "../ICoinRepository";

export class CoinRepositoryInMemory implements ICoinsRepository {
    coins: Coin[] = [];

    async all(): Promise<Coin[]> {
        return this.coins;
    }
    async findBySymbol(symbol: string): Promise<Coin> {
        return this.coins.find((coin) => coin.symbol === symbol);
    }

    async findByIds(ids: string[]): Promise<Coin[]> {
        return this.coins.filter((coin) => ids.includes(coin.id));
    }
    async findByName(name: string): Promise<Coin> {
        return this.coins.find((coin) => coin.name === name);
    }

    async create({
        name,
        isFiat,
        country,
        description,
        logo,
        symbol,
        isActive,
        firstHistoricalData,
        lastHistoricalData,
    }: ICreateCoinDTO): Promise<Coin> {
        const coin = new Coin();

        Object.assign(coin, {
            name,
            isFiat,
            country,
            description,
            logo,
            symbol,
            isActive,
            firstHistoricalData,
            lastHistoricalData,
        });

        this.coins.push(coin);

        return coin;
    }
}
