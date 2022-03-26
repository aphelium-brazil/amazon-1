import { ICreateCoinDTO } from "@modules/coin/dtos/ICreateCoinDTO";
import { Coin } from "@modules/coin/typeorm/entities/Coin";
import { ICoinsRepository } from "../ICoinRepository";

class CoinRepositoryInMemory implements ICoinsRepository {
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
        platformName,
        platformDescription,
        platformTokenAddress,
        websiteName,
        websiteDescription,
        websiteUrl,
        sourceCodeName,
        sourceCodeUrl,
        techDocName,
        techDocDescription,
        techDocFile,
        techDocUrl,
        techDocCreatedAt,
        techDocUpdatedAt,
        categoryName,
        categoryDescription,
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
            platformName,
            platformDescription,
            platformTokenAddress,
            websiteName,
            websiteDescription,
            websiteUrl,
            sourceCodeName,
            sourceCodeUrl,
            techDocName,
            techDocDescription,
            techDocFile,
            techDocUrl,
            techDocCreatedAt,
            techDocUpdatedAt,
            categoryName,
            categoryDescription,
        });

        this.coins.push(coin);

        return coin;
    }
}

export { CoinRepositoryInMemory };
