import { v4 as uuidV4 } from "uuid";

class Fiat {
    id: string;
    name: string;
    country: string;
    description: string;
    symbol: string;
    sign: string;
    createdAt: Date;
    updatedAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Fiat };
