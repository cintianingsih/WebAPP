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

//get one "kasir"
export const getKasirById = (id, result) => {
  db.query("SELECT * FROM kasir WHERE KodeKasir = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

//insert "kasir"
export const insertKasir = (data, result) => {
  if (!data || !data.KodeKasir || !data.Nama || !data.HP) {
    const errorMessage = "Data yang diinputkan tidak lengkap";
    console.log(errorMessage);
    result(errorMessage, null);
    return;
  }

  db.query("INSERT INTO kasir SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//update "kasir"
export const updateKasirById = (data, id, result) => {
  db.query(
    "UPDATE kasir SET Nama = ?, HP = ? WHERE KodeKasir = ?", [data.Nama, data.HP, id],
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

//delete "kasir"
export const deleteKasirById = (id, result) => {
  db.query("DELETE FROM kasir WHERE KodeKasir = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};