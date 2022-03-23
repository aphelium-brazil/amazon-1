import { Coin } from "@modules/coin/typeorm/entities/Coin";
import { Column, Entity } from "typeorm";
@Entity("cryptocurrencies")
class Cryptocurrency extends Coin {
    @Column()
    logo: string;
    @Column()
    slug: string;
    @Column()
    isActive: boolean;
    @Column()
    firstHistoricalData: string;
    @Column()
    lastHistoricalData: string;
    @Column()
    platformName: string;
    @Column()
    platformDescription: string;
    @Column()
    platformSymbol: string;
    @Column()
    platformSlug: string;
    @Column()
    platformTokenAddress: string;
    @Column()
    websiteName: string;
    @Column()
    websiteDescription: string;
    @Column()
    websiteUrl: string;
    @Column()
    sourceCodeName: string;
    @Column()
    sourceCodeUrl: string;
    @Column()
    techDocName: string;
    @Column()
    techDocDescription: string;
    @Column()
    techDocFile: string;
    @Column()
    techDocUrl: string;
    @Column()
    @Column()
    techDocCreatedAt: Date;
    @Column()
    techDocUpdatedAt: Date;
    @Column()
    categoryName: string;
    @Column()
    categoryDescription: string;
}

export { Cryptocurrency };
