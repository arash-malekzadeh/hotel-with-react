import express from "express";
import Hotel from "../models/Hotel.js";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifytoken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel);

router.put("/:id", verifyAdmin, updateHotel);
router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/find/:id", getHotel);
router.get("/", getHotels);

export default router;
