import { v4 as uuidV4 } from "uuid";

export class Coin {
    id!: string;

    name!: string;

    description!: string;

    symbol!: string;

    country_code!: string;

    logo!: string;

    isActive!: boolean;

    firstHistoricalData!: string;

    lastHistoricalData!: string;

    createdAt!: Date;

    updatedAt!: Date;

    deletedAt!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }
        if (this.id) {
            this.updatedAt = new Date();
        }
    }
}
