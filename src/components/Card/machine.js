import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import CardDeck from 'react-bootstrap/CardDeck'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import FlippyTemp from './FlippyTemp1'



import Card from 'react-bootstrap/Card';
import Switch from "react-switch";
import { Component } from "react";
import { Container } from "@material-ui/core";




class Machine extends Component {
    constructor() {
        super();
        this.state = { checked1: false, checked2: false, checked3: false };
        this.machine1 = this.machine1.bind(this);
        this.machine2 = this.machine2.bind(this);
        this.machine3 = this.machine3.bind(this);
    }

    machine1(checked1) {
        this.setState({ checked1 });

    }
    machine2(checked2) {
        this.setState({ checked2 });

    }
    machine3(checked3) {
        this.setState({ checked3 });

    }

    render() {

        return (<div style={{
            display: "inline-block",
            borderRadius: "25px",
            border: "2px solid white",

            paddingTop: "50px",

            paddingBottom: "50px",
            outline: "10px",
            borderBlockColor: "yellowgreen"

        }}>
            {/* <CardDeck style={{marginLeft:"5%",marginRight:"5%"}}>
                <Card
                    bg="dark"
                    text="light"
                    style={{ width: '40rem' }}
                    className="mb-2"
                >

                    <Card.Body>

                        <Card.Title> Machine 1 </Card.Title>

                        <div style={{ width: "100px", height: "100px", marginLeft: "30%" }} >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" /></svg>
                        </div>
                        <div style={{ marginLeft: "80%" }}>


                            <Switch
                                onChange={this.machine1}
                                checked={this.state.checked1}
                                id="normal-switch"
                            />


                        </div>

                    </Card.Body>

                </Card>
                <Card
                    bg="dark"
                    text="light"
                    style={{ width: '10rem' }}
                    className="mb-2"
                >
                    <Card.Body>
                        <Card.Title>Machine 2 </Card.Title>
                        <div style={{ width: "100px", height: "100px", marginLeft: "30%" }} >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" /></svg>
                        </div>
                        <div style={{ marginLeft: "80%" }}>


                            <Switch
                                onChange={this.machine2}
                                checked={this.state.checked2}
                                id="normal-switch"
                            />


                        </div>
                    </Card.Body>
                </Card>
                <Card
                    bg="dark"
                    text="light"
                    style={{ width: '10rem' }}
                    className="mb-2"
                >

                    <Card.Body>
                        <Card.Title>Machine 3</Card.Title>
                        <Card.Text>
                            <div style={{ width: "100px", height: "100px", marginLeft: "30%" }} >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" /></svg>
                            </div>

                        </Card.Text>
                        <div style={{ marginLeft: "80%" }}>


                            <Switch
                                onChange={this.machine3}
                                checked={this.state.checked3}
                                id="normal-switch"
                            />


                        </div>

                    </Card.Body>
                </Card>
            </CardDeck> */}
            <Container>
                <Row >

                    <FlippyTemp > </FlippyTemp>
                    
                    <FlippyTemp > </FlippyTemp>
                    <FlippyTemp > </FlippyTemp>

                </Row>
            </Container>
        </div>

        );
    }
}

export default Machine