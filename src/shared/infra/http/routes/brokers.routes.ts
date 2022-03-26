import { CreateBrokerController } from "@modules/brokers/useCases/createBroker/CreateBrokerController";
import { SwapAvailableInBrokerController } from "@modules/brokers/useCases/swapAvailableInBrokerUseCase/SwapAvailableInBrokerController";
import { Router } from "express";
import multer from "multer";

const brokersRoutes = Router();

const createBrokerController = new CreateBrokerController();
const swapAvailableInBrokerController = new SwapAvailableInBrokerController();

brokersRoutes.post("/", createBrokerController.handle);
brokersRoutes.post("/swaps/:id", swapAvailableInBrokerController.handle);

export { brokersRoutes };
