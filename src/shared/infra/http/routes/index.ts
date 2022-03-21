import { Router } from "express";

import { fiatsRoutes } from "./fiats.routes";

const router = Router();

router.use("/api/v1/fiats", fiatsRoutes);

export { router };
