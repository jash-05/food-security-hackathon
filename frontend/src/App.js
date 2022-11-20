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

function App() {
  const [selectedStage, setSelectedStage] = useState("");
  return (
    // <DndProvider backend={HTML5Backend}>
    <div className="App">
      <Navbar />

      <div className="body-wrapper">
        <LeftPanel setSelectedStage={setSelectedStage} />
        <Stage selectedStage={selectedStage} />
      </div>
      <SankeyChart />
      <Footer />
    </div>
    // </DndProvider>
  );
}

export default App;
