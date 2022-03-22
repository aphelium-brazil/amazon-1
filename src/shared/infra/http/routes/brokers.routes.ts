import { CreateBrokerController } from "@modules/brokers/useCases/createBroker/CreateBrokerController";
import { Router } from "express";
import multer from "multer";

const brokersRoutes = Router();

const createBrokerController = new CreateBrokerController();

brokersRoutes.post("/", createBrokerController.handle);

export { brokersRoutes };
