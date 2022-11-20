import "./App.css";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import Navbar from "./Navbar";
import Stage from "./Stage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Dnd from "./Dnd";
import SankeyChart from "./SankeyChart";
import { useState } from "react";
import PieChart from "./PieChart";
import LineChart from "./LineChart";

function App() {
  //handle country navigation
  const [country, setCountry] = useState("us");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    // <DndProvider backend={HTML5Backend}>
    <div className="App">
      <Navbar country={country} handleChange={() => handleChange} />

      <div className="body-wrapper">
        <LeftPanel />
        <Stage country={country} />
      </div>
      <Footer />
    </div>
    // </DndProvider>
  );
}

export default App;
