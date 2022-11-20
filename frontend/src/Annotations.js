import { React, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const Annotations = ({
  aList,
  annotation,
  addAnnotation,
  handleAnnotation,
  show,
  handleShow,
  handleClose,
}) => {
  return (
    <div className="annotation-wrapper">
      <Button onClick={(e) => handleShow()}>Add annotation</Button>
      {/* {aList.length ? ( */}
      <div className="a-list">
        {aList?.map((m, i) => {
          return (
            <div className="annotation-item" key={i}>
              {m}
            </div>
          );
        })}
      </div>
      {/* ) : (
        <></>
      )} */}
      <Modal show={show} onHide={(e) => handleClose()}>
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
                  //   console.log(e.target.value);
                  handleAnnotation(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => addAnnotation()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Annotations;
