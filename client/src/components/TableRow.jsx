import { heightCheck, rollNumberCheck, stuClassCheck, userNameCheck, weightCheck } from "../validate/validate";

const TableRow = ({
  handleInputChange,
  id,
  studentName,
  rollNo,
  stuClass,
  height,
  weight,
}) => {
  return (
    <tr>
      <td className="table-title">{id + 1}</td>
      <td className={`table-title`}>
        <input
          type="text"
          name="studentName"
          onChange={(e) => handleInputChange(id, "studentName", e.target.value)}
          value={studentName}
          className="outline-none w-[160px]"
        />
      </td>
      <td className="table-title">
        <input
          type="number"
          min={1}
          max={9999}
          name="rollNo"
          onChange={(e) => handleInputChange(id, "rollNo", e.target.value)}
          value={rollNo}
          onBlur={()=>rollNumberCheck(rollNo)}
          className="outline-none w-[100px]"
        />
      </td>
      <td className="table-title">
        <input
          type="text"
          minLength={1}
          maxLength={3}
          name="class"
          onChange={(e) => handleInputChange(id, "class", e.target.value)}
          value={stuClass}
          onBlur={()=> stuClassCheck(stuClass)}
          className="outline-none w-[50px]"
        />
      </td>
      <td className="table-title">
        <input
          type="number"
          min={30}
          max={100}
          name="weight"
          onChange={(e) => handleInputChange(id, "weight", e.target.value)}
          value={weight}
          onBlur={()=>weightCheck(weight)}
          className="outline-none w-[50px]"
        />
      </td>
      <td className="table-title">
        <input
          type="number"
          min={100}
          max={230}
          name="height"
          onChange={(e) => handleInputChange(id, "height", e.target.value)}
          value={height}
          onBlur={()=>heightCheck(height)}
          className={`outline-none w-[50px] `}
        />
      </td>
    </tr>
  );
};

export default TableRow;
