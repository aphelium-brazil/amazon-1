import { Coin } from "@modules/coin/entities/Coin";

export interface ICreateSwapDTO {
    name: string;
    isActive: boolean;
    coins?: Coin[];
    id?: string;
}
