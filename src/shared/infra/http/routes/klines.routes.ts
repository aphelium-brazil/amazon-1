import { CreateKlineController } from "@modules/kline/useCases/createKlineUseCase/CreateKlineController";
import { Router } from "express";

const klinesRoutes = Router();

const createKlineController = new CreateKlineController();

klinesRoutes.post("/", createKlineController.handle);

export { klinesRoutes };
