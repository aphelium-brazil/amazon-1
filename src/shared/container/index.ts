import "@shared/container/providers";
import { IFiatsRepository } from "@modules/fiats/repositories/IFiatsRepository";
import { FiatsRepository } from "@modules/fiats/typeorm/repository/FiatsRepository";
import { container } from "tsyringe";
import { IBrokerRepository } from "@modules/brokers/repositories/IBrokerRepository";
import { BrokersRepository } from "@modules/brokers/typeorm/repositories/BrokerRepository";
import { ISocialProfileRepository } from "@modules/cryptocurrencies/repositories/ISocialProfileRepository";
import { SocialProfilesRepository } from "@modules/cryptocurrencies/typeorm/repositories/SocialProfilesRepository";
import { IExplorerRepository } from "@modules/cryptocurrencies/repositories/IExplorerRepository";
import { ExplorerRepository } from "@modules/cryptocurrencies/typeorm/repositories/ExplorerRepository";
import { ICryptocurrencyRepository } from "@modules/cryptocurrencies/repositories/ICryptocurrencyRepository";
import { CryptocurrenciesRepository } from "@modules/cryptocurrencies/typeorm/repositories/CryptocurrenciesRepository";
import { ISwapsRepository } from "@modules/swap/repositories/ISwapsRepository";
import { SwapsRepository } from "@modules/swap/typeorm/repositories/SwapsRepository";
import { SwapsCryptosRepository } from "@modules/swap/typeorm/repositories/SwapsCryptosRepository";

container.registerSingleton<IFiatsRepository>(
    "FiatsRepository",
    FiatsRepository
);

container.registerSingleton<IBrokerRepository>(
    "BrokersRepository",
    BrokersRepository
);

container.registerSingleton<ISocialProfileRepository>(
    "SocialProfilesRepository",
    SocialProfilesRepository
);

container.registerSingleton<IExplorerRepository>(
    "ExplorerRepository",
    ExplorerRepository
);

container.registerSingleton<ICryptocurrencyRepository>(
    "CryptocurrenciesRepository",
    CryptocurrenciesRepository
);

container.registerSingleton<ISwapsRepository>(
    "SwapsRepository",
    SwapsRepository
);

container.registerSingleton<ISwapsRepository>(
    "SwapsCryptosRepository",
    SwapsCryptosRepository
);
