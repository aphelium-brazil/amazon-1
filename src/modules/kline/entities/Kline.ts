import { v4 as uuidV4 } from "uuid";
import type { IntervalEnums } from "../enums/IntervalEnums";

export class Kline {
    id!: string;

    interval!: IntervalEnums;

    swapId!: string;

    brokerId!: string;

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
