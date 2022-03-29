import { Broker } from "@modules/brokers/typeorm/entities/Broker";
import { Swap } from "@modules/swap/typeorm/entities/Swap";
import { v4 as uuidV4 } from "uuid";

class Kline {
    id: string;
    interval: string;
    swapId: Swap;
    brokerId: Broker;
    candles?: any[];
    createdAt: Date;
    updatedAt: Date;
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Kline };
