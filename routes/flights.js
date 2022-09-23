import { Router } from "express";
import * as flightsCtrl from "../controllers/flights.js";

const router = Router();

/* GET */
router.get("/", flightsCtrl.index);

router.get("/new", flightsCtrl.new);

/* POST */
router.post("/", flightsCtrl.create);

export { router };
