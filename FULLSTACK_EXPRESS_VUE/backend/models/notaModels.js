//import connection
import db from "../config/database.js";

//get all "nota"
export const getNota = (result) => {
  db.query("SELECT * FROM nota", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//get one "nota"
export const getNotaById = (id, result) => {
  db.query("SELECT * FROM nota WHERE KodeNota = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

//insert "nota"
export const insertNota = (data, result) => {
    if (!data || !data.KodeNota || !data.NamaTenan || !data.NamaKasir || !data.TglNota || !data.Diskon) {
      const errorMessage = "Data yang diinputkan tidak lengkap";
      console.log(errorMessage);
      result(errorMessage, null);
      return;
    }
  
    db.query("INSERT INTO nota (KodeNota, NamaTenan, NamaKasir, TglNota, Diskon, JumlahBelanja, Total) VALUES (?, ?, ?, ?, ?, 0, 0)", [data.KodeNota, data.NamaTenan, data.NamaKasir, data.TglNota, data.Diskon, data.JumlahBelanja, data.Total], 
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

//update "nota"
export const updateNotaById = (data, id, result) => {
  db.query(
    "UPDATE nota SET NamaTenan = ?, NamaKasir = ?, TglNota = ?, Diskon = ? WHERE KodeNota = ?", [data.NamaTenan, data.NamaKasir, data.TglNota, data.Diskon, id],
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

//delete "nota"
export const deleteNotaById = (id, result) => {
    db.query("DELETE FROM barangnota WHERE KodeNota = ?", [id], (err) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        db.query("DELETE FROM nota WHERE KodeNota = ?", [id], (err, deleteNotaResult) => {
          if (err) {
            console.log(err);
            result(err, null);
          } else {
            //console.log("Berhasil menghapus nota dan barangnota");
            result(null, deleteNotaResult);
          }
        });
      }
    });
};
  
