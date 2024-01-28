//import functions from kasirModels
import {deleteKasirById,getKasir, getKasirById, insertKasir, updateKasirById} from "../models/kasirModels.js";
  
//get all "kasir"
export const showKasir = (req, res) => {
    getKasir((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
};

//get one "kasir" 
export const showKasirById = (req, res) => {
  getKasirById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//insert "kasir"
export const addKasir = (req, res) => {
  const data = req.body;
  insertKasir(data, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Kasir berhasil ditambahkan' });
    }
  });
};

//update "kasir"
export const updateKasir = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateKasirById(data, id, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Kasir berhasil diupdate' });
    }
  });
};

//delete "kasir"
export const deleteKasir = (req, res) => {
  const id = req.params.id;
  deleteKasirById(id, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Kasir berhasil dihapus' });
    }
  });
};
