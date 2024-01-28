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

//get one "tenan"
export const getTenanById = (id, result) => {
  db.query("SELECT * FROM tenan WHERE KodeTenan = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

//insert "tenan"
export const insertTenan = (data, result) => {
  if (!data || !data.KodeTenan || !data.NamaTenan || !data.HP) {
    const errorMessage = "Data yang diinputkan tidak lengkap";
    console.log(errorMessage);
    result(errorMessage, null);
    return;
  }

  db.query("INSERT INTO tenan SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//update "tenan"
export const updateTenanById = (data, id, result) => {
  db.query(
    "UPDATE tenan SET NamaTenan = ?, HP = ? WHERE KodeTenan = ?", [data.NamaTenan, data.HP, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

//delete "tenan"
export const deleteTenanById = (id, result) => {
  db.query("DELETE FROM tenan WHERE KodeTenan = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};