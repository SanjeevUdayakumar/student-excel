import { useState } from "react";
import TheHeader from "./components/TheHeader";
import Table from "./components/Table";
// Todo list
// -- Add row in the table
// -- edit row in the table
// -- validate the input given by user
// -- create an api to get the input from user and store it in database (Node js,MySql)
// -- Retrieve data from database and display it has an table
function App() {
  const addRow = {
    studentName: "",
    rollNo: 0,
    class: "",
    weight: 0,
    height: 0
  };

  const [rows, setRows] = useState([]);
  const handleAddRows = () => {
    setRows([...rows, addRow]);
  };
  

  return (
    <>
      <TheHeader />
      <Table handleAddRows={handleAddRows} rows={rows} setRows={setRows} />
    </>
  );
}


export default App;
