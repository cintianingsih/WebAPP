// import functions from barangnotaModels
import { deleteBarangNotaById, getBarangNota, getBarangNotaById, insertBarangNota, updateBarangNotaById } from "../models/barangnotaModels.js";

// get all "barangnota"
export const showBarangNota = (req, res) => {
  getBarangNota((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get one "barangnota"
export const showBarangNotaById = (req, res) => {
  getBarangNotaById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// insert "barangnota"
export const addBarangNota = (req, res) => {
    const data = req.body;
    insertBarangNota(data, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'BarangNota berhasil ditambahkan' });
      }
    });
};  

// update "barangnota"
export const updateBarangNota = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateBarangNotaById(data, id, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'BarangNota berhasil diupdate' });
    }
  });
};

// delete "barangnota"
export const deleteBarangNota = (req, res) => {
  const id = req.params.id;
  deleteBarangNotaById(id, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'BarangNota berhasil dihapus' });
    }
  });
};
