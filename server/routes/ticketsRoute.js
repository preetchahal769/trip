// route setup for user authentication (signup and login)

import { Router } from "express";
import {getTickets , bookTicket} from "../controller/ticketscontrol.js";

const router = Router();

/**
 * POST /signup
 * Route for user signup
 */

router.get("/getticktes", getTickets);
router.post("/bookticket", bookTicket);
export default router;
