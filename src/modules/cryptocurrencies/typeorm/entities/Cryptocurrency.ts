import { Coin } from "@modules/coin/typeorm/entities/Coin";

class Cryptocurrency extends Coin {
    logo: string;
    slug: string;
    isActive: boolean;
    firstHistoricalData: string;
    lastHistoricalData: string;
    platformName: string;
    platformDescription: string;
    platformSymbol: string;
    platformSlug: string;
    platformTokenAddress: string;
    websiteName: string;
    websiteDescription: string;
    websiteUrl: string;
    sourceCodeName: string;
    sourceCodeUrl: string;
    techDocName: string;
    techDocDescription: string;
    techDocFile: string;
    techDocUrl: string;
    techDocCreatedAt: Date;
    techDocUpdatedAt: Date;
    categoryName: string;
    categoryDescription: string;
}

export { Cryptocurrency };
