import { Broker } from "@modules/brokers/typeorm/entities/Broker";
import { Coin } from "@modules/coin/typeorm/entities/Coin";

interface ICreateSymbolDTO {
    name: string;
    coinFromId: Coin;
    coinToId: Coin;
    brokeId: Broker;
    url: string;
}

export { ICreateSymbolDTO };
