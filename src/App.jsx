import CreateArt from "./component/createArt";
import DisplayData from "./component/displayData";
import "./index.css"
function App() {
  return (
    <>
      <CreateArt />
      <main className="grid grid-cols-2 md:grid-cols-3 gap-4 w-9/12 m-auto">
        <DisplayData />
      </main>
    </>
  )
}

export default App
