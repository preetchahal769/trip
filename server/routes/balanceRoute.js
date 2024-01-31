import { Router } from "express";
import { addBalance, getBalance } from "../controller/balancecontrol.js";

const router = Router();

/**
 * POST /addBalance
 * Route for balance addition and get balance
  */
router.post("/addBalance", addBalance);

router.post("/getBalance", getBalance);

export default router;
