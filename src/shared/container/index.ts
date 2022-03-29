import { IBrokerRepository } from "@modules/brokers/repositories/IBrokerRepository";
import { BrokersRepository } from "@modules/brokers/typeorm/repositories/BrokerRepository";
import { ICoinsRepository } from "@modules/coin/repositories/ICoinRepository";
import { IExplorerRepository } from "@modules/coin/repositories/IExplorerRepository";
import { ISocialProfileRepository } from "@modules/coin/repositories/ISocialProfileRepository";
import { CoinsRepository } from "@modules/coin/typeorm/repositories/CoinsRepository";
import { ExplorerRepository } from "@modules/coin/typeorm/repositories/ExplorerRepository";
import { SocialProfilesRepository } from "@modules/coin/typeorm/repositories/SocialProfilesRepository";
import { IKlineRepository } from "@modules/kline/repositories/IKlineRepository";
import { KlineRepository } from "@modules/kline/repositories/repositories/KlineRepository";
import { ISwapsRepository } from "@modules/swap/repositories/ISwapsRepository";
import { SwapsRepository } from "@modules/swap/typeorm/repositories/SwapsRepository";
import "@shared/container/providers";
import { container } from "tsyringe";

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

container.registerSingleton<ISwapsRepository>(
    "SwapsRepository",
    SwapsRepository
);

container.registerSingleton<ICoinsRepository>(
    "CoinsRepository",
    CoinsRepository
);

container.registerSingleton<IKlineRepository>(
    "KlineRepository",
    KlineRepository
);
