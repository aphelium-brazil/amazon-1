import { ICreateFiatDTO } from "../dtos/ICreateFiatDTO";

interface IFiatsRepository {
    create(data: ICreateFiatDTO): Promise<void>;
}

export { IFiatsRepository };
