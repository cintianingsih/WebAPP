//import functions from notaModels
import { deleteNotaById, getNota, getNotaById, insertNota, updateNotaById } from "../models/notaModels.js";

//get all "nota"
export const showNota = (req, res) => {
  getNota((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//get one "nota" 
export const showNotaById = (req, res) => {
  getNotaById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//insert "nota"
export const addNota = (req, res) => {
    const data = req.body;
    insertNota(data, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: 'Nota berhasil ditambahkan' });
      }
    });
};  

//update "nota"
export const updateNota = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateNotaById(data, id, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Nota berhasil diupdate' });
    }
  });
};

//delete "nota"
export const deleteNota = (req, res) => {
  const id = req.params.id;
  deleteNotaById(id, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Nota berhasil dihapus' });
    }
  });
};
