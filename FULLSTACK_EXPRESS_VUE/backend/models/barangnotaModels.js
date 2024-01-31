// import connection
import db from "../config/database.js";

//function to get KodeNota 
const getKodeNota = (id) => {
  return new Promise((resolve, reject) => {
    db.query("SELECT KodeNota FROM barangnota WHERE KodeBarangNota = ?", [id], (err, results) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        resolve(results.length > 0 ? results[0].KodeNota : null);
      }
    });
  });
};

//function update jumlah belanja from "nota"
const updateJumlahBelanja = (KodeNota, result) => {
  db.query(
    "UPDATE nota SET JumlahBelanja = (SELECT COALESCE(SUM(Total), 0) FROM barangnota WHERE KodeNota = ?) WHERE KodeNota = ?", [KodeNota, KodeNota],
    (err, updateResult) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        //console.log("Berhasil menyimpan JumlahBelanja pada nota.");
        result(null, updateResult);
      }
    }
  );
};

//get all "barangnota"
export const getBarangNota = (result) => {
  db.query("SELECT * FROM barangnota", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get "barangnota" by id
export const getBarangNotaById = (id, result) => {
  db.query("SELECT * FROM barangnota WHERE KodeBarangNota = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

//insert "barangnota"
export const insertBarangNota = (data, result) => {
  if (!data || !data.KodeNota || !data.NamaBarang || !data.Jumlah || !data.HargaSatuan) {
    const errorMessage = "Data yang diinputkan tidak lengkap";
    console.log(errorMessage);
    result(errorMessage, null);
    return;
  }

  db.query(
    "INSERT INTO barangnota (KodeNota, NamaBarang, Jumlah, HargaSatuan) VALUES (?, ?, ?, ?)", [data.KodeNota, data.NamaBarang, data.Jumlah, data.HargaSatuan],
    (err) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        updateJumlahBelanja(data.KodeNota, result);
      }
    }
  );
};

//update "barangnota"
export const updateBarangNotaById = (data, id, result) => {
  db.query(
    "UPDATE barangnota SET NamaBarang = ?, Jumlah = ?, HargaSatuan = ? WHERE KodeBarangNota = ?", [data.NamaBarang, data.Jumlah, data.HargaSatuan, id],
    (err) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        updateJumlahBelanja(data.KodeNota, result);
      }
    }
  );
};

//delete "barangnota"
export const deleteBarangNotaById = (id, result) => {
    getKodeNota(id)
      .then((kodeNotaToDelete) => {
        db.query("DELETE FROM barangnota WHERE KodeBarangNota = ?", [id], (err, deleteResult) => {
          if (err) {
            console.log(err);
            result(err, null);
          } else {
            updateJumlahBelanja(kodeNotaToDelete, result);
          }
        });
      })
      .catch((err) => {
        console.log(err);
        result(err, null);
      });
};
