//import connection
import db from "../config/database.js";

//get all "tenan"
export const getTenan = (result) => {
  db.query("SELECT * FROM tenan", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};