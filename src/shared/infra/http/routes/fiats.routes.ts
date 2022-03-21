import { CreateFiatController } from "@modules/fiats/useCases/CreateFiatController";
import { Router } from "express";
import multer from "multer";

const fiatsRoutes = Router();

const createFiatsController = new CreateFiatController();

fiatsRoutes.post("/", createFiatsController.handle);

export { fiatsRoutes };
