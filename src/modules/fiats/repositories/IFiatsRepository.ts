import { ICreateFiatDTO } from "../dtos/ICreateFiatDTO";
import { Fiat } from "../typeorm/entities/Fiat";

interface IFiatsRepository {
    create(data: ICreateFiatDTO): Promise<Fiat>;
    findById(id: string): Promise<Fiat>;
    findByName(name: string): Promise<Fiat>;
}

export { IFiatsRepository };
