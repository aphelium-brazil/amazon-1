/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { CreateSwapController } from "@modules/swap/useCases/createSwapUseCase/CreateSwapController";
import { ListSwapsController } from "@modules/swap/useCases/listSwapsUseCase/ListSwapsController";
import { SwapCoinsController } from "@modules/swap/useCases/swapCoinsUseCase/SwapCoinsController";
import { Router } from "express";

export const swapsRoutes = Router();

const createSwapController = new CreateSwapController();
const swapCoinsController = new SwapCoinsController();
const listSwapsController = new ListSwapsController();

swapsRoutes.post("/", createSwapController.handle);
swapsRoutes.post("/swapcoins/:id", swapCoinsController.handle);
swapsRoutes.get("/", listSwapsController.handle);
