//import functions from controller
import express from "express";
import {addBarang, deleteBarang, showBarang, showBarangById, updateBarang} from "../controllers/barang.js";
import {showKasir} from "../controllers/kasir.js";
import { showTenan } from "../controllers/tenan.js";

const router = express.Router();

//endpoint BARANG
//get all "barang"
router.get("/barang", showBarang);
//get one "barang"
router.get("/barang/:id", showBarangById);
//insert "barang"
router.post('/insert/barang', addBarang);
//update "barang"
router.put('/update/barang/:id', updateBarang);
//delete "barang"
router.delete('/delete/barang/:id', deleteBarang);

//endpoint KASIR
//get all "kasir"
router.get("/kasir", showKasir);

//endpoint TENAN
//get all "tenan"
router.get("/tenan", showTenan);

export default router;