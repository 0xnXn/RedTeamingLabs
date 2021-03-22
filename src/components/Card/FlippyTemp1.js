
import React from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import { Component } from "react";

import Switch from "react-switch";
import { Container } from "@material-ui/core";
import Row from 'react-bootstrap/Row'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { RowingSharp } from "@material-ui/icons";
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import MydModalWithGrid from "./MydModalWithGrid";
import server from '../../server';

export default class FlippyTemp1 extends Component {
    constructor() {
        super();

        this.state = { isFlipped: false, checked1: false, show: false, checked2: false, checked3: false, machineStatus: '', infraStatus: false };

        this.machine3 = this.machine3.bind(this);

    }
    handleClose = () => {
        this.setState({
            show: false,
            checked3: !this.state.checked3,
            isFlipped: !this.state.isFlipped
        });
    }
    handleShow = () => {
        this.setState({
            show: true
        });
    }
    handleYes = () => {
        this.setState({
            show: false,
            isFlipped: this.state.isFlipped
        })
        console.log('imhere');
        fetch(`${server}/users/start`,
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
                    machineStatus: data.state
                })
            })
    }

    machine3 = (checked3) => {
        if (this.state.isFlipped) {
            fetch(`${server}/users/stop`,
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
                        isFlipped: false,
                        checked3: false,
                    })
                })
        } else {
            this.setState({ checked3 });
            this.toggle()
            this.handleShow()
            this.setState({
                isFlipped: !this.state.isFlipped
            })
        }
    }
    Button1(id) {
        console.log("do something here", id)


    }
    Button2(id) {

        console.log("do something here", id)


    }
    Button3(id) {
        console.log("do something here", id)
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
                    machineStatus: data.state
                })
            })
    }

    toggle = () => {
        this.setState({

        });
    }

    initializeServer = () => {
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

    componentDidMount() {
        this.setState({
            machineStatus: this.props.status
        })
        console.log(this.state.machineStatus);
        if (this.state.machineStatus == 'running') {
            this.setState({
                isFlipped: true,
                checked3: true
            })
        }
    }

    render() {
        let temp
        if (this.state.checked3) {
            temp = <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You Sure?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={this.handleYes}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>

        }
        else {
            temp = <div />
        }

        return (
            <Flippy
                flipOnHover={false} // default false
                isFlipped={this.state.isFlipped}
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '300px', height: '300px', marginLeft: "20px" }} //  / these are optional style, it is not necessary
            >
                <FrontSide
                    style={{
                        backgroundColor: '#343a40',
                        color: "white",

                    }}
                >
                    <div style={{

                        fontWeight: "300",
                        fontSize: "30px",
                        textAlign: "center"
                    }}>
                        <div style={{ width: "100px", height: "100px", marginLeft: "30%" }} >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" /></svg>
                        </div>
                        <Container>
                            <Row style={{ marginLeft: "20%", marginBottom: "10px" }}>
                                {this.props.frontName}
                            </Row>
                            <Row style={{ marginLeft: "31%" }}>
                                <Button onClick={this.initializeServer} style={{backgroundColor: "yellowgreen", borderColor: "yellowgreen"}} >Initialize</Button>
                            </Row>
                        </Container>

                        <div style={{ marginTop: "30%", marginLeft: "70%" }}>

                            <Switch
                                onChange={this.machine3}
                                checked={this.state.checked3}
                                id="normal-switch"
                            />

                        </div>
                    </div>
                </FrontSide>
                <BackSide
                    style={{ backgroundColor: '#343a40', }}>
                    <div><Container>
                        {temp}

                        <Row >
                            <div style={{ width: "100px", height: "100px", marginLeft: "30%" }} >
                                <svg style={{ fill: "yellowgreen" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" /></svg>
                            </div>

                        </Row>
                        <Row style={{ marginBottom: "20px", marginLeft: "1%" }}>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary" onClick={() => this.Button1(this.props.id)}>Refresh</Button>
                                <Button variant="secondary" onClick={() => this.Button2(this.props.id)}>pause</Button>
                                <Button variant="secondary" onClick={() => this.Button3(this.props.id)}>status</Button>
                            </ButtonGroup>
                        </Row>
                        <Row style={{ color: "white", marginLeft: "10px" }}> <Col> Status</Col><Col> {this.state.machineStatus}</Col></Row>
                        <Row style={{ marginLeft: "80%", marginTop: "25%" }}>

                            <Switch
                                onChange={this.machine3}
                                checked={this.state.checked3}
                                id="normal-switch"
                            /></Row>
                    </Container>
                    </div>




                </BackSide>
            </Flippy>
        )
    }
}