import { Router } from "express";
import { brokersRoutes } from "./brokers.routes";
import { cryptocurrenciesRoutes } from "./cryptocurrencies.routes";

import { fiatsRoutes } from "./fiats.routes";

const router = Router();

router.use("/api/v1/fiats", fiatsRoutes);
router.use("/api/v1/brokers", brokersRoutes);
router.use("/api/v1/cryptocurrencies", cryptocurrenciesRoutes);

export { router };
