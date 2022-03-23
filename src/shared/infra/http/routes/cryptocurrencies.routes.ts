import { CreateCryptocurrencyController } from "@modules/cryptocurrencies/useCases/createCryptocurrency/CreateCryptocurrencyController";
import { CreateSocialProfileController } from "@modules/cryptocurrencies/useCases/createSocialProfile/CreateSocialProfileController";
import { Router } from "express";

const cryptocurrenciesRoutes = Router();

const createCryptocurrencyController = new CreateCryptocurrencyController();
const createSocialProfileController = new CreateSocialProfileController();

cryptocurrenciesRoutes.post("/", createCryptocurrencyController.handle);

cryptocurrenciesRoutes.post(
    "/socialprofiles",
    createSocialProfileController.handle
);

export { cryptocurrenciesRoutes };
