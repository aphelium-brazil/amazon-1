import { Swap } from "@modules/swap/typeorm/entities/Swap";

interface ISwapAvailableInBrokerDTO {
    brokerId: string;
    swaps: string[];
}

export { ISwapAvailableInBrokerDTO };
