import { useState } from "react";
import TheHeader from "./components/TheHeader";
import Table from "./components/Table";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const addRow = {
    id: uuidv4(),
    studentName: "",
    rollNo: 0,
    class: 0,
    weight: 0,
    height: 0
  };

  const [rows, setRows] = useState([]);
  const handleAddRows = () => {
    setRows([...rows, addRow]);
  };
  // console.log(rows);
  

  return (
    <>
      <TheHeader />
      <Table handleAddRows={handleAddRows} rows={rows} setRows={setRows} />
    </>
  );
}


export default App;
