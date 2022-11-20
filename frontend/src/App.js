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
import { countries } from "react-circle-flags";
import YearSlider from "./YearSlider";
import Annotations from "./Annotations";

function App() {
  const [persona, setPersona] = useState(true);

  const switchPersona = (e) => {
    console.log(e.target.checked);
    setPersona(!persona);
  };

  const [annotation, setAnnotation] = useState();

  const [aList, setAList] = useState([]);

  const addAnnotation = () => {
    setAList([...aList, annotation]);
    setAnnotation("");
    handleClose();
  };
  const handleAnnotation = (newValue) => {
    console.log(newValue);
    setAnnotation(newValue);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [country, setCountry] = useState("USA");
  const [selectedStages, setSelectedStages] = useState([]);
  const [sliderValue, setSliderValue] = useState([1960, 2021]);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  const addIndicatorToStage = (category, indicator) => {
    console.log(
      "Adding " +
        indicator +
        " with category " +
        category +
        " to stages: " +
        selectedStages
    );
    if (
      !selectedStages.length ||
      ["crops", "imports", "yield"].includes(category)
    ) {
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
  console.log("Rendering APP");
  console.log("Country: " + countries);
  console.log("Selected stages: " + JSON.stringify(selectedStages));
  return (
    // <DndProvider backend={HTML5Backend}>
    <div className="App">
      <Navbar
        persona={persona}
        handleChange={() => handleChange}
        handlePersona={() => switchPersona}
        country={country}
        category={selectedStages.length ? selectedStages[0].category : ""}
      />
      <div className="body-wrapper">
        <LeftPanel addIndicatorToStage={addIndicatorToStage} />
        <Stage
          persona={persona}
          country={country}
          selectedStages={selectedStages}
          sliderValue={sliderValue}
          handleSliderChange={handleSliderChange}
        />
        {persona === false ? (
          <Annotations
            aList={aList}
            annotation={annotation}
            handleAnnotation={handleAnnotation}
            addAnnotation={addAnnotation}
            show={show}
            handleShow={handleShow}
            handleClose={handleClose}
          />
        ) : (
          <></>
        )}
      </div>
      {/* <SankeyChart /> */}
      {/* <Footer /> */}
    </div>
    // </DndProvider>
  );
}

export default App;
