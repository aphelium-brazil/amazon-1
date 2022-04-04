import { ICreateCoinDTO } from "@modules/coin/dtos/ICreateCoinDTO";
import { ICoinsRepository } from "@modules/coin/repositories/ICoinRepository";
import { getRepository, Repository } from "typeorm";

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
}
