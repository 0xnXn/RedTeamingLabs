
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import server from '../server';
import FileDownload from 'js-file-download';
import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Card from 'react-bootstrap/Card';
import { Container } from "@material-ui/core";
// import Button from 'react-bootstrap/Button'
import { ListGroup } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import MultiSelect from "react-multi-select-component";
import Spinner from 'react-bootstrap/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import MachineSvg from '../images/machine.svg'
import "./Machine.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import machineImage from '../images/machine.png'
import {
    Button,

    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,

    Input,


} from "reactstrap";
const axios = require('axios');

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
    const [callFunction, setCallFunction] = useState(0)
    const [warning, setWarning] = useState(false)
    const [layout, setLayout] = useState(false)
    const [warningText, setWarningText] = useState("ds ")
    const [showImage, setShowImage] = useState(true)
    const [mainSpinner, setMainSpinner] = useState(false)

    const warningShow = (text, type) => {
        setWarningText(text)
        setCallFunction(type)
        setWarning(true)
    }
    const warningHide = () => {
        setWarningText(" ")
        setWarning(false)
    }
    const layoutHide = () => {
        setLayout(false)
    }
    const layoutShow = () => {
        getLayout();
        setLayout(true)
    }

    const Os = {
        windows: 0,
        linux: 0,
        mac: 0,
        msw2012: 0,
        sles: 0,
        us: 0,
        ms2016: 0,
        ms2019: 0,
        ms2004: 0,
        us20: 0,
        sles15: 0,
        rhel: 0,
        d10: 0,




    }
    const [numberOFOS, setnumberOFOS] = useState(Os)

    const options = [
        { label: "Windows", value: "windows" },
        { label: "Ubuntu Server 16.04 LTS", value: "linux" },
        { label: "Microsoft Windows Server 2012 R2 Base", value: "msw2012" },
        { label: "SUSE Linux Enterprise Server 12 SP5", value: "sles" },
        { label: "Ubuntu Server 18.04 LTS ", value: "us" },
        { label: "Microsoft Windows Server 2016 Base with Containers", value: "ms2016" },
        { label: "Microsoft Windows Server 2004 Core Base ", value: "ms2004" },
        { label: "Microsoft Windows Server 2019 Base with Containers", value: "ms2019" },
        { label: "Ubuntu Server 20.04 LTS ", value: "us20" },
        { label: "SUSE Linux Enterprise Server 15 SP2 ", value: "rhel" },
        { label: "Red Hat Enterprise Linux 8 ", value: "mac" },
        { label: "Debian 10 ", value: "d10" },
        ,
    ];

    const teamMate = { userName: null }

    const [teamMateName, setTeamMateName] = useState(teamMate)
    const [inviteShow, inviteSetShow] = useState(false);


    const inviteHandleClose = () => inviteSetShow(false);
    const inviteHandleShow = () => inviteSetShow(true);

    const [selected, setSelected] = useState([]);

    const [newMachine, setNewMachine] = useState(machine)
    const [infraStatus, setInfraStatus] = useState('');
    const [addMachineHide, setAddMachineHide] = useState(true)
    const [test, setTest] = useState('');

    const handleClick = () => {
        console.log("yes")
        dispatch({ type: "INCR" })
    }

    const onSave = () => {
        setModalShow(false)
        initializeMachine();
        dispatch({ type: "ADD_MAACHINE", payload: newMachine })
        setDefaults()
        setAddMachineHide(false)

    }
    const onHide = () => {
        setModalShow(false)
        setDefaults()

    }
    const onSandboxInitialize = () => {
        console.log("bruh")
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
        setnumberOFOS({ ...numberOFOS, [val]: numberOFOS[val] - 1 })

    }
    const onHandleInvite = (event) => {
        const { name, value } = event.target
        setTeamMateName({ ...teamMate, [name]: value })
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
                setNewMachine({ ...newMachine, machine_name: "CyberSmith Pentesting Environment", status: data.state })
                setInfraStatus(data.state);
            })
    }
    const startMachine = () => {
        console.log("hel")
        setMainSpinner(false)
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
                dispatch({ type: "UPDATE_MACHINE", payload: { status: data.state } })
                // setNewMachine({ ...newMachine, status: data.state })
                setMainSpinner(true);
                setInfraStatus(data.state);
            })
    }
    const stopMachine = () => {
        setMainSpinner(false);
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
                setMainSpinner(true);
                dispatch({ type: "UPDATE_MACHINE", payload: { status: data.state } })
                // setNewMachine({ ...newMachine, status: data.state })
            })
    }
    const destroyMachine = () => {
        setMainSpinner(false)
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
                if (data.state == 'Destroyed') {
                    dispatch({ type: "DELETE_MACHINE" })
                    setInfraStatus(data.state);
                    setMainSpinner(true);
                    setAddMachineHide(false)
                    window.location.reload(false);
                }
            })
    }
    const statusMachine = () => {
        setMainSpinner(false)
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
                setNewMachine({ ...newMachine, status: data.state })
                dispatch({ type: "UPDATE_MACHINE", payload: { status: data.state } })
                console.log(machines);
                setMainSpinner(true)
                setInfraStatus(data.state);
            })
    }
    const getLayout = () => {
        const vpnFile = `${server}/users/layout`;
        axios({
            url: vpnFile,
            method: 'GET',
            responseType: 'blob', // Important
        }).then((response) => {
            console.log(response);
            setTest(response.data);
            setShowImage(false);
            // FileDownload(response.data, 'report.png');
        });
        // axios.get(vpnFile).then(
        //     function (resp) {
        //         console.log(resp)
        //         setTest(resp.data);
        //         download(resp.data, 'asd.png');
        //         // return resp.data;
        //     }
        // );
        // fetch(`${server}/users/layout`,
        //     {
        //         method: "GET",
        //         mode: "cors",
        //         credentials: "include",
        //         headers: {
        //             "Content-Type": "application/json; charset=utf-8",
        //             'Access-Control-Allow-Origin': '*'
        //         }
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         setTest(data);
        //     })
    }
    const getVPN = () => {
        setMainSpinner(false)
        const vpnFile = `${server}/users/vpn`;
        axios.get(vpnFile).then(
            function (resp) {
                console.log(resp)
                setMainSpinner(true)
                if (resp.data.state != 'Error') {
                    FileDownload(resp.data, 'connect.ovpn');
                } else {
                    dispatch({ type: "SET_MACHINE", payload: { ...newMachine, machine_name: "CyberSmith Pentesting Environment", status: resp.data.state } })
                }
            }
        );
    }

    const warningYes = () => {
        console.log(callFunction)
        switch (callFunction) {
            case 1:
                startMachine();
                break;
            case 2: stopMachine();
                break;

            case 3: destroyMachine();
                break;


            default: console.log("sc not working")

        }
        setWarningText(" ")
        setWarning(false)
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
                if (data.state != 'Terminated') {
                    setAddMachineHide(false)
                    setMainSpinner(true)
                    dispatch({ type: "SET_MACHINE", payload: { ...newMachine, machine_name: "CyberSmith Pentesting Environment", status: data.state } })
                } else {
                    setAddMachineHide(true)
                    setMainSpinner(true)
                }
                // }
                // setInfraStatus(data.state);
            })
    }, [])


    console.log(numberOFOS)
    console.log(teamMateName)

    return (<div style={{
        display: "flex",


        paddingTop: "50px",
        color: "black !important",

        paddingBottom: "200px",


    }
        //     render() {
        //     }
    }>
        <Modal

            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
         
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
                                            <div style = {{ color: "black !important"}} >
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
                                            <div >
                                                <IconButton type={selectedObj.value} onClick={() => Incr(selectedObj.value)}>
                                                    <AddCircleIcon />
                                                </IconButton>

                                                {selectedObj.label}
                                                <IconButton aria-label="delete" type={selectedObj.value} onClick={() => Decr(selectedObj.value)} >
                                                    <RemoveCircleOutlineIcon />
                                                </IconButton>
                                                {numberOFOS[selectedObj.value]}

                                            </div>


                                        );


                                    })

                                    }
                                    <Button type="submit" style={{ justifyContent: "center" }} onClick={onSandboxInitialize}>Initialize</Button>



                                </div>
                                :
                                (newMachine.type === "CyberSmith Pentesting Environment") ?
                                    <>
                                        {/* <Form.Control name="cyberSmithMachineType" as="select" custom
                                            value={newMachine.cyberSmithMachineType}
                                            onChange={onHandleChange}>
                                            <option>Please Select</option>
                                            <option>Windows Pentesting</option>
                                            <option>Linux Pentesting</option>
                                            <option>Web-Application Pentesting</option>
                                        </Form.Control>
                                        <br />
                                        <br /> */}
                                        {/* {(newMachine.cyberSmithMachineType === "Please Select" || newMachine.cyberSmithMachineType === null) ?
                                            <div>None Selected</div>
                                            : */}
                                        <div>
                                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                                <Form.Label column sm={2}>
                                                    Machine Name
                                                    </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control type="email" placeholder="CyberSmith RTL Lab " readOnly />
                                                </Col>
                                            </Form.Group>

                                            <Form.Group as={Row} controlId="formHorizontalEmail" >
                                                <Form.Label column sm={2}>
                                                    Machine Type
                                                    </Form.Label>
                                                <Col sm={10}>
                                                    <Form.Control type="email" placeholder="Multi Layout Architecture " readOnly />
                                                </Col>
                                            </Form.Group>

                                            <Button type="submit" style={{ justifyContent: "center" }} onClick={onSave}>Initialize</Button>
                                        </div>

                                        {/* } */}
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
            <Modal.Footer style={{ marginLeft: "85%", marginBottom: "50px" }}>
                <Button type="submit" onClick={onHide}>Cancel</Button>

            </Modal.Footer>
        </Modal>

        <Container >

            <div className="d-flex justify-content-center">
                <h1 className="text-white" style={{ backgroundColor: "black" }}></h1>
            </div>
            {(addMachineHide) === true ?
                <div style={{}} >
                    <div style={{
                        width: "300px", height: "300px", display: "block",
                        margin: "auto"
                    }}>

                        <svg id="aa03ddf9-f8f2-4819-a4ce-be9b0a220741" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="300px" height="300px" viewBox="0 300 1200 300"><title>server down</title><circle cx="292.60911" cy="213" r="213" fill="#f2f2f2" /><path d="M31.39089,151.64237c0,77.49789,48.6181,140.20819,108.70073,140.20819" transform="translate(-31.39089 -100.5)" fill="#2f2e41" /><path d="M140.09162,291.85056c0-78.36865,54.255-141.78356,121.30372-141.78356" transform="translate(-31.39089 -100.5)" fill="#63ff85" /><path d="M70.77521,158.66768c0,73.61476,31.00285,133.18288,69.31641,133.18288" transform="translate(-31.39089 -100.5)" fill="#63ff85" /><path d="M140.09162,291.85056c0-100.13772,62.7103-181.16788,140.20819-181.16788" transform="translate(-31.39089 -100.5)" fill="#2f2e41" /><path d="M117.22379,292.83905s15.41555-.47479,20.06141-3.783,23.713-7.2585,24.86553-1.95278,23.16671,26.38821,5.76263,26.5286-40.43935-2.711-45.07627-5.53549S117.22379,292.83905,117.22379,292.83905Z" transform="translate(-31.39089 -100.5)" fill="#a8a8a8" /><path d="M168.224,311.78489c-17.40408.14042-40.43933-2.71094-45.07626-5.53548-3.53126-2.151-4.93843-9.86945-5.40926-13.43043-.32607.014-.51463.02-.51463.02s.97638,12.43276,5.61331,15.2573,27.67217,5.67589,45.07626,5.53547c5.02386-.04052,6.7592-1.82793,6.66391-4.47526C173.87935,310.756,171.96329,311.75474,168.224,311.78489Z" transform="translate(-31.39089 -100.5)" opacity="0.2" /><ellipse cx="198.60911" cy="424.5" rx="187" ry="25.43993" fill="#3f3d56" /><ellipse cx="198.60911" cy="424.5" rx="157" ry="21.35866" opacity="0.1" /><ellipse cx="836.60911" cy="660.5" rx="283" ry="38.5" fill="#3f3d56" /><ellipse cx="310.60911" cy="645.5" rx="170" ry="23.12721" fill="#3f3d56" /><path d="M494,726.5c90,23,263-30,282-90" transform="translate(-31.39089 -100.5)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="2" /><path d="M341,359.5s130-36,138,80-107,149-17,172" transform="translate(-31.39089 -100.5)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="2" /><path d="M215.40233,637.78332s39.0723-10.82,41.47675,24.04449-32.15951,44.78287-5.10946,51.69566" transform="translate(-31.39089 -100.5)" fill="none" stroke="#2f2e41" stroke-miterlimit="10" stroke-width="2" /><path d="M810.09554,663.73988,802.218,714.03505s-38.78182,20.60284-11.51335,21.20881,155.73324,0,155.73324,0,24.84461,0-14.54318-21.81478l-7.87756-52.719Z" transform="translate(-31.39089 -100.5)" fill="#2f2e41" /><path d="M785.21906,734.69812c6.193-5.51039,16.9989-11.252,16.9989-11.252l7.87756-50.2952,113.9216.10717,7.87756,49.582c9.185,5.08711,14.8749,8.987,18.20362,11.97818,5.05882-1.15422,10.58716-5.44353-18.20362-21.38921l-7.87756-52.719-113.9216,3.02983L802.218,714.03506S769.62985,731.34968,785.21906,734.69812Z" transform="translate(-31.39089 -100.5)" opacity="0.1" /><rect x="578.43291" y="212.68859" width="513.25314" height="357.51989" rx="18.04568" fill="#2f2e41" /><rect x="595.70294" y="231.77652" width="478.71308" height="267.83694" fill="#3f3d56" /><circle cx="835.05948" cy="223.29299" r="3.02983" fill="#f2f2f2" /><path d="M1123.07694,621.32226V652.6628a18.04341,18.04341,0,0,1-18.04568,18.04568H627.86949A18.04341,18.04341,0,0,1,609.8238,652.6628V621.32226Z" transform="translate(-31.39089 -100.5)" fill="#2f2e41" /><polygon points="968.978 667.466 968.978 673.526 642.968 673.526 642.968 668.678 643.417 667.466 651.452 645.651 962.312 645.651 968.978 667.466" fill="#2f2e41" /><path d="M1125.828,762.03359c-.59383,2.539-2.83591,5.21743-7.90178,7.75032-18.179,9.08949-55.1429-2.42386-55.1429-2.42386s-28.4804-4.84773-28.4804-17.573a22.72457,22.72457,0,0,1,2.49658-1.48459c7.64294-4.04351,32.98449-14.02122,77.9177.42248a18.73921,18.73921,0,0,1,8.54106,5.59715C1125.07908,756.45353,1126.50669,759.15715,1125.828,762.03359Z" transform="translate(-31.39089 -100.5)" fill="#2f2e41" /><path d="M1125.828,762.03359c-22.251,8.526-42.0843,9.1622-62.43871-4.975-10.26507-7.12617-19.59089-8.88955-26.58979-8.75618,7.64294-4.04351,32.98449-14.02122,77.9177.42248a18.73921,18.73921,0,0,1,8.54106,5.59715C1125.07908,756.45353,1126.50669,759.15715,1125.828,762.03359Z" transform="translate(-31.39089 -100.5)" opacity="0.1" /><ellipse cx="1066.53846" cy="654.13477" rx="7.87756" ry="2.42386" fill="#f2f2f2" /><circle cx="835.05948" cy="545.66686" r="11.51335" fill="#f2f2f2" /><polygon points="968.978 667.466 968.978 673.526 642.968 673.526 642.968 668.678 643.417 667.466 968.978 667.466" opacity="0.1" /><rect x="108.60911" y="159" width="208" height="242" fill="#2f2e41" /><rect x="87.60911" y="135" width="250" height="86" fill="#3f3d56" /><rect x="87.60911" y="237" width="250" height="86" fill="#3f3d56" /><rect x="87.60911" y="339" width="250" height="86" fill="#3f3d56" /><rect x="271.60911" y="150" width="16" height="16" fill="#63ff85" opacity="0.4" /><rect x="294.60911" y="150" width="16" height="16" fill="#63ff85" opacity="0.8" /><rect x="317.60911" y="150" width="16" height="16" fill="#63ff85" /><rect x="271.60911" y="251" width="16" height="16" fill="#63ff85" opacity="0.4" /><rect x="294.60911" y="251" width="16" height="16" fill="#63ff85" opacity="0.8" /><rect x="317.60911" y="251" width="16" height="16" fill="#63ff85" /><rect x="271.60911" y="352" width="16" height="16" fill="#63ff85" opacity="0.4" /><rect x="294.60911" y="352" width="16" height="16" fill="#63ff85" opacity="0.8" /><rect x="317.60911" y="352" width="16" height="16" fill="#63ff85" /><circle cx="316.60911" cy="538" r="79" fill="#2f2e41" /><rect x="280.60911" y="600" width="24" height="43" fill="#2f2e41" /><rect x="328.60911" y="600" width="24" height="43" fill="#2f2e41" /><ellipse cx="300.60911" cy="643.5" rx="20" ry="7.5" fill="#2f2e41" /><ellipse cx="348.60911" cy="642.5" rx="20" ry="7.5" fill="#2f2e41" /><circle cx="318.60911" cy="518" r="27" fill="#fff" /><circle cx="318.60911" cy="518" r="9" fill="#3f3d56" /><path d="M271.36733,565.03228c-6.37889-28.56758,14.01185-57.43392,45.544-64.47477s62.2651,10.41,68.644,38.9776-14.51861,39.10379-46.05075,46.14464S277.74622,593.59986,271.36733,565.03228Z" transform="translate(-31.39089 -100.5)" fill="#63ff85" /><ellipse cx="417.21511" cy="611.34365" rx="39.5" ry="12.40027" transform="translate(-238.28665 112.98044) rotate(-23.17116)" fill="#2f2e41" /><ellipse cx="269.21511" cy="664.34365" rx="39.5" ry="12.40027" transform="translate(-271.07969 59.02084) rotate(-23.17116)" fill="#2f2e41" /><path d="M394,661.5c0,7.732-19.90861,23-42,23s-43-14.268-43-22,20.90861-6,43-6S394,653.768,394,661.5Z" transform="translate(-31.39089 -100.5)" fill="#fff" /></svg>

                    </div>
                    <h1 style={{ color: "white", textAlign: "center" }}>Create an Infrastructure </h1>

                    <div style={{ color: "white", float: "right  " }}>

                        <IconButton onClick={addMachine}>

                            <AddCircleIcon style={{ fill: "#00acc1", height: "50px", width: "50px" }} />
                        </IconButton>


                    </div>
                </div>


                :

                <div className="pt-3">

                    <Row style={{ flex: "1", marginRight: "10px", justifyContent: "space-evenly", }}>
                        {(mainSpinner) ? <>
                            {
                                machines.map((mach, idx) => {
                                    return <Card className="text-white" style={{ width: '25rem',backgroundColor:"#27293d" }}>
                                        <Row className="justify-content-md-center">
                                            <Col className="flex-start" >
                                                <Card.Body style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    // height: '80%',
                                                }}>
                                                    <div  >
                                                        <div>

                                                            <img height="200 " src={machineImage} />
                                                        </div>







                                                        <p>Name: {mach.machine_name} </p>
                                                        <p>Status: {mach.status}</p>
                                                        {/* <p>Status: {mach.type}</p> */}
                                                    </div>
                                                </Card.Body>
                                            </Col>
                                            <Col className="flex-end" md="auto">
                                                <ListGroup variant="flush" style={{ backgroundColor: '	#C0C0C0', }}>
                                                    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css" />

                                                    {/* <ListGroup.Item><Button className="p-0" variant="outlined-button" onClick={handleClick}>Initialize</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button">Start</Button></ListGroup.Item> 
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button">Stop</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button">Pause</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button">Reset</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button" onClick={statusMachine}>Status</Button></ListGroup.Item> */}
                                                    {/* <ListGroup.Item><Button onClick={initializeMachine} className="p-0" variant="outlined-button">Initialize</Button></ListGroup.Item> */}
                                                    <ListGroup.Item style={{

                                                        backgroundColor: "#007bff",
                                                        color: "white",
                                                        height: "50px",
                                                        paddingTop: "10px",
                                                        width: "100px",
                                                        textAlign: "center"
                                                    }} ><div style={{ paddingTop: "10%" }} onClick={() => warningShow("Start Machine", 1)}  >Start</div></ListGroup.Item>
                                                    <ListGroup.Item style={{
                                                        backgroundColor: "#007bff",
                                                        color: "white",
                                                        height: "50px",
                                                        paddingTop: "10px",
                                                        width: "100px",
                                                        textAlign: "center"
                                                    }} ><div style={{ paddingTop: "10%" }} onClick={() => warningShow("Stop Machine", 2)} className="card__button" variant="outlined-button">Stop</div></ListGroup.Item>
                                                    <ListGroup.Item style={{
                                                        backgroundColor: "#007bff",
                                                        color: "white",
                                                        height: "50px",
                                                        paddingTop: "10px",
                                                        width: "100px",
                                                        textAlign: "center"
                                                    }} ><div style={{ paddingTop: "10%" }} onClick={getVPN} variant="outlined-button" className="card__button">VPN</div></ListGroup.Item>
                                                    <ListGroup.Item style={{
                                                        backgroundColor: "#007bff",
                                                        color: "white",
                                                        height: "50px",
                                                        paddingTop: "10px",
                                                        width: "100px",
                                                        textAlign: "center"
                                                    }} ><div style={{ paddingTop: "10%" }} onClick={() => warningShow("Destroy Machnine", 3)} className="card__button" variant="outlined-button">Destroy</div></ListGroup.Item>
                                                    <ListGroup.Item style={{
                                                        backgroundColor: "#007bff",
                                                        color: "white",
                                                        height: "50px",
                                                        paddingTop: "10px",
                                                        width: "100px",
                                                        textAlign: "center"
                                                    }} ><div style={{ paddingTop: "10%" }} onClick={statusMachine} className="card__button" variant="outlined-button">Status</div></ListGroup.Item>
                                                    <ListGroup.Item style={{
                                                        backgroundColor: "#007bff",
                                                        color: "white",
                                                        height: "50px",
                                                        paddingTop: "10px",
                                                        width: "100px",
                                                        textAlign: "center"
                                                    }} ><div style={{ paddingTop: "10%" }} onClick={layoutShow} className="card__button" variant="outlined-button">Get Details</div></ListGroup.Item>
                                                </ListGroup>
                                            </Col>
                                        </Row>
                                    </Card>
                                })
                            }
                        </>

                            : <div>
                                <Card className=" text-white" style={{ width: '30rem' ,backgroundColor:"#27293d"}}>
                                    <Row className="justify-content-md-center">
                                        <Col className="flex-start" >
                                            <Card.Body style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                // height: '80%',
                                            }}>
                                                <div  >

                                                    <svg style={{ width: "150px", marginLeft: "30px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" /></svg>

                                                    <Spinner animation="border" role="status" style={{ marginTop: "20%", marginLeft: "45%" }}>
                                                        <span className="sr-only">Loading...</span>
                                                    </Spinner>

                                                </div>
                                            </Card.Body>
                                        </Col>
                                        <Col className="flex-end" md="auto">
                                            <ListGroup >


                                                {/* <ListGroup.Item><Button className="p-0" variant="outlined-button" onClick={handleClick}>Initialize</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button">Start</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button">Stop</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button">Pause</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button">Reset</Button></ListGroup.Item>
                                            <ListGroup.Item><Button className="p-0" variant="outlined-button" onClick={statusMachine}>Status</Button></ListGroup.Item> */}
                                                {/* <ListGroup.Item><Button onClick={initializeMachine} className="p-0" variant="outlined-button">Initialize</Button></ListGroup.Item> */}
                                                <ListGroup.Item style={{

backgroundColor: "#007bff",
color: "white",
                                                    height: "50px",
                                                    paddingTop: "10px",
                                                    width: "100px",
                                                    textAlign: "center"
                                                }} ><div style={{ paddingTop: "10%" }} onClick={() => warningShow("Start Machine", 1)}  >Start</div></ListGroup.Item>
                                                <ListGroup.Item style={{
                                                     backgroundColor: "#007bff",
                                                     color: "white",
                                                    height: "50px",
                                                    paddingTop: "10px",
                                                    width: "100px",
                                                    textAlign: "center"
                                                }} ><div style={{ paddingTop: "10%" }} onClick={() => warningShow("Stop Machine", 2)} className="card__button" variant="outlined-button">Stop</div></ListGroup.Item>
                                                <ListGroup.Item style={{
                                                    backgroundColor: "#007bff",
                                                    color: "white",
                                                    height: "50px",
                                                    paddingTop: "10px",
                                                    width: "100px",
                                                    textAlign: "center"
                                                }} ><div style={{ paddingTop: "10%" }} onClick={getVPN} variant="outlined-button" className="card__button">VPN</div></ListGroup.Item>
                                                <ListGroup.Item style={{
                                                    backgroundColor: "#007bff",
                                                    color: "white",
                                                    height: "50px",
                                                    paddingTop: "10px",
                                                    width: "100px",
                                                    textAlign: "center"
                                                }} ><div style={{ paddingTop: "10%" }} onClick={() => warningShow("Destroy Machnine", 3)} className="card__button" variant="outlined-button">Destroy</div></ListGroup.Item>
                                                <ListGroup.Item style={{
                                                     backgroundColor: "#007bff",
                                                     color: "white",
                                                    height: "50px",
                                                    paddingTop: "10px",
                                                    width: "100px",
                                                    textAlign: "center"
                                                }} ><div style={{ paddingTop: "10%" }} onClick={statusMachine} className="card__button" variant="outlined-button">Status</div></ListGroup.Item>
                                                <ListGroup.Item style={{
                                                     backgroundColor: "#007bff",
                                                     color: "white",
                                                    height: "50px",
                                                    paddingTop: "10px",
                                                    width: "100px",
                                                    textAlign: "center"
                                                }} ><div style={{ paddingTop: "10%" }} onClick={layoutShow} className="card__button" variant="outlined-button">Get Details</div></ListGroup.Item>
                                            </ListGroup>
                                        </Col>
                                    </Row>
                                </Card>

                            </div>
                        }

                    </Row>
                </div>
            }




            <Modal show={inviteShow} onHide={inviteHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={5}>
                        &nbsp;&nbsp;&nbsp;TeamMate Name
                                                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control name="userName" placeholder=" Name " onChange={onHandleInvite} />
                    </Col>
                </Form.Group>
                <Modal.Footer>
                    <Button variant="secondary" onClick={inviteHandleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={inviteHandleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>




            <Modal show={warning} onHide={warningHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure  you want to {warningText} </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={warningHide}>
                        No
          </Button>
                    <Button variant="primary" onClick={warningYes}>
                        Yes
          </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={layout} onHide={layoutHide} size="lg">
                {/* <Modal.Header closeButton>
                    <Modal.Title>Layout Architecture </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <h2>Layout Architecture</h2>
                    <div>
                        {
                            (showImage) ?
                                // <div>
                                <>
                                    <Spinner animation="border" role="status"
                                    // style={{ marginTop: "20%", marginLeft: "45%" }}
                                    >
                                        <span className="sr-only">Loading...</span>
                                    </Spinner>
                                </> :
                                <>
                                    {(test) != '' ?
                                        <embed width="780" height="600" src={URL.createObjectURL(test)} ></embed>
                                        : <></>
                                    }
                                </>

                        }
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={layoutHide}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>


        </Container>
    </div >

    );

}

export default Machine