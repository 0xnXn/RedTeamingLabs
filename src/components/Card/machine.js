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


import Card from 'react-bootstrap/Card';
import Switch from "react-switch";
import { Component } from "react";
import { Container } from "@material-ui/core";
import Button from 'react-bootstrap/Button'
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

            <Container>
                <Row style={{ marginBottom: "50px", width: "300px", marginLeft: "70%" }}>
                    <Col>
                        <Button onClick={this.setStateHandler}>Update IP</Button>
                    </Col>
                    <Col>
                        <h4 style={{ color: "green" }}> IP: {this.state.data}</h4>
                    </Col>
                </Row>
                <Row style={{ marginRight: "10px" }}>

                    <FlippyTemp id={1} frontName={"Machine1"} status={this.state.status} > </FlippyTemp>

                    <FlippyTemp id={2} frontName={"Machine2"} staus='Stopped'> </FlippyTemp>
                    <FlippyTemp id={3} frontName={"Machine3"} staus='Stopped'> </FlippyTemp>

                </Row>
            </Container>
        </div>

        );
    }
}

export default Machine