import { Swap } from "@modules/swap/typeorm/entities/Swap";

export interface ISwapAvailableInBrokerDTO {
    brokerId: string;
    swaps: string[];
}
