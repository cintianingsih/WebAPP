//import functions from controller
import express from "express";
import { addBarang, deleteBarang, showBarang, showBarangById, updateBarang } from "../controllers/barang.js";
import { addKasir, deleteKasir, showKasir, showKasirById, updateKasir } from "../controllers/kasir.js";
import { addTenan, deleteTenan, showTenan, showTenanById, updateTenan } from "../controllers/tenan.js";

const router = express.Router();

//endpoint BARANG
//get all "barang"
router.get("/barang", showBarang);
//get one "barang"
router.get("/barang/:id", showBarangById);
//insert "barang"
router.post("/insert/barang", addBarang);
//update "barang"
router.put("/update/barang/:id", updateBarang);
//delete "barang"
router.delete("/delete/barang/:id", deleteBarang);

//endpoint KASIR
//get all "kasir"
router.get("/kasir", showKasir);
//get one "kasir"
router.get("/kasir/:id", showKasirById);
//insert "kasir"
router.post("/insert/kasir", addKasir);
//update "kasir"
router.put("/update/kasir/:id", updateKasir);
//delete "kasir"
router.delete("/delete/kasir/:id", deleteKasir);

//endpoint TENAN
//get all "tenan"
router.get("/tenan", showTenan);
//get one "tenan"
router.get("/tenan/:id", showTenanById);
//insert "tenan"
router.post("/insert/tenan", addTenan);
//update "tenan"
router.put("/update/tenan/:id", updateTenan);
//delete "tenan"
router.delete("/delete/tenan/:id", deleteTenan);

export default router;