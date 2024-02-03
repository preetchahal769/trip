// route setup for user authentication (signup and login)

import { Router } from "express";
import {getTickets} from "../controller/ticketscontrol.js";

const router = Router();

/**
 * POST /signup
 * Route for user signup
 */

router.get("/getticktes", getTickets);

export default router;
