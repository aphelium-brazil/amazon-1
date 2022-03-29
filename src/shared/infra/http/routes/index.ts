import { Router } from "express";
import { brokersRoutes } from "./brokers.routes";
import { coinsRoutes } from "./coins.routes";
import { klinesRoutes } from "./klines.routes";
import { swapsRoutes } from "./swaps.routes";

const router = Router();

router.use("/api/v1/brokers", brokersRoutes);
router.use("/api/v1/coins", coinsRoutes);
router.use("/api/v1/swaps", swapsRoutes);
router.use("/api/v1/klines", klinesRoutes);

export { router };
