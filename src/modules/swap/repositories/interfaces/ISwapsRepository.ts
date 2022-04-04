import { ICreateSwapDTO } from "@modules/swap/dtos/ICreateSwapDTO";
import { Swap } from "@modules/swap/entities/Swap";

export interface ISwapsRepository {
    create(data: ICreateSwapDTO): Promise<Swap>;
    findByIds(ids: string[]): Promise<Swap[]>;
    listAll(): Promise<Swap[]>;
}
