// route setup for user authentication (signup and login)

import { Router } from "express";
import { signup , signin, verify} from "../controller/authcontrol.js";

const router = Router();

/**
 * POST /signup
 * Route for user signup
  */
router.post("/signup", signup);
router.post("/signin", signin);
router.get("/verify", verify);

export default router;
