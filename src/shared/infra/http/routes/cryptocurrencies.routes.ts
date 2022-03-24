import { CreateExplorerController } from "@modules/cryptocurrencies/useCases/createExplorer/CreateExplorerController";
import { CreateCryptocurrencyController } from "@modules/cryptocurrencies/useCases/createCryptocurrency/CreateCryptocurrencyController";

import { CreateSocialProfileController } from "@modules/cryptocurrencies/useCases/createSocialProfile/CreateSocialProfileController";
import { Router } from "express";

const cryptocurrenciesRoutes = Router();

const createSocialProfileController = new CreateSocialProfileController();

const createExplorerController = new CreateExplorerController();

const createCryptocurrencyController = new CreateCryptocurrencyController();

cryptocurrenciesRoutes.post("/", createCryptocurrencyController.handle);

cryptocurrenciesRoutes.post(
    "/socialprofiles",
    createSocialProfileController.handle
);

cryptocurrenciesRoutes.post("/explorer", createExplorerController.handle);

export { cryptocurrenciesRoutes };
