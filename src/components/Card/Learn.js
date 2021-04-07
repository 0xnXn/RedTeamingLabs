import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import 'antd/dist/antd.css'


import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

import { Component } from "react";

import Card from 'react-bootstrap/Card';

import CardDeck from 'react-bootstrap/CardDeck'
import FlippyTemp from './FlippyTemp'
import { container } from "assets/jss/material-dashboard-react";
import { Container } from "@material-ui/core";
import Row from 'react-bootstrap/Row'






export default class Learn extends Component {
  render() {
    return (
      <div style={{  display: "inline-block",
      width: "100%",
      border: "2px solid white",
      height: "100%",
      paddingTop:"50px",
      
      paddingBottom:"50px",
      outline:"10px",
      outlineColor:"white",
    
      borderRadius: "25px",
    
      
    
  
     
      borderBlockColor:"yellowgreen"
  
   
     }}>
      <Container style={{backgroundColor:"white !important"}}>
        <Row>
          <Col>
            <FlippyTemp frontName="Discovery" />
          </Col>
          <Col>
            <FlippyTemp frontName="Privilege Escalation" />
          </Col>
          <Col>
            <FlippyTemp frontName="Defence Evasion" />
          </Col>
          <Col>
            <FlippyTemp frontName="Credential Dumping" />
          </Col>
        </Row>
        <Row style={{
          marginTop: "50px"
        }}>
          <Col>
            <FlippyTemp frontName="Lateral Movement
" />
          </Col>
          <Col>
            <FlippyTemp frontName="Persistence" />
          </Col>
          <Col>
            <FlippyTemp frontName="Defence and         Detection" />
          </Col>
          <Col>
            <FlippyTemp frontName="Recon" />
          </Col>
        </Row>
      </Container>
</div>
     
    );
  }
}
