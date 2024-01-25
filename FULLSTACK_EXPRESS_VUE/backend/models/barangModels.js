//import connection
import db from "../config/database.js";

//get all "barang"
export const getBarang = (result) => {
  db.query("SELECT * FROM barang", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};