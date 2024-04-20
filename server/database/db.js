export const saveToDb = (con,data) => {
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

export const getData = (con) => {
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
  
  