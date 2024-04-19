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
  console.log(userNameCheck(studentName));
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
          className={`outline-none w-[175px] p-2 border-2 ${userNameCheck(studentName) ? 'border-red-400':''}`}
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
          className={`outline-none w-[145px] p-2 border-2  ${rollNumberCheck(rollNo) ? 'border-red-400':''}`}
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
          className={`outline-none w-[65px] p-2 border-2  ${stuClassCheck(stuClass) ? 'border-red-400':''}`}
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
          className={`outline-none w-[69px] p-2 border-2  ${weightCheck(weight) ? 'border-red-400':''}`}
        />
      </td>
      <td className="table-title">
        <input
          type="number"
          min={100}
          max={230}
          name="height"
          title="height must be within 100 - 230"
          onChange={(e) => handleInputChange(id, "height", e.target.value)}
          value={height}
          className={`outline-none w-[65px] p-2 border-2  ${heightCheck(height) ? 'border-red-400':''}`}
        />
      </td>
    </tr>
  );
};

export default TableRow;
