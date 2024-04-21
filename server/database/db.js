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
export const getData = (con,res) => {
  con.query("SELECT * FROM Student_data", function(error, results){
    if ( error ){
        res.status(400).send('Error in database operation');
    } else {
       res.status(200);
        res.send(results);
    }
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