//import functions from tenanModels
import {
    getTenan,    
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
