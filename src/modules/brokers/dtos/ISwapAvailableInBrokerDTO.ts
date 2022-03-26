import { Swap } from "@modules/swap/typeorm/entities/Swap";

interface ISwapAvailableInBrokerDTO {
    swaps: Swap[];
}

export { ISwapAvailableInBrokerDTO };
