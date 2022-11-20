import "./App.css";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import Navbar from "./Navbar";
import Stage from "./Stage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Dnd from "./Dnd";
import { useState } from "react";

function App() {
  //handle country navigation
  const [country, setCountry] = useState("us");
  const [selectedStage, setSelectedStage] = useState("");

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    // <DndProvider backend={HTML5Backend}>
    <div className="App">
      <Navbar country={country} handleChange={() => handleChange} />

      <div className="body-wrapper">
        <LeftPanel setSelectedStage={setSelectedStage} />
        <Stage country={country} selectedStage={selectedStage} />
      </div>
      <Footer />
    </div>
    // </DndProvider>
  );
}

export default App;
