import Navbar from "./Navbar";
import Catalog from "./Catalog";
import dataset from "./dataset"
export default function App() {
  const catalogSet = dataset.map(data =>{
    console.log(data)
    return (
      <Catalog props={data}></Catalog>
    )
  })
  return (
    <>
      <Navbar />
      {catalogSet}
    </>
  );
}