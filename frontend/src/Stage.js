/** @format */
import Imports from "./Imports";
import { React, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Chart } from "react-google-charts";
import { yearLabels } from "./utils.py/constants";
import LineGraph from "./LineGraph";
import { ListGroup, Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const Stage = ({ persona, country, selectedStages }) => {
  const [sliderValue, setSliderValue] = useState([1960, 2021]);
  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  const data = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540],
  ];

  const options = {
    title: "Company Performance",
    legend: { position: "bottom" },
  };

  const [annotation, setAnnotation] = useState();

  const [aList, setAList] = useState([]);

  const addAnnotation = () => {
    setAList([...aList, annotation]);
    setAnnotation("");
    handleClose();
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("ONLY ONCE");
  }, []);

  return (
    <div className="content-wrapper">
      <Box sx={{ width: 700 }}>
        <Slider
          getAriaLabel={() => "Year range"}
          value={sliderValue}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          step={1}
          min={1960}
          max={2021}
          marks={yearLabels}
        />
      </Box>
      <Imports country={country} />
      {selectedStages.map((selectedStage) => {
        return <LineGraph selectedStage={selectedStage} />;
      })}

      {persona === false ? (
        <div className="annotation-wrapper">
          <div className="a-list">
            {aList.map((m, i) => {
              return (
                <div className="annotation-item" key={i}>
                  {m}
                </div>
              );
            })}
          </div>
          <Button onClick={handleShow}>Add annotation</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Annotation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="text-field-wrapper mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={annotation}
                    onChange={(e) => {
                      console.log(e.target.value);
                      setAnnotation(e.target.value);
                    }}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={addAnnotation}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Stage;
