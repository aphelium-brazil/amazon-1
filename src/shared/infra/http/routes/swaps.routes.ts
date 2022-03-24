import { CreateSwapController } from "@modules/swap/useCases/createSwapUseCase/CreateSwapController";
import { Router } from "express";
import multer from "multer";

const swapsRoutes = Router();

const createSwapController = new CreateSwapController();

swapsRoutes.post("/", createSwapController.handle);

export { swapsRoutes };
