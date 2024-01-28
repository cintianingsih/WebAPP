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

//get one "barang"
export const getBarangById = (id, result) => {
  db.query("SELECT * FROM barang WHERE KodeBarang = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

//insert "barang"
export const insertBarang = (data, result) => {
  if (!data || !data.KodeBarang || !data.NamaBarang || !data.Satuan || !data.HargaSatuan || !data.Stok) {
    const errorMessage = "Data yang diinputkan tidak lengkap";
    console.log(errorMessage);
    result(errorMessage, null);
    return;
  }

  db.query("INSERT INTO barang SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//update "barang"
export const updateBarangById = (data, id, result) => {
  db.query(
    "UPDATE barang SET NamaBarang = ?, Satuan = ?, HargaSatuan = ?, Stok = ? WHERE KodeBarang = ?", [data.NamaBarang, data.Satuan, data.HargaSatuan, data.Stok, id],
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

//delete "barang"
export const deleteBarangById = (id, result) => {
  db.query("DELETE FROM barang WHERE KodeBarang = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
