/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
import "./Dashboard.css"
import { Redirect, useHistory } from "react-router-dom";
import work from '../images/work.svg'
import longDesk from '../images/longDesk.svg'
import dashboardImg from '../images/dashboard.svg'

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "variables/charts.js";

function Dashboard(props) {
  const [bigChartData, setbigChartData] = React.useState("data1");
  const setBgChartData = (name) => {
    setbigChartData(name);
  }
  let history = useHistory();
  const redirectMachine = () => {

    let path = `/admin/machine`;
    history.push(path)
  }

  const redirectCSS = () => {
    window.open('https://www.cybersmithsecure.com/index.php/blog/', '_blank'); 
  }

  const redirectAccess = () => {

    let path1 = `/admin/access`;
    history.push(path1)
  }
  return (
    <>
      <div className="content">

        <Row>
          <Col style={{width :"100%",textAlign:"center" }}>   
          <embed src={longDesk} ></embed>
            <h2 >WORK SPACE</h2></Col>

        </Row>
        <Row>
          <Col lg="4">
            <Card className="card-chart">

              <CardBody>
                <div className="chart-area">
                  <div className="dashboard__card" onClick={ redirectAccess } >
                    <svg xmlns="http://www.w3.org/2000/svg" height="150" width="150" className="icon" viewBox="0 0 24 24"><path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" /></svg>
                  </div>
                  <div className="card__title" >Vpn Connections</div>

                  <p className="card__content">Download your connection pack to   <br />access our lab network</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">

              <CardBody>
                <div className="chart-area">
                  <div className="dashboard__card" onClick={redirectMachine} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" height="150" width="150" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" /></svg>
                  </div>
                  <div className="card__title" >Machines</div>

                  <p className="card__content">Over 150 live, hackable  <br />machines to choose from</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4">
            <Card className="card-chart">

              <CardBody>
                <div className="chart-area">
                  <div className="dashboard__card" onClick={redirectCSS}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" height="150" width="150" viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" /></svg>

                  </div>
                  <div className="card__title" >Learn</div>

                  <p className="card__content">Courses for every skill level  <br />ranging from fundamental to expert</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>






        <Row style={{ alignContent: "center" }}>
          <div style={{ display: "flex", marginLeft: "19%" }}>
            <Col lg="6">
              <Card className="card-chart">

                <CardBody>
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
                      <Row><div style={{ fontWeight: "500", color: "white", fontSize: "30px", textAlign: "center" }}>32 </div> </Row>

                      <Row><p style={{ fontWeight: "500", fontSize: "15px", marginTop: "6px", textAlign: "center" }}> Machines </p> </Row>

                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-chart">

                <CardBody>
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
                      <Row><div style={{ fontWeight: "500", color: "white", fontSize: "30px", textAlign: "center" }}>32 </div> </Row>

                      <Row><p style={{ fontWeight: "500", fontSize: "15px", marginTop: "6px", textAlign: "center" }}> Active </p> </Row>

                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="card-chart">

                <CardBody>
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
                      <Row><div style={{ fontWeight: "500", color: "white", fontSize: "30px", textAlign: "center" }}>32 </div> </Row>

                      <Row><p style={{ fontWeight: "500", fontSize: "15px", marginTop: "6px", textAlign: "center" }}> Connections </p> </Row>

                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>




          </div>
        </Row>
        {/* <Row>
          <Col style={{ marginLeft: "40%" }}>   <img src={dashboardImg} height="200" width="300"></img> </Col>




          <Col xs="12  ">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Total Shipments</h5>
                    <CardTitle tag="h2">Performance</CardTitle>
                  </Col>
                  <Col sm="6">
                    <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Accounts
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Purchases
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Sessions
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup>
                  </Col>


                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Line
                    data={chartExample1[bigChartData]}
                    options={chartExample1.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
        {/* <Row>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Tasks(5)</h6>
                <p className="card-category d-inline"> today</p>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
                    data-toggle="dropdown"
                    type="button"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Another action
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Something else
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Update the Documentation</p>
                          <p className="text-muted">
                            Dwuamish Head, Seattle, WA 8:47 AM
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip636901683"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip636901683"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">GDPR Compliance</p>
                          <p className="text-muted">
                            The GDPR is a regulation that requires businesses to
                            protect the personal data and privacy of Europe
                            citizens for transactions that occur within EU
                            member states.
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip457194718"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip457194718"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Solve the issues</p>
                          <p className="text-muted">
                            Fifty percent of all respondents said they would be
                            more likely to shop at a company
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip362404923"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip362404923"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Release v2.0.0</p>
                          <p className="text-muted">
                            Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip818217463"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip818217463"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Export the processed files</p>
                          <p className="text-muted">
                            The report also shows that consumers will not easily
                            forgive a company once a breach exposing their
                            personal data occurs.
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip831835125"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip831835125"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Arival at export process</p>
                          <p className="text-muted">
                            Capitol Hill, Seattle, WA 12:34 AM
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip217595172"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip217595172"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Simple Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>Country</th>
                      <th>City</th>
                      <th className="text-center">Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dakota Rice</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                      <td className="text-center">$36,738</td>
                    </tr>
                    <tr>
                      <td>Minerva Hooper</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                      <td className="text-center">$23,789</td>
                    </tr>
                    <tr>
                      <td>Sage Rodriguez</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                      <td className="text-center">$56,142</td>
                    </tr>
                    <tr>
                      <td>Philip Chaney</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                      <td className="text-center">$38,735</td>
                    </tr>
                    <tr>
                      <td>Doris Greene</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                      <td className="text-center">$63,542</td>
                    </tr>
                    <tr>
                      <td>Mason Porter</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                      <td className="text-center">$78,615</td>
                    </tr>
                    <tr>
                      <td>Jon Porter</td>
                      <td>Portugal</td>
                      <td>Gloucester</td>
                      <td className="text-center">$98,615</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
      </div>
    </>
  );
}

export default Dashboard;
