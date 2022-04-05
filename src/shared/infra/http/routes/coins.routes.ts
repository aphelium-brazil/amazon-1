import { CreateCoinController } from "@modules/coin/useCases/createCoin/CreateCoinController";
import { RemoveCoinController } from "@modules/coin/useCases/removeCoin/RemoveCoinController";
import { Router } from "express";

export const coinsRoutes = Router();

const createCoinController = new CreateCoinController();
const removeCoinController = new RemoveCoinController();

coinsRoutes.post("/", createCoinController.handle);
coinsRoutes.delete("/:id", removeCoinController.handle);
