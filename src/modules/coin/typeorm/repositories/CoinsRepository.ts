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
            updatedAt: new Date(),
        });

        await this.repository.save(coin);
        return coin;
    }
    async all(): Promise<Coin[]> {
        return await this.repository.find();
    }
    async findByIds(ids: string[]): Promise<Coin[]> {
        const coin = await this.repository.findByIds(ids);
        return coin;
    }
    async findByName(name: string): Promise<Coin> {
        const coin = await this.repository.findOne({ name });
        return coin;
    }
    async findBySymbol(symbol: string): Promise<Coin> {
        const coin = await this.repository.findOne({ symbol });
        return coin;
    }
}
