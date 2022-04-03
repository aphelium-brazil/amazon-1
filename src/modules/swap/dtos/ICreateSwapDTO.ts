import { Coin } from "@modules/coin/typeorm/entities/Coin";

export interface ICreateSwapDTO {
    name: string;
    isActive: boolean;
    coins?: Coin[];
    id?: string;
}
