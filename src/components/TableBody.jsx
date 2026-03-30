import TableRow from "./TableRow";

export default function TableBody() {
  const data = [
    { name: "Swiss", Cl: 2.8, Ca: 79, Fe: 10, Mg: 1, P: 57, K: 2, Na: 8, Zn: 29, Cu: 2, Mn: 0, Se: 26 },
    { name: "Feta", Cl: 2.2, Ca: 49, Fe: 4, Mg: 5, P: 34, K: 2, Na: 46, Zn: 19, Cu: 2, Mn: 1, Se: 21 },
    { name: "Cheddar", Cl: 3, Ca: 72, Fe: 4, Mg: 7, P: 51, K: 3, Na: 26, Zn: 21, Cu: 2, Mn: 1, Se: 20 },
    { name: "Mozzarella", Cl: 2.8, Ca: 51, Fe: 2, Mg: 5, P: 35, K: 2, Na: 26, Zn: 19, Cu: 1, Mn: 1, Se: 24 },
    { name: "Cottage", Cl: 3.3, Ca: 8, Fe: 0, Mg: 2, P: 16, K: 3, Na: 15, Zn: 3, Cu: 1, Mn: 0, Se: 14 }
  ];

  return (
    <>
    <tbody>
      {data.map((item, index) => (
        <TableRow key={index} cheese={item} />
      ))}
    </tbody>
    </>
  );
}