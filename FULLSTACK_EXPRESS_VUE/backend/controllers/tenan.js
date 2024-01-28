//import functions from tenanModels
import {
  deleteTenanById,
    getTenan, getTenanById, insertTenan, updateTenanById,    
} from "../models/tenanModels.js";
  
//get all "tenan"
export const showTenan = (req, res) => {
    getTenan((err, results) => {
      if (err) {
        res.send(err);
      } else {
        res.json(results);
      }
    });
};

//get one "tenan" 
export const showTenanById = (req, res) => {
  getTenanById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//insert "tenan"
export const addTenan = (req, res) => {
  const data = req.body;
  insertTenan(data, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Tenan berhasil ditambahkan' });
    }
  });
};

//update "tenan"
export const updateTenan = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateTenanById(data, id, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Tenan berhasil diupdate' });
    }
  });
};

//delete "tenan"
export const deleteTenan = (req, res) => {
  const id = req.params.id;
  deleteTenanById(id, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Tenan berhasil dihapus' });
    }
  });
};