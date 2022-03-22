import { Router } from "express";
import { brokersRoutes } from "./brokers.routes";

import { fiatsRoutes } from "./fiats.routes";

const router = Router();

router.use("/api/v1/fiats", fiatsRoutes);
router.use("/api/v1/brokers", brokersRoutes);

export { router };
