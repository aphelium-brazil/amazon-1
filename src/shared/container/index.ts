import "@shared/container/providers";
import { IFiatsRepository } from "@modules/fiats/repositories/IFiatsRepository";
import { FiatsRepository } from "@modules/fiats/typeorm/repository/FiatsRepository";
import { container } from "tsyringe";

container.registerSingleton<IFiatsRepository>(
    "FiatsRepository",
    FiatsRepository
);
