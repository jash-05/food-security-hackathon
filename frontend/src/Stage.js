/** @format */
import { React, useEffect, useState } from "react";
import Imports from "./Imports";
import LineGraph from "./LineGraph";
import { ListGroup, Button, Form } from "react-bootstrap";
import YearSlider from "./YearSlider";
import { Banana } from "./components/banana";
import { Mango } from "./components/mango";
import { Walnut } from "./components/walnut";
import Modal from "react-bootstrap/Modal";

const Stage = ({
  persona,
  country,
  selectedStages,
  sliderValue,
  handleSliderChange,
}) => {
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

  console.log("Rendering Stage");
  console.log("Country: " + JSON.stringify(country));
  console.log("Selected stages: " + JSON.stringify(selectedStages));
  return (
    <div className="content-wrapper">
      {selectedStages.length ? (
        selectedStages.at(-1).category === "crops" ? (
          selectedStages.at(-1).indicator === "banana" ? (
            <Banana crop={selectedStages.at(-1).indicator} />
          ) : selectedStages.at(-1).indicator === "mango" ? (
            <Mango crop={selectedStages.at(-1).indicator} />
          ) : (
            <Walnut crop={selectedStages.at(-1).indicator} />
          )
        ) : selectedStages.at(-1).category === "imports" ? (
          <Imports country={selectedStages.at(-1).indicator} />
        ) : selectedStages.at(-1).category === "yield" ? (
          ""
        ) : (
          <>
            <YearSlider
              sliderValue={sliderValue}
              handleSliderChange={handleSliderChange}
            />
            {selectedStages.map((selectedStage) => {
              return (
                <LineGraph
                  country={country}
                  selectedStage={selectedStage}
                  sliderValue={sliderValue}
                />
              );
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
          </>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Stage;
