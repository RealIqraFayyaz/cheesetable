export default function TableRow({ cheese }) {
  return (
    <>
    <tr>
      <th>{cheese.name}</th>
      <td>{cheese.Cl}</td>
      <td>{cheese.Ca}</td>
      <td>{cheese.Fe}</td>
      <td>{cheese.Mg}</td>
      <td>{cheese.P}</td>
      <td>{cheese.K}</td>
      <td>{cheese.Na}</td>
      <td>{cheese.Zn}</td>
      <td>{cheese.Cu}</td>
      <td>{cheese.Mn}</td>
      <td>{cheese.Se}</td>
    </tr>
    </>
  );
}