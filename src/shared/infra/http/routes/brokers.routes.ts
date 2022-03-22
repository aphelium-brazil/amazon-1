import { CreateBrokerController } from "@modules/broker/useCases/createBroker/CreateBrokerController";
import { Router } from "express";
import multer from "multer";

const brokersRoutes = Router();

const createBrokerController = new CreateBrokerController();

brokersRoutes.post("/", createBrokerController.handle);

export { brokersRoutes };
