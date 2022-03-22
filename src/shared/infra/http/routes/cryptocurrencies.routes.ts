import { CreateSocialProfileController } from "@modules/cryptocurrencies/useCases/createSocialProfile/CreateSocialProfileController";
import { Router } from "express";

const cryptocurrenciesRoutes = Router();

const createSocialProfileController = new CreateSocialProfileController();

cryptocurrenciesRoutes.post(
    "/socialprofiles",
    createSocialProfileController.handle
);

export { cryptocurrenciesRoutes };
