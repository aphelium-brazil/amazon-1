import "@shared/container/providers";
import { IFiatsRepository } from "@modules/fiats/repositories/IFiatsRepository";
import { FiatsRepository } from "@modules/fiats/typeorm/repository/FiatsRepository";
import { container } from "tsyringe";
import { IBrokerRepository } from "@modules/brokers/repositories/IBrokerRepository";
import { BrokersRepository } from "@modules/brokers/typeorm/repositories/BrokerRepository";

import { IExplorerRepository } from "@modules/cryptocurrencies/repositories/IExplorerRepository";
import { ExplorerRepository } from "@modules/cryptocurrencies/typeorm/repositories/ExplorerRepository";
import { ISocialProfilesRepository } from "@modules/cryptocurrencies/repositories/ISocialProfileRepository";
import { SocialProfilesRepository } from "@modules/cryptocurrencies/typeorm/repositories/SocialProfileRepository";

container.registerSingleton<IFiatsRepository>(
    "FiatsRepository",
    FiatsRepository
);

container.registerSingleton<IBrokerRepository>(
    "BrokersRepository",
    BrokersRepository
);

container.registerSingleton<ISocialProfilesRepository>(
    "SocialProfilesRepository",
    SocialProfilesRepository
);

container.registerSingleton<IExplorerRepository>(
    "ExplorerRepository",
    ExplorerRepository
);




