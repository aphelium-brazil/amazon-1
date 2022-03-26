import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("coins")
class Coin {
    @PrimaryColumn()
    id: string;
    @Column()
    name: string;
    @Column()
    description: string;
    @Column()
    symbol: string;

    @Column()
    isFiat: boolean;

    @Column()
    country: string;

    @Column()
    logo: string;

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

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Coin };
