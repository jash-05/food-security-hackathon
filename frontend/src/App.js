/** @format */

import "./App.css";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import Navbar from "./Navbar";
import Stage from "./Stage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Dnd from "./Dnd";
import { useState } from "react";
import SankeyChart from "./SankeyChart";

function App() {
  const [persona, setPersona] = useState(true);

  const switchPersona = (e) => {
    console.log(e.target.checked);
    setPersona(!persona);
  };

  const [country, setCountry] = useState("us");
  const [selectedStages, setSelectedStages] = useState([]);
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  const addIndicatorToStage = (category, indicator) => {
    console.log("Adding " + indicator + " to stages: " + selectedStages);
    if (!selectedStages.length) {
      setSelectedStages([
        {
          category,
          indicator,
        },
      ]);
    } else if (
      !selectedStages.some(
        (existingIndicator) => existingIndicator.indicator === indicator
      )
    ) {
      if (
        selectedStages.some(
          (existingIndicator) => existingIndicator.category !== category
        )
      ) {
        setSelectedStages([
          {
            category,
            indicator,
          },
        ]);
      } else {
        setSelectedStages([
          ...selectedStages,
          {
            category,
            indicator,
          },
        ]);
      }
    }
  };
  return (
    // <DndProvider backend={HTML5Backend}>
    <div className="App">
      <Navbar
        country={country}
        persona={persona}
        handleChange={() => handleChange}
        handlePersona={() => switchPersona}
      />
      <div className="body-wrapper">
        <LeftPanel addIndicatorToStage={addIndicatorToStage} />
        <Stage
          persona={persona}
          country={country}
          selectedStages={selectedStages}
        />
      </div>
      {/* <Footer /> */}
    </div>
    // </DndProvider>
  );
}

export default App;
