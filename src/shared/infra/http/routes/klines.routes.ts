import { CreateKlineController } from "@modules/kline/useCases/createKlineUseCase/CreateKlineController";
import { Router } from "express";

export const klinesRoutes = Router();

const createKlineController = new CreateKlineController();

klinesRoutes.post("/", createKlineController.handle);
