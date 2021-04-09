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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardText,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function UserProfile() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h2 className="">Edit Profile</h2>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-md-1" md="5">
                      <FormGroup>
                        <label>Company (disabled)</label>
                        <Input
                          defaultValue="Tech Corp"
                          disabled
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="3">
                      <FormGroup>
                        <label>Username</label>
                        <Input
                          defaultValue="john.doe"
                          placeholder="Username"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <Input placeholder="john.doe@gmail.com" type="email" />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="6">
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue="John"
                          placeholder="Company"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="6">
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue="Doe"
                          placeholder="Last Name"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          defaultValue="Nr Bombay Street, Virar"
                          placeholder="Home Address"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-md-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          defaultValue="Mumbai"
                          placeholder="City"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-md-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          defaultValue="India"
                          placeholder="Country"
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-md-1" md="4">
                      <FormGroup>
                        <label>Postal Code</label>
                        <Input defaultValue="400440" placeholder="ZIP Code" type="number" />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
              <CardFooter>
                <Button className="btn-fill" color="primary" type="submit">
                  Save
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="4">
            {/* <Card className="card-user">
              <CardBody>
                <CardText />
                <div className="author">
                  <div className="block block-one" />
                  <div className="block block-two" />
                  <div className="block block-three" />
                  <div className="block block-four" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar"
                      src={require("assets/img/emilyz.jpg").default}
                    />
                    <h3 className="">Mike Andrew</h3>
                  </a>
                  <p className="description">Ceo/Co-Founder</p>
                </div>
                <div className="card-description">
                  Do not be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </div>
              </CardBody>
              <CardFooter>
                <div className="button-container">
                  <Button className="btn-icon btn-round" color="facebook">
                    <i className="fab fa-facebook" />
                  </Button>
                  <Button className="btn-icon btn-round" color="twitter">
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button className="btn-icon btn-round" color="google">
                    <i className="fab fa-google-plus" />
                  </Button>
                </div>
              </CardFooter>
            </Card> */}
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserProfile;
