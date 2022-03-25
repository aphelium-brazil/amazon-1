import { ICreateSwapDTO } from "../dtos/ICreateSwapDTO";
import { Swap } from "../typeorm/entities/Swap";
import { SwapCryptoFiat } from "../typeorm/entities/SwapCryptoFiat";
import { SwapCryptos } from "../typeorm/entities/SwapCryptos";
import { SwapFiats } from "../typeorm/entities/SwapFiats";

interface ISwapsRepository {
    create(data: ICreateSwapDTO): Promise<Swap>;
    findById(id: string): Promise<Swap>;
}

export { ISwapsRepository };
