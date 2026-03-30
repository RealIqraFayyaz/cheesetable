import Header from "./components/Header";
import TableTitle from "./components/TableTitle";
import TableHead from "./components/TableHead";
import TableRow from "./components/TableRow";
import TableBody from "./components/TableBody";
import Table from "./components/Table";  

export default function App() {
  return (
    <>
      <Header />
      <TableTitle />
      <Table>
        <TableHead />
        <TableBody>
          <TableRow />
        </TableBody>
      </Table>
    </>
  );
}