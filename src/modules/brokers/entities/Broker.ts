import type { Swap } from "@modules/swap/entities/Swap";
import { v4 as uuidV4 } from "uuid";

export class Broker {
    id!: string;

    name!: string;

    description!: string;

    slug!: string;

    logo!: string;

    dateLaunched!: Date;

    swaps!: Swap[];

    createdAt!: Date;

    updatedAt!: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
