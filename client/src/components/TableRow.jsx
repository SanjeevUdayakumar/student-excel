const TableRow = ({id,studentName,rollNo,stuClass,height,weight}) => {
  return (
    <tr>
      <td className="table-title">
        <input type="text" value={studentName} className="outline-none w-[150px]" />
      </td>
      <td className="table-title">
        <input type="number" value={rollNo} className="outline-none w-[150px]" />
      </td>
      <td className="table-title">
        <input type="number" value={stuClass} className="outline-none w-[60px]" />
      </td>
      <td className="table-title">
        <input type="number" value={height} className="outline-none w-[60px]" />
      </td>
      <td className="table-title">
        <input type="number" value={weight} className="outline-none w-[60px]" />
      </td>
    </tr>
  );
};

export default TableRow;
