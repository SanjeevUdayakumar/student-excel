const TableRow = () => {
  return (
    <tr>
      <td className="table-title">
        <input type="text" value="Sanjeev" className="outline-none w-[150px]" />
      </td>
      <td className="table-title">
        <input type="number" value="1432" className="outline-none w-[150px]" />
      </td>
      <td className="table-title">
        <input type="number" value="7" className="outline-none w-[60px]" />
      </td>
      <td className="table-title">
        <input type="number" value="60" className="outline-none w-[60px]" />
      </td>
      <td className="table-title">
        <input type="number" value="5.5" className="outline-none w-[60px]" />
      </td>
    </tr>
  );
};

export default TableRow;
