//import functions from controller
import express from "express";
import { addBarang, deleteBarang, showBarang, showBarangById, updateBarang } from "../controllers/barang.js";
import { addKasir, deleteKasir, showKasir, showKasirById, updateKasir } from "../controllers/kasir.js";
import { addTenan, deleteTenan, showTenan, showTenanById, updateTenan } from "../controllers/tenan.js";
import { addNota, deleteNota, showNota, showNotaById, updateNota } from "../controllers/nota.js";
import { addBarangNota, deleteBarangNota, showBarangNota, showBarangNotaById, updateBarangNota } from "../controllers/barangnota.js";

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

//endpoint NOTA
//get all "nota"
router.get("/nota", showNota);
//get one "nota"
router.get("/nota/:id", showNotaById);
//insert "nota"
router.post("/insert/nota", addNota);
//update "nota"
router.put("/update/nota/:id", updateNota);
//delete "nota"
router.delete("/delete/nota/:id", deleteNota);

//endpoint BARANGNOTA
//get all "barangnota"
router.get("/barangnota", showBarangNota);
//get one "barangnota"
router.get("/barangnota/:id", showBarangNotaById);
//insert "barangnota"
router.post("/insert/barangnota", addBarangNota);
//update "barangnota"
router.put("/update/barangnota/:id", updateBarangNota);
//delete "barangnota"
router.delete("/delete/barangnota/:id", deleteBarangNota);



export default router;