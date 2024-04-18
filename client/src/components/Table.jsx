import TableRow from "./TableRow";

const Table = ({handleAddRows,rows,setRows}) => {
    const handleInputChange = (id, propName, value) => {
      const temp = [...rows];
      temp[id] = {...rows[id], [propName]: value }
      setRows(temp);
      };
    return ( 
        <table className="max-w-2xl select-none bg-white border mx-auto rounded-md">
        <thead>
          <tr>
            <th className="table-title w-[200px]">Student Name</th>
            <th className="table-title w-[200px]">Roll Number</th>
            <th className="table-title w-[100px]">Class</th>
            <th className="table-title w-[73px]">Weight</th>
            <th className="table-title w-[75px] relative">
              Height
              {/* add row icon */}
              <div onClick={handleAddRows} className="w-5 h-5 flex items-center font-bold text-white bg-black bg-opacity-40 justify-center rounded-full absolute top-4 right-0 left-16 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
                  ></path>
                </svg>
              </div>
               {/* add row icon end */}
            </th>
          </tr>
        </thead>
        <tbody>{rows.map((val,index) => <TableRow key={index} id={index} handleInputChange={handleInputChange} studentName={val.studentName} rollNo={val.rollNo} stuClass={val.stuClass} weight={val.weight} height={val.height}/>)}</tbody>
      </table>
     );
}
 
export default Table;