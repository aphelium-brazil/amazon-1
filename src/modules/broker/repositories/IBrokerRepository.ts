import { ICreateBrokerDTO } from "../dtos/ICreateBrokerDTO";
import { Broker } from "../typeorm/entities/Broker";

interface IBrokerRepository {
    create(data: ICreateBrokerDTO): Promise<Broker>;
}

export { IBrokerRepository };
