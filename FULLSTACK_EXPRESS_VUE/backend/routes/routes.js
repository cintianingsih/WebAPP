//import functions from controller
import express from "express";
import {
    showBarang,
} from "../controllers/barang.js";

const router = express.Router();

//endpoint get all "barang"
router.get("/barang", showBarang);

export default router;