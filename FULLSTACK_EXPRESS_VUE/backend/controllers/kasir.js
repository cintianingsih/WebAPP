//import functions from kasirModels
import {
    getKasir,    
} from "../models/kasirModels.js";
  
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
