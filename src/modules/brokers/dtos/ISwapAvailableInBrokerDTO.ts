import { Swap } from "@modules/swap/entities/Swap";

export interface ISwapAvailableInBrokerDTO {
    brokerId: string;
    swaps: string[];
}
