import { useState } from "react";
import TableRow from "./components/TableRow";
import TheHeader from "./components/TheHeader";

function App() {

  return (
    <>
      <TheHeader />
      <table className="max-w-2xl select-none bg-white border mx-auto rounded-md">
        <thead>
          <tr>
            <th className="table-title w-[200px]">Student Name</th>
            <th className="table-title w-[200px]">Roll Number</th>
            <th className="table-title w-[100px]">Class</th>
            <th className="table-title">Weight</th>
            <th className="table-title relative">
              Height
              <div className="w-5 h-5 flex items-center font-bold text-white bg-black bg-opacity-40 justify-center rounded-full absolute top-4 right-0 left-16 cursor-pointer">
           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path></svg>
           </div>
            </th>
          </tr>
         
        </thead>
        <tbody>
         {/* {row.map(val=> <TableRow/>)} */}
        </tbody>
      </table>
    </>
  );
}

export default App;
