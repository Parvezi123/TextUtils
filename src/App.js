import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
    <Navbar title="Textutils" AboutText="TextUtils About" />
    {/* {<Navbar title="Textutils" />} */}
    <div className="container my-3">
    <TextForm heading="Enter your text to Analyse" />
    </div>
    </>
  );
}

export default App;
