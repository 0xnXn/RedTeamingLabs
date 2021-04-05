
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
import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Card from 'react-bootstrap/Card';
import Switch from "react-switch";
import { Component } from "react";
import { Container } from "@material-ui/core";
import Button from 'react-bootstrap/Button'
import { ListGroup } from "react-bootstrap";
import { Label } from "@material-ui/icons";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import MultiSelect from "react-multi-select-component";

import { useDispatch, useSelector } from 'react-redux'

/* TO-DO
A new button to Initialize machine
After timer Flipped wala button enable By default running state mai hota hai
Each model should be independent
*/


const Machine = () => {
    const dispatch = useDispatch()
    let count = useSelector(state => state.counter)
    let machines = useSelector(state => state.machines)
    const [modalShow, setModalShow] = useState(false)

    const machine = {
        machine_name: "",
        status: '',
        type: null,
        cyberSmithMachineType: null
    }
    const setDefaults = () => {
        setNewMachine({ machine_name: "", status: '', type: null, cyberSmithMachineType: null })

    }
    const Os = {
        windows: 0,
        linux: 0,
        mac: 0
    }
    const [numberOFOS, setnumberOFOS] = useState(Os)
    const options = [
        { label: "Windows", value: "windows" },
        { label: "Linux", value: "linux" },
        { label: "Mac", value: "mac" },
    ];


    const [selected, setSelected] = useState([]);

    const [newMachine, setNewMachine] = useState(machine)
    const [infraStatus, setInfraStatus] = useState('');

    const handleClick = () => {
        console.log("yes")
        dispatch({ type: "INCR" })
    }

    const onSave = () => {
        setModalShow(false)
        dispatch({ type: "ADD_MAACHINE", payload: newMachine })
        setDefaults()

    }
    const onHide = () => {
        setModalShow(false)
        setDefaults()

    }

    const addMachine = () => {
        // dispatch({ type: "ADD_MAACHINE", payload: machine })
        setModalShow(true)
    }
    const onHandleChange = event => {
        const { name, value } = event.target
        setNewMachine({ ...newMachine, [name]: value })

    }
    const Incr = (val) => {
        setnumberOFOS({ ...numberOFOS, [val]: numberOFOS[val] + 1 })
    }

    const Decr = (val) => {

    }

    const initializeMachine = () => {
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
                setInfraStatus(data.state);
            })
    }
    const startMachine = () => {
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
                setInfraStatus(data.state);
            })
    }
    const stopMachine = () => {
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
                setInfraStatus(data.state);
            })
    }
    const destroyMachine = () => {
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
                setInfraStatus(data.state);
            })
    }
    const statusMachine = () => {
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
                console.log(machines);
                setNewMachine({ ...newMachine, [name]: "CyberSmith Pentesting Environment", [status]: data.state })
                setInfraStatus(data.state);
            })
    }
    const getVPN = () => {
        const vpnFile = `${server}/users/vpn`;
        axios.get(vpnFile).then(
            function (resp) {
                console.log(resp)
                download(resp.data, 'connect.ovpn');
            }
        );
    }

    useEffect(() => {
        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
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
                // if(data.state != 'Terminate'){
                    setNewMachine({ ...newMachine, [name]: "CyberSmith Pentesting Environment", [status]: data.state })
                // }
                // setInfraStatus(data.state);
            })
    }, []);


    console.log(numberOFOS)

    return (<div style={{
        display: "flex",
        borderRadius: "25px",
        border: "2px solid white",

        paddingTop: "50px",

        paddingBottom: "50px",
        outline: "10px",
        borderBlockColor: "yellowgreen"

    }
        //     render() {
        //     }
    }>
        <Modal

            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modalShow}

        >
            <Modal.Header closeButton onClick={() => {
                setModalShow(false)
                setDefaults()


            }} >
                <Modal.Title id="contained-modal-title-vcenter">
                    Enter Machine Details
        </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    {/* <h4>Machine Name *</h4>
                <Form.Control name="machine_name" type="text" placeholder=" Enter Machine Name"
                    value={newMachine.machine_name}
                    onChange={onHandleChange}
                />
                <br />
                <h4>Machine Status *</h4>
                <Form.Control name="status" type="text" placeholder=" Enter Machine Status"
                    value={newMachine.status}
                    onChange={onHandleChange}
                />
                <br /> */}

                    <Form.Label>Type of Infrastructure</Form.Label>
                    <Form.Control name="type" as="select" custom
                        value={newMachine.type}
                        onChange={onHandleChange}>
                        <option>Pleas Select Infrastructure type</option>
                        <option>Custom Infrastructure</option>
                        <option>Virtual Private SandBox</option>
                        <option>CyberSmith Pentesting Environment</option>
                    </Form.Control>
                    <br />
                    <br />
                    <br />
                    {
                        (newMachine.type === "Custom Infrastructure") ?
                            <Form.File
                                id="custom-file"
                                label="Upload System Config"
                                custom
                            />
                            :
                            (newMachine.type === "Virtual Private SandBox") ?
                                <div>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={2}>
                                            SandBox Name
                                                    </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="email" placeholder="Enter SandBox Name " />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={2}>
                                            Server
                                                    </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control name="Server" as="select" custom
                                                value={newMachine.server}
                                                onChange={onHandleChange}>
                                                <option>Please Select a server</option>
                                                <option>T1 Server (Private)</option>
                                                <option>T2 Server (RedTeam)</option>
                                                <option>T3 Server (Corporate)</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalEmail">
                                        <Form.Label column sm={2}>
                                            Select Os
                                                    </Form.Label>
                                        <Col sm={10}>
                                            {/* <Form.Control name="Os" as="select" custom
                                                value={newMachine.Os}
                                                onChange={onHandleChange}>
                                                <option>Please Os which you would like to include in the sandbox</option>
                                                <option>Windows </option>
                                                <option>Linux </option>
                                                <option>MAC-OS </option>
                                            </Form.Control> */}
                                            <div>
                                                <MultiSelect
                                                    options={options}
                                                    value={selected}
                                                    onChange={setSelected}
                                                    labelledBy={"Select"}
                                                />
                                            </div>
                                            <pre>{console.log(selected)}</pre>
                                        </Col>
                                    </Form.Group>
                                    {selected.map((selectedObj, idx) => {
                                        return (
                                            <div>
                                                <IconButton type={selectedObj.value} onClick={() => Incr(selectedObj.value)}>
                                                    <AddCircleIcon />
                                                </IconButton>
                                                {selectedObj.label}
                                                <IconButton aria-label="delete" type={selectedObj.value} onClick={() => Decr(selectedObj.value)} >
                                                    <RemoveCircleOutlineIcon />
                                                </IconButton>
                                            </div>

                                        );

                                    })
                                    }




                                </div>
                                :
                                (newMachine.type === "CyberSmith Pentesting Environment") ?
                                    <>
                                        <Form.Control name="cyberSmithMachineType" as="select" custom
                                            value={newMachine.cyberSmithMachineType}
                                            onChange={onHandleChange}>
                                            <option>Please Select</option>
                                            <option>Windows Pentesting</option>
                                            <option>Linux Pentesting</option>
                                            <option>Web-Application Pentesting</option>
                                        </Form.Control>
                                        <br />
                                        <br />
                                        {(newMachine.cyberSmithMachineType === "Please Select" || newMachine.cyberSmithMachineType === null) ?
                                            <div>None Selected</div>
                                            :
                                            <div>
                                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                                    <Form.Label column sm={2}>
                                                        Machine Name
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="email" placeholder="Machine Name " readOnly />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row} controlId="formHorizontalEmail" >
                                                    <Form.Label column sm={2}>
                                                        Machine Type
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="email" placeholder="Machine Type " readOnly />
                                                    </Col>
                                                </Form.Group>


                                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                                    <Form.Label column sm={2}>
                                                        Machine Environment
                                                    </Form.Label>
                                                    <Col sm={10}>
                                                        <Form.Control type="email" placeholder=" Machine Environment" readOnly />
                                                    </Col>
                                                </Form.Group>
                                                <Button type="submit" style={{ justifyContent: "center" }} onClick={onSave}>Initialize</Button>
                                            </div>

                                        }
                                    </>
                                    :
                                    <div>None Selected</div>


                    }

                    <br />
                    <br />
                    <br />

                    {/* <Form.File
                    id="custom-file"
                    label="Upload System Config"
                    custom
                /> */}
                </Form.Group>


            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" onClick={onHide}>Cancel</Button>

            </Modal.Footer>
        </Modal>

        <Container >

            <div className="d-flex justify-content-center">
                <h1 className="text-white">Infrastructures</h1>
            </div>

            <div className="pt-3">
                <Row style={{ flex: "1", marginRight: "10px", justifyContent: "space-evenly", }}>
                    {
                        machines.map((mach, idx) => {
                            return <Card className="bg-dark text-white" style={{ width: '20rem' }}>
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
                                                <p>Name: {mach.machine_name} </p>
                                                <p>Status: {mach.status}</p>
                                                <p>Status: {mach.type}</p>
                                            </div>
                                        </Card.Body>
                                    </Col>
                                    <Col className="flex-end" md="auto">
                                        <ListGroup variant="flush" style={{ backgroundColor: '#343a40', }}>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button" onClick={handleClick}>Initialize</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button">Start</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button">Stop</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button">Pause</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button">Reset</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button" onClick={statusMachine}>Status</Button></ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </Card>
                        })
                    }


                </Row>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button onClick={addMachine} >ADD MACHINE</Button>
                </div>
            </div>
        </Container>
    </div>

    );

}

export default Machine