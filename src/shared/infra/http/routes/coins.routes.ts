import { CreateCoinController } from "@modules/coin/useCases/createCoin/CreateCoinController";
import { Router } from "express";

const coinsRoutes = Router();

const createCoinController = new CreateCoinController();

coinsRoutes.post("/", createCoinController.handle);

export { coinsRoutes };
