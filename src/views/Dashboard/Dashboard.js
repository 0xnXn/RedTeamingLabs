import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

import { Component } from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
//import Card from "components/Card/Card.js";
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import ChartsPagePro from './ChartsPagePro'




import Card from 'react-bootstrap/Card';
import "./test.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import FlippingCardPage from "../../components/Card/FlippingCardPage";

import { bugs, website, server } from "variables/general.js";


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { TextsmsTwoTone } from "@material-ui/icons";
import { CardGroup } from "react-bootstrap";
import { Container } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { Doughnut, Bar } from 'react-chartjs-2';
import fetch from 'node-fetch';

const useStyles = makeStyles(styles);


export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }

  }




  redirect_access = () => {
    this.props.history.push('/admin/access')
  }
  redirect_machine = () => {
    this.props.history.push('/admin/machine')
  }
  redirect_learn = () => {
    this.props.history.push('/admin/learn')
  }
  render() {
    return (

      <div style={{
        display: "inline-Block",

        borderRadius: "25px",
        border: "2px solid white",

        paddingTop: "50px",

        paddingBottom: "50px",
        outline: "10px",
        borderBlockColor: "yellowgreen"

      }}>


        <Container  >

          <Row >
            <CardDeck style={{ marginLeft: "5px", marginRight: "5px" }} >
              <Card
                bg="dark"
                text="light"
                style={{ width: '20rem' }}
                className="mb-2"
              >

                <Card.Body className="box">

                  <div className="dashboard__card" onClick={this.redirect_access}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="svg__size" viewBox="0 0 24 24"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" /></svg>
                  </div>
                  <div className="dashboardTitle" >Vpn Connections</div>

                  <p >Download your connection pack to   <br />access our lab network</p>
                </Card.Body>

              </Card>
              <Card
                bg="dark"
                text="light"
                style={{ width: '20rem' }}
                className="mb-2"
              >
                <Card.Body className="box">

                  <div className="dashboard__card" onClick={this.redirect_machine}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="svg__size" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" /></svg>
                  </div>
                  <div className="dashboardTitle" >Machines</div>
                  <p>Over 150 live, hackable<br />machines to choose from</p>
                </Card.Body>
              </Card>
              <Card
                bg="dark"
                text="light"
                style={{ width: '20rem' }}
                className="mb-2"
              >

                <Card.Body className="box">

                  <Card.Text>
                    <div className="dashboard__card" onClick={this.redirect_learn}>

                      <svg xmlns="http://www.w3.org/2000/svg" className="svg__size" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>

                    </div>
                    <div className="dashboardTitle" style={{ color: "white" }}>Learn</div>


                    <p>Courses for every skill level<br />ranging from fundamental to expert</p>
                  </Card.Text>

                </Card.Body>
              </Card>

            </CardDeck>
          </Row>
          <Row>
            <Col style={{ display: "flex", marginTop: "50px" }}>
              {/* <CardDeck style={{ marginTop: "30px" }}>
                <Card
                  bg="dark"
                  text="light"
                  style={{ width: '10rem' }}
                  className="mb-2"
                  align
                >

                  <Row>

                    <Col style ={{marginTop:"20%"}} >


                      <svg version="1.1" id="Capa_1" x="0px" y="0px" width="40px" height="40px"
                        viewBox="0 0 490 490"  >

                        <g id="Business_1_Bold_49_">
                          <path d="M391.495,127.323c-18.635,0-33.749,15.114-33.749,33.749c0,2.756,0.429,5.405,1.057,7.978l-48.632,42.431
		c-3.905-1.577-8.162-2.496-12.633-2.496c-6.462,0-12.449,1.914-17.579,5.068l-79.702-50.133c0.076-0.949,0.291-1.868,0.291-2.848
		c0-18.635-15.113-33.749-33.749-33.749c-18.635,0-33.749,15.113-33.749,33.749c0,4.854,1.072,9.448,2.909,13.628l-29.553,35.326
		c-2.542-0.612-5.16-1.026-7.886-1.026c-18.635,0-33.749,15.113-33.749,33.749c0,18.635,15.113,33.749,33.749,33.749
		c18.635,0,33.749-15.113,33.749-33.749c0-4.548-0.934-8.881-2.557-12.847l29.997-35.846c2.297,0.49,4.655,0.781,7.09,0.781
		c6.355,0,12.219-1.853,17.288-4.9l79.962,50.302c-0.061,0.842-0.26,1.654-0.26,2.527c0,18.635,15.113,33.749,33.749,33.749
		c18.635,0,33.749-15.113,33.749-33.749c0-2.802-0.444-5.482-1.087-8.1l48.556-42.354c3.935,1.608,8.238,2.527,12.755,2.527
		c18.635,0,33.749-15.113,33.749-33.749C425.259,142.452,410.13,127.323,391.495,127.323z"/>
                          <path d="M229.687,381.542v54.865H126.328v30.625h237.344v-30.625H260.313v-54.865h214.375c8.422,0,15.312-6.891,15.312-15.312
		V38.281c0-8.422-6.891-15.313-15.312-15.313H15.312C6.891,22.969,0,29.859,0,38.281v327.948c0,8.422,6.891,15.312,15.312,15.312
		H229.687z M30.625,53.594h428.75v297.323H30.625V53.594z"/>
                        </g>

                      </svg>





                    </Col>
                    <Col>
                      <Row>
                        <Col>
                          <div className="h5" style={{ fontSize: "15px" }}>Machine </div>
                        </Col>
                        <Col> 123</Col>
                      </Row>
                    </Col>


                  </Row>
                </Card>
                <Card
                  bg="dark"
                  text="light"
                  style={{ width: '2rem' }}
                  className="mb-2"
                >

                  <Card.Body>
                    <Card.Title><div style={{ fontSize: "15px", textAlign: "center" }}>Online Members</div> </Card.Title>
                    <Card.Text>
                      <svg version="1.1" x="0px" y="0px"
                        width="40px" height="40px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" >
                        <g>
                          <path d="M32,42c8.271,0,15-8.523,15-19S40.271,4,32,4s-15,8.523-15,19S23.729,42,32,42z M32,8c5.963,0,11,6.869,11,15
		s-5.037,15-11,15s-11-6.869-11-15S26.037,8,32,8z"/>
                          <path d="M4.103,45.367l-4,12c-0.203,0.61-0.101,1.28,0.275,1.802C0.753,59.691,1.357,60,2,60h60c0.643,0,1.247-0.309,1.622-0.831
		c0.376-0.521,0.479-1.191,0.275-1.802l-4-12c-0.209-0.626-0.713-1.108-1.348-1.29l-14-4c-0.482-0.139-0.996-0.09-1.444,0.134
		L32,45.764l-11.105-5.553c-0.448-0.224-0.962-0.272-1.444-0.134l-14,4C4.815,44.259,4.312,44.741,4.103,45.367z M19.802,44.137
		l11.304,5.652c0.562,0.281,1.227,0.281,1.789,0l11.304-5.652l12.238,3.496L59.226,56H4.774l2.789-8.367L19.802,44.137z"/>
                        </g>
                      </svg>


                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card
                  bg="dark"
                  text="light"
                  style={{ width: '2rem' }}
                  className="mb-2"
                >

                  <Card.Body>
                    <Card.Title><div style={{ fontSize: "15px", textAlign: "center" }}>Response Time </div> </Card.Title>
                    <Card.Text>
                      <svg version="1.1" id="Capa_1" x="0px" y="0px" width="40px" height="40px"
                        viewBox="0 0 489.4 489.4"  >
                        <g>
                          <path d="M489.4,0.1H377.5v111.8h46.2V235H300.6v-46.2H188.8V235H56c-5.4,0-9.7,4.3-9.7,9.7v132.8H0v111.8h111.8V377.6H65.7V254.5
		h123.1v46.2h111.8v-46.2h132.8c5.4,0,9.7-4.3,9.7-9.7V112h46.2V0.1H489.4z"/>
                        </g>
                      </svg>

                    </Card.Text>
                  </Card.Body>
                </Card>

              </CardDeck> */}
              <Card
                bg="dark"


                style={{ width: '13rem', marginLeft: "5px", height: "100px" }}
                className="mb-2"
              >

                <Card.Body>
                  <Row>
                    <Col>
                      <svg version="1.1" id="Capa_1" x="0px" y="0px" width="60px" height="60px"
                        viewBox="0 0 490 490"  >

                        <g id="Business_1_Bold_49_">
                          <path d="M391.495,127.323c-18.635,0-33.749,15.114-33.749,33.749c0,2.756,0.429,5.405,1.057,7.978l-48.632,42.431
		c-3.905-1.577-8.162-2.496-12.633-2.496c-6.462,0-12.449,1.914-17.579,5.068l-79.702-50.133c0.076-0.949,0.291-1.868,0.291-2.848
		c0-18.635-15.113-33.749-33.749-33.749c-18.635,0-33.749,15.113-33.749,33.749c0,4.854,1.072,9.448,2.909,13.628l-29.553,35.326
		c-2.542-0.612-5.16-1.026-7.886-1.026c-18.635,0-33.749,15.113-33.749,33.749c0,18.635,15.113,33.749,33.749,33.749
		c18.635,0,33.749-15.113,33.749-33.749c0-4.548-0.934-8.881-2.557-12.847l29.997-35.846c2.297,0.49,4.655,0.781,7.09,0.781
		c6.355,0,12.219-1.853,17.288-4.9l79.962,50.302c-0.061,0.842-0.26,1.654-0.26,2.527c0,18.635,15.113,33.749,33.749,33.749
		c18.635,0,33.749-15.113,33.749-33.749c0-2.802-0.444-5.482-1.087-8.1l48.556-42.354c3.935,1.608,8.238,2.527,12.755,2.527
		c18.635,0,33.749-15.113,33.749-33.749C425.259,142.452,410.13,127.323,391.495,127.323z"/>
                          <path d="M229.687,381.542v54.865H126.328v30.625h237.344v-30.625H260.313v-54.865h214.375c8.422,0,15.312-6.891,15.312-15.312
		V38.281c0-8.422-6.891-15.313-15.312-15.313H15.312C6.891,22.969,0,29.859,0,38.281v327.948c0,8.422,6.891,15.312,15.312,15.312
		H229.687z M30.625,53.594h428.75v297.323H30.625V53.594z"/>
                        </g>

                      </svg>
                    </Col>
                    <Col>
                      <Row><div style={{ fontWeight: "500", color: "white", fontSize: "30px", textAlign: "center" }}>125 </div> </Row>

                      <Row><p style={{ fontWeight: "500", fontSize: "15px", marginTop: "6px", textAlign: "center" }}> Machines </p> </Row>

                    </Col>
                  </Row>


                </Card.Body>
              </Card>
              <Card
                bg="dark"


                style={{ width: '13rem', marginLeft: "5px", height: "100px" }}
                className="mb-2"
              >

                <Card.Body>
                  <Row>
                    <Col>
                      <svg version="1.1" x="0px" y="0px"
                        width="60px" height="60px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" >
                        <g>
                          <path d="M32,42c8.271,0,15-8.523,15-19S40.271,4,32,4s-15,8.523-15,19S23.729,42,32,42z M32,8c5.963,0,11,6.869,11,15
		s-5.037,15-11,15s-11-6.869-11-15S26.037,8,32,8z"/>
                          <path d="M4.103,45.367l-4,12c-0.203,0.61-0.101,1.28,0.275,1.802C0.753,59.691,1.357,60,2,60h60c0.643,0,1.247-0.309,1.622-0.831
		c0.376-0.521,0.479-1.191,0.275-1.802l-4-12c-0.209-0.626-0.713-1.108-1.348-1.29l-14-4c-0.482-0.139-0.996-0.09-1.444,0.134
		L32,45.764l-11.105-5.553c-0.448-0.224-0.962-0.272-1.444-0.134l-14,4C4.815,44.259,4.312,44.741,4.103,45.367z M19.802,44.137
		l11.304,5.652c0.562,0.281,1.227,0.281,1.789,0l11.304-5.652l12.238,3.496L59.226,56H4.774l2.789-8.367L19.802,44.137z"/>
                        </g>
                      </svg>
                    </Col>
                    <Col>
                      <Row><div style={{ fontWeight: "500", color: "white", fontSize: "30px", textAlign: "center" }}>125 </div> </Row>

                      <Row><p style={{ fontWeight: "500", fontSize: "15px", marginTop: "6px", textAlign: "center" }}> Active </p> </Row>

                    </Col>
                  </Row>


                </Card.Body>
              </Card>
              <Card
                bg="dark"


                style={{ width: '13rem', marginLeft: "5px", height: "100px" }}
                className="mb-2"
              >

                <Card.Body>
                  <Row>
                    <Col>
                      <svg version="1.1" id="Capa_1" x="0px" y="0px" width="60px" height="60px"
                        viewBox="0 0 489.4 489.4"  >
                        <g>
                          <path d="M489.4,0.1H377.5v111.8h46.2V235H300.6v-46.2H188.8V235H56c-5.4,0-9.7,4.3-9.7,9.7v132.8H0v111.8h111.8V377.6H65.7V254.5
		h123.1v46.2h111.8v-46.2h132.8c5.4,0,9.7-4.3,9.7-9.7V112h46.2V0.1H489.4z"/>
                        </g>
                      </svg>
                    </Col>
                    <Col>
                      <Row><div style={{ fontWeight: "500", color: "white", fontSize: "30px", textAlign: "center" }}>125 </div> </Row>

                      <Row><p style={{ fontWeight: "500", fontSize: "15px", marginTop: "6px", textAlign: "center" }}> Connections </p> </Row>

                    </Col>
                  </Row>


                </Card.Body>
              </Card>
            </Col>
            <Col >
              <div style={{ background: "#343a40" }}>
                <ChartsPagePro></ChartsPagePro>
              </div>
            </Col>
          </Row>



        </Container>




      </div>
    );
  }
}