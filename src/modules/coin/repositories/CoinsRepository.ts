import { ICreateCoinDTO } from "@modules/coin/dtos/ICreateCoinDTO";
import { ICoinsRepository } from "@modules/coin/repositories/interfaces/ICoinRepository";
import { getRepository, Repository } from "typeorm";

import { IUpdateCoinDTO } from "../dtos/IUpdateCoinDTO";
import { Coin } from "../entities/Coin";

export class CoinsRepository implements ICoinsRepository {
    private repository: Repository<Coin>;

    constructor() {
        this.repository = getRepository(Coin);
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
        const coin = this.repository.create({
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

        return this.repository.save(coin);
    }

    async all(): Promise<Coin[]> {
        return this.repository.find();
    }

    async findByIds(ids: string[]): Promise<Coin[]> {
        return this.repository.findByIds(ids);
    }

    async findByName(name: string): Promise<Coin> {
        return this.repository.findOne({ name });
    }

    async findBySymbol(symbol: string): Promise<Coin> {
        return this.repository.findOne({ symbol });
    }

    async update({
        id,
        name,
        isFiat,
        country,
        description,
        logo,
        symbol,
        isActive,
        firstHistoricalData,
        lastHistoricalData,
    }: IUpdateCoinDTO): Promise<Coin> {
        const oldCoin = await this.repository.findOne({ id });
        const coin = await this.repository.update(
            { id },
            {
                name: name || oldCoin.name,
                isFiat: isFiat || oldCoin.isFiat,
                country: country || oldCoin.country,
                description: description || oldCoin.description,
                logo: logo || oldCoin.logo,
                symbol: symbol || oldCoin.symbol,
                isActive: isActive || oldCoin.isActive,
                firstHistoricalData:
                    firstHistoricalData || oldCoin.firstHistoricalData,
                lastHistoricalData:
                    lastHistoricalData || oldCoin.lastHistoricalData,
                updatedAt: new Date(),
            }
        );

        return coin.raw[0];
    }
    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
