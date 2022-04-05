import { CreateCoinController } from "@modules/coin/useCases/createCoin/CreateCoinController";
import { FindCoinByIdController } from "@modules/coin/useCases/findCoinById/FindCoinByIdController";
import { ListCoinsController } from "@modules/coin/useCases/listCoins/ListCoinsController";
import { RemoveCoinController } from "@modules/coin/useCases/removeCoin/RemoveCoinController";
import { UpdateCoinController } from "@modules/coin/useCases/updateCoin/UpdateCoinController";
import { Router } from "express";

export const coinsRoutes = Router();

const createCoinController = new CreateCoinController();
const findCoinByIdController = new FindCoinByIdController();
const removeCoinController = new RemoveCoinController();
const updateCoinController = new UpdateCoinController();
const listCoinsController = new ListCoinsController();

coinsRoutes.post("/", createCoinController.handle);
coinsRoutes.delete("/:id", removeCoinController.handle);
coinsRoutes.put("/:id", updateCoinController.handle);
coinsRoutes.get("/:id", findCoinByIdController.handle);
coinsRoutes.get("/", listCoinsController.handle);
