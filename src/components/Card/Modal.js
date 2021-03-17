import React from 'react';
import  { useEffect,useState } from "react";

import MydModalWithGrid from "./MydModalWithGrid";
import Button from 'react-bootstrap/Button';

export default function Modal(props) {
    const [modalShow, setModalShow] = useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          {props.text}
        </Button>
  
        <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  }