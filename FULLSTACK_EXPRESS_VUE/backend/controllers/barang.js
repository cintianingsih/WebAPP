//import functions from barangModels
import {
    getBarang,    
} from "../models/barangModels.js";
  
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
