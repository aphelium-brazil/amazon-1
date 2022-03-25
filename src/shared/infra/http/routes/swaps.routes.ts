import { CreateCryptosSwapController } from "@modules/swap/useCases/createCryptosSwapUseCase/CreateCryptosSwapController";
import { CreateSwapController } from "@modules/swap/useCases/createSwapUseCase/CreateSwapController";
import { Router } from "express";
import multer from "multer";

const swapsRoutes = Router();

const createSwapController = new CreateSwapController();
const createCryptosSwapController = new CreateCryptosSwapController();

swapsRoutes.post("/", createSwapController.handle);

swapsRoutes.post("/cryptos/:id", createCryptosSwapController.handle);

export { swapsRoutes };
