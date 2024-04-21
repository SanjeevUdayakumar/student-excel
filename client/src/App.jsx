import { useState, useEffect } from "react";
import TheHeader from "./components/TheHeader";
import Table from "./components/Table";
import { Route, Routes } from "react-router-dom";
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
  useEffect(()=>{
      const fetchApi = async() =>{
        const res = await fetch('http://localhost:3000/')
        const fetchedData = await res.json()
        if(fetchedData.length != 0){
          setRows(fetchedData)
        }
      };
     fetchApi();
  },[])

  return (
    <>
      <TheHeader />
      <Table handleAddRows={handleAddRows} rows={rows} setRows={setRows} />
      {/* <Routes>
      <Route path="/" element={ <Table handleAddRows={handleAddRows} rows={rows} setRows={setRows} />} />
      <Route path="/save" element={ <Table handleAddRows={handleAddRows} rows={rows} setRows={setRows} />} />
      </Routes> */}
    </>
  );
}


export default App;
