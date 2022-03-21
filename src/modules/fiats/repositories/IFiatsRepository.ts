import { ICreateFiatDTO } from "../dtos/ICreateFiatDTO";
import { Fiat } from "../typeorm/entities/Fiat";

interface IFiatsRepository {
    create(data: ICreateFiatDTO): Promise<Fiat>;
}

export { IFiatsRepository };
