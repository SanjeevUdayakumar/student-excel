const TableRow = ({handleInputChange,id,studentName,rollNo,stuClass,height,weight}) => {

  return (
    <tr>
      <td className="table-title">
        <input type="text" name="studentName" onChange={(e)=>handleInputChange(id,'studentName',e.target.value)} value={studentName} className="outline-none w-[150px]" />
      </td>
      <td className="table-title">
        <input type="number" name="rollNo" onChange={(e)=>handleInputChange(id,'rollNo',e.target.value)} value={rollNo} className="outline-none w-[150px]" />
      </td>
      <td className="table-title">
        <input type="number" name="class" onChange={(e)=>handleInputChange(id,'class',e.target.value)} value={stuClass} className="outline-none w-[60px]" />
      </td>
      <td className="table-title">
        <input type="number" name="weight" onChange={(e)=>handleInputChange(id,'weight',e.target.value)} value={weight} className="outline-none w-[60px]" />
      </td>
      <td className="table-title">
        <input type="number" name="height" onChange={(e)=>handleInputChange(id,'height',e.target.value)} value={height} className="outline-none w-[60px]" />
      </td>
    </tr>
  );
};

export default TableRow;
