import TableRow from "./TableRow";
import { isNumeric } from "../helpers/checkIsNum";
const Table = ({handleAddRows,rows,setRows}) => {
    const handleInputChange = (id, propName, value) => {
      if(isNumeric(value)){
        value = parseInt(value)
      }
      const temp = [...rows];
      temp[id] = {...rows[id], [propName]: value }
      setRows(temp);
      };
    return ( 
        <table className="max-w-fit select-none bg-white border mx-auto rounded-md">
        <thead>
          <tr>
           <th className="table-title w-[30px]">Sno</th>
            <th className="table-title w-[180px]">Student Name</th>
            <th className="table-title w-[150px]">Roll Number</th>
            <th className="table-title w-[70px]">Class</th>
            <th className="table-title w-[70px]">Weight</th>
            <th className="table-title w-[70px] relative ">
              Height
              {/* add row icon */}
              <div onClick={handleAddRows} title="Add row" className="w-5 h-5 flex items-center font-bold text-white bg-black bg-opacity-40 justify-center rounded-full absolute top-4 right-0 left-[62px] cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  title="Add Row"
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
        <tbody className="select-none">{rows.map((val,index) => <TableRow key={index} id={index} handleInputChange={handleInputChange} studentName={val.studentName} rollNo={val.rollNo} stuClass={val.class} weight={val.weight} height={val.height}/>)}</tbody>
      </table>
     );
}
 
export default Table;