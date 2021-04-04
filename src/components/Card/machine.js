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
import server from '../../server';
const axios = require('axios');
import download from 'js-file-download';

import Card from 'react-bootstrap/Card';
import Switch from "react-switch";
import { Component } from "react";
import { Container } from "@material-ui/core";
import Button from 'react-bootstrap/Button'
import { ListGroup } from "react-bootstrap";
import { Label } from "@material-ui/icons";
/* TO-DO
A new button to Initialize machine
After timer Flipped wala button enable By default running state mai hota hai
Each model should be independent
*/


class Machine extends Component {
    constructor() {
        super();
        this.state = { checked1: false, checked2: false, checked3: false, data: [], status: '' };
        this.machine1 = this.machine1.bind(this);
        this.machine2 = this.machine2.bind(this);
        this.machine3 = this.machine3.bind(this);
    }

    componentDidMount() {
        fetch(`${server}/users/status`,
            {
                method: "GET",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    status: data.state,
                })
            })
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
    setStateHandler = () => {
        fetch("https://geolocation-db.com/json/")
            .then(res => res.json())
            .then(res => {
                console.log(res.IPv4)
                this.setState({
                    data: res.IPv4
                })
            })
            .catch(err => console.log(err))

    };
    initializeMachine = () => {
        fetch(`${server}/users/initialize`,
            {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    id: 1,
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    infraStatus: data.state
                })
            })
    }
    startMachine = () => {
        fetch(`${server}/users/start`,
            {
                method: "GET",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    status: data.state,
                })
            })
    }
    stopMachine = () => {
        fetch(`${server}/users/stop`,
            {
                method: "GET",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    status: data.state,
                })
            })
    }
    destroyMachine = () => {
        fetch(`${server}/users/destroy`,
            {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    id: 1,
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    infraStatus: data.state
                })
            })
    }
    statusMachine = () => {
        fetch(`${server}/users/status`,
            {
                method: "GET",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    'Access-Control-Allow-Origin': '*'
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    status: data.state,
                })
            })
    }
    getVPN = () => {
        const vpnFile = `${server}/users/vpn`;
        axios.get(vpnFile).then(
            function (resp) {
                console.log(resp)
                download(resp.data, 'connect.ovpn');
            }
        );
    }
    render() {

        return (<div style={{
            display: "flex",
            borderRadius: "25px",
            border: "2px solid white",

            paddingTop: "50px",

            paddingBottom: "50px",
            outline: "10px",
            borderBlockColor: "yellowgreen"

        }}>

            <Container >
                <div className="d-flex justify-content-center">
                    <h1 className="text-white">Infrastructures</h1>
                </div>
                {/* <div className="d-flex justify-content-end">
                    <Row lassName="justify-content-md-center" style={{ width: "30%" }}>
                        <Col className="flex-start">
                            <Button onClick={this.setStateHandler}>Update IP</Button>
                        </Col>
                        <Col className="flex-start">
                            <h4 style={{ color: "green" }}> IP: {this.state.data}</h4>
                        </Col>
                    </Row>
                </div> */}
                <div className="pt-3">
                    <Row style={{ flex: "1", marginRight: "10px", justifyContent: "space-evenly", }}>

                        {/* <FlippyTemp id={1} frontName={"Machine1"} status={this.state.status} > </FlippyTemp>

                    <FlippyTemp id={2} frontName={"Machine2"} staus='Stopped'> </FlippyTemp>
                    <FlippyTemp id={3} frontName={"Machine3"} staus='Stopped'> </FlippyTemp> */}

                        <Card className="bg-dark text-white" style={{ width: '20rem' }}>
                            <Row className="justify-content-md-center">
                                <Col className="flex-start" >
                                    <Card.Body style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: '80%',
                                    }}>
                                        <div  >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" /></svg>
                                            <p>Status: {this.state.status}</p>
                                        </div>
                                    </Card.Body>
                                </Col>
                                <Col className="flex-end" md="auto">
                                    <ListGroup variant="flush" style={{ backgroundColor: '#343a40', }}>
                                        <ListGroup.Item><Button onClick={this.initializeMachine} className="p-0" variant="outlined-button">Initialize</Button></ListGroup.Item>
                                        <ListGroup.Item><Button onClick={this.startMachine} className="p-0" variant="outlined-button">Start</Button></ListGroup.Item>
                                        <ListGroup.Item><Button onClick={this.stopMachine} className="p-0" variant="outlined-button">Stop</Button></ListGroup.Item>
                                        <ListGroup.Item><Button onClick={this.getVPN} className="p-0" variant="outlined-button">VPN</Button></ListGroup.Item>
                                        <ListGroup.Item><Button onClick={this.destroyMachine} className="p-0" variant="outlined-button">Destroy</Button></ListGroup.Item>
                                        <ListGroup.Item><Button onClick={this.statusMachine} className="p-0" variant="outlined-button">Status</Button></ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Card>
                    </Row>
                </div>
            </Container>
        </div>

        );
    }
}

export default Machine