import React from "react";
import {
  heightCheck,
  rollNumberCheck,
  stuClassCheck,
  userNameCheck,
  weightCheck,
} from "../validate/validate";
interface Props{
  handleInputChange:(id:number,propName:string,value:string) => void,
  handleDeleteRow: (id:number) => void,
  id:number,
  studentName:string,
  rollNo:number,
  stuClass:string,
  height:number,
  weight:number,
}
const TableRow: React.FC<Props> = ({
  handleInputChange,
  handleDeleteRow,
  id,
  studentName,
  rollNo,
  stuClass,
  height,
  weight,
}) => {
  return (
    <tr>
      <td className="table-title p-2">{id + 1}</td>
      <td className={`table-title`}>
        <input
          type="text"
          name="studentName"
          title="User Name must contain 3 - 20 characters"
          onChange={(e) => handleInputChange(id, "studentName", e.target.value)}
          value={studentName}
          className={`outline-none w-[175px] p-2 border-2 ${
            userNameCheck(studentName) ? "border-red-400" : ""
          }`}
        />
      </td>
      <td className="table-title">
        <input
          type="number"
          min={1}
          max={9999}
          title="Roll number must within 1 - 9999"
          name="rollNo"
          onChange={(e) => handleInputChange(id, "rollNo", e.target.value)}
          value={rollNo}
          className={`outline-none w-[145px] p-2 border-2  ${
            rollNumberCheck(rollNo) ? "border-red-400" : ""
          }`}
        />
      </td>
      <td className="table-title">
        <input
          type="text"
          minLength={1}
          maxLength={3}
          name="class"
          title="class must of character 1 - 3"
          onChange={(e) => handleInputChange(id, "class", e.target.value)}
          value={stuClass}
          className={`outline-none w-[65px] p-2 border-2  ${
            stuClassCheck(stuClass) ? "border-red-400" : ""
          }`}
        />
      </td>
      <td className="table-title">
        <input
          type="number"
          min={30}
          max={100}
          name="weight"
          title="weight must be within 30 - 100"
          onChange={(e) => handleInputChange(id, "weight", e.target.value)}
          value={weight}
          className={`outline-none w-[69px] p-2 border-2  ${
            weightCheck(weight) ? "border-red-400" : ""
          }`}
        />
      </td>
      <td className="table-title relative">
        <input
          type="number"
          min={100}
          max={230}
          name="height"
          title="height must be within 100 - 230"
          onChange={(e) => handleInputChange(id, "height", e.target.value)}
          value={height}
          className={`outline-none w-[65px] p-2 border-2  ${
            heightCheck(height) ? "border-red-400" : ""
          }`}
        />
        {/* delete row icon */}
        <div
          onClick={() => handleDeleteRow(id)}
          title="Delete row"
          className="w-5 h-5 flex items-center font-bold text-white bg-black bg-opacity-40 justify-center rounded-full absolute top-4 right-0 left-[62px] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M19 12.998H5v-2h14z"></path>
          </svg>
        </div>
        {/* delete row icon end */}
      </td>
    </tr>
  );
};

export default TableRow;
