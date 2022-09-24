import { Router } from "express";
import * as flightsCtrl from "../controllers/flights.js";

const router = Router();

/* GET */
router.get("/", flightsCtrl.index);

router.get("/:id", flightsCtrl.show);

router.get("/:id/edit", flightsCtrl.edit);

router.get("/new", flightsCtrl.new);

/* POST */
router.post("/", flightsCtrl.create);

/* PUT */
router.put("/:id", flightsCtrl.submitEdit);

/* DELETE */
router.delete("/:id", flightsCtrl.delete);

export { router };
