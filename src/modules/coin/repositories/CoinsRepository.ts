import type { ICreateCoinDTO } from "@modules/coin/dtos/ICreateCoinDTO";
import type { ICoinsRepository } from "@modules/coin/repositories/interfaces/ICoinRepository";
import type { Repository } from "typeorm";
import { getRepository } from "typeorm";

import type { IUpdateCoinDTO } from "../dtos/IUpdateCoinDTO";
import { Coin } from "../entities/Coin";

export class CoinsRepository implements ICoinsRepository {
    private readonly repository: Repository<Coin>;

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

    async findByName(name: string) {
        return this.repository.findOne({ name });
    }

    async findBySymbol(symbol: string) {
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
    }: IUpdateCoinDTO) {
        const oldCoin = await this.repository.findOne({ id });

        if (!oldCoin) {
            return false;
        }

        const updateDate = new Date();

        const coin = await this.repository.update(
            { id },
            {
                name,
                isFiat: isFiat,
                country: country,
                description: description,
                logo: logo,
                symbol: symbol,
                isActive: isActive,
                firstHistoricalData: firstHistoricalData,
                lastHistoricalData: lastHistoricalData,
                updatedAt: updateDate,
            }
        );

        return !!coin.affected;
    }

    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}
