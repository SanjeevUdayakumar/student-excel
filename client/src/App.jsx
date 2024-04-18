import { useState } from "react";
import TheHeader from "./components/TheHeader";
import Table from "./components/Table";

function App() {
  const addRow = {
    studentName: "",
    rollNo: "",
    class: "",
    weight: "",
    height: "",
  };
  const temp = {
    studentName: "v",
    rollNo: "",
    class: "",
    weight: "",
    height: "",
  };
  const [rows, setRows] = useState([temp]);
  const handleAddRows = () => {
    setRows([...rows, addRow]);
  };
  const handleChangeInput = (id, propName, value) => {
    console.log({ ...rows[id], [propName]: value });
  };
  handleChangeInput(0,'studentName','s')
  return (
    <>
      <TheHeader />
      <Table handleAddRows={handleAddRows} rows={rows} />
    </>
  );
}

export default App;
