export const saveToDb = (con,data) => {
    deleteData(con);
  con.connect(function (err) {
    if (err) throw err;
    data.forEach((data) => {
      var sql = `INSERT INTO Student_data values ("${data.studentName}",${data.rollNo},"${data.class}",${data.weight},${data.height})`;

      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
    });
  });
};
// returning data before retrieving the data
export const getData = async (con) => {
    await con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT * FROM Student_data", (err, result, fields) =>{
          if (err) throw err;
          console.log(result);
          return result;
        });
      });
  };
  
const deleteData = (con)=>{
    con.connect(function(err) {
        if (err) throw err;
        var sql = "DELETE FROM Student_data";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Number of records deleted: " + result.affectedRows);
        });
      });
}