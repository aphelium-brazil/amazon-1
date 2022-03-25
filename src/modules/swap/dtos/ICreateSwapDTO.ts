import { Coin } from "@modules/coin/typeorm/entities/Coin";

interface ICreateSwapDTO {
    name: string;
    isActive: boolean;
    coins?: Coin[];
    id?: string;
}
export { ICreateSwapDTO };
