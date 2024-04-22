import { useState, useEffect } from "react";
import TheHeader from "./components/TheHeader";
import Table from "./components/Table";
// Todo list
// -- Add row in the table
// -- edit row in the table
// -- validate the input given by user
// -- create an api to get the input from user and store it in database (Node js,MySql)
// -- Retrieve data from database and display it has an table
export interface Student {
  studentName: string,
  rollNo: number,
  class: string,
  weight: number,
  height: number,
};
const App = () => {
  const addRow: Student = {
    studentName: "",
    rollNo: 0,
    class: "",
    weight: 0,
    height: 0,
  };

  const [rows, setRows] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const handleAddRows = () => {
    setRows([...rows, addRow]);
  };
  const handleDeleteRow = (id:number) => {
    if(confirm('Can I delete the row')){
      const updatedRows = rows.filter((row,index) => index != id )
      setRows(updatedRows);
    }
   
  };
  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("http://localhost:3000/");
      if (res.status == 200){
        setTimeout(()=>{
          setLoading(false);
        },2000)
      }
      const fetchedData = await res.json();
      if (fetchedData.length != 0) {
        setRows(fetchedData);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      <TheHeader />
      {loading == true ? (
        <div className="w-fit mx-auto flex items-center space-x-5 mt-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            >
              <path
                strokeDasharray="60"
                strokeDashoffset="60"
                strokeOpacity=".3"
                d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="1.3s"
                  values="60;0"
                ></animate>
              </path>
              <path
                strokeDasharray="15"
                strokeDashoffset="15"
                d="M12 3C16.9706 3 21 7.02944 21 12"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.3s"
                  values="15;0"
                ></animate>
                <animateTransform
                  attributeName="transform"
                  dur="1.5s"
                  repeatCount="indefinite"
                  type="rotate"
                  values="0 12 12;360 12 12"
                ></animateTransform>
              </path>
            </g>
          </svg>
          <p className="text-4xl font-semibold">Loading...</p>
        </div>
      ) : (
        <Table handleAddRows={handleAddRows} handleDeleteRow={handleDeleteRow} rows={rows} setRows={setRows} />
      )}

    </>
  );
}

export default App;
