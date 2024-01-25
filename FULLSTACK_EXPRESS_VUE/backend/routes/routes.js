//import functions from controller
import express from "express";
import {showBarang} from "../controllers/barang.js";
import {showKasir} from "../controllers/kasir.js";

const router = express.Router();

//endpoint get all "barang"
router.get("/barang", showBarang);

//endpoint get all "kasir"
router.get("/kasir", showKasir);

export default router;