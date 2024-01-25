//import connection
import db from "../config/database.js";

//get all "kasir"
export const getKasir = (result) => {
  db.query("SELECT * FROM kasir", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};