//import functions from barangModels
import {deleteBarangById, getBarang, getBarangById, insertBarang, updateBarangById} from "../models/barangModels.js";
  
//get all "barang"
export const showBarang = (req, res) => {
    getBarang((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
};

//get one "barang" 
export const showBarangById = (req, res) => {
  getBarangById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//insert "barang"
export const addBarang = (req, res) => {
  const data = req.body;
  insertBarang(data, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Barang berhasil ditambahkan' });
    }
  });
};

// Update "barang"
export const updateBarang = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateBarangById(data, id, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Barang berhasil diupdate' });
    }
  });
};

//delete "barang"
export const deleteBarang = (req, res) => {
  const id = req.params.id;
  deleteBarangById(id, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Barang berhasil dihapus' });
    }
  });
};