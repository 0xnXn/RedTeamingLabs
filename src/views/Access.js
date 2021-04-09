import React from "react";
import cybersmith from "images/cybersmithsecure.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import axios from "axios";
import server from '../server';
import download from 'js-file-download';
import downloadImage from '../images/downloadUndraw.svg'
import gettingStartedImage from 'images/gettingStarted.svg'
import problemImage from 'images/problem.svg'

export default function Access(props) {
    const getKey = () => {
        const vpnFile = `${server}/users/key`;
        axios.get(vpnFile).then(
            function (resp) {
                download(resp.data, 'rtl-labs.pem');
            }
        );
    }
    return (

        <div className="content" style={{
            display: "flex",


            paddingTop: "75px",

            paddingBottom: "52px",



        }}>

            <Container >
                <Row style={{ marginLeft: "6%", marginRight: "5%" }} >
                    <Col><img src={gettingStartedImage} height="300" width="400"></img>  </Col>
                    <Col style={{ float: "right" }}>


                        <Card
                            bg="#27293d"
                            text="light"
                            style={{ width: '40rem', color: "white" }}
                            className="mb-2"
                        >

                            <Card.Body>
                                <Card.Title style={{ fontWeight: "500", fontSize: "20px" }}>  Getting Started </Card.Title>
                                <ul >
                                    < p>Install software for managing virtual machines, such as VirtualBox, VMWare Workstation, etc.</p>
                                    <br />
                                    <p>Create a Linux virtual machine. You can use a pre-made pentesting OS such as Kali Linux/Parrot Linux, or build your own toolkit from scratch. We do not recommend using Windows as your primary attack environment.
                                                                </p>
                                    <br />
                                    <p>Download your connection pack here.</p>
                                    <br />
                                    <p>Run openvpn nXn.ovpn in terminal.</p>
                                    <br />
                                    <p>Have fun! Find IP addresses of attackable machines on the Active Machines page.  </p>
                                </ul>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
                <br />
                <br />
                <br />
                <Row style={{ marginLeft: "6%", marginRight: "5%" }} >
                    <Col>
                        <Card
                            bg="#27293d"
                            text="light"
                            style={{ width: '40rem' }}
                            className="mb-2"
                        >

                            <Card.Body>
                                <Card.Title style={{ fontWeight: "500", fontSize: "20px" }}>  Having Issues?</Card.Title>
                                <ul style={{ color: "#949ba2" }}>
                                    <p>Restart your VM?</p>
                                    <br />
                                    <p>OpenVPN is up-to-date?</p>
                                    <br />
                                    <p>OpenVPN is running as root?</p>
                                    <br />
                                    <p>Pv6 is available?</p>
                                    <br />
                                    <p>Tried alternate TCP connection?</p>
                                    <br />
                                    <p>Still having issues? Click here to contact support</p>
                                </ul>
                            </Card.Body>

                        </Card>
                    </Col>

                    <Col> <img src={problemImage} height="300" width="400"></img></Col>


                </Row>
                <br />
                <br />
                <br />
                <Row style={{ marginLeft: "6%", marginRight: "5%" }}>
                    <Col>
                        <img height="200" width="300" src={downloadImage} />
                    </Col>
                    <Col>
                        <Card
                            bg="#27293d"
                            text="light"
                            style={{ width: '100%' }}
                            className="mb-2"
                        >

                            <Card.Body style={{ justifyContent: "center", textAlign: "center" }}>

                                <div style={{ fontSize: "20px" }}> Download Your Key File  </div>
                                <Button onClick={getKey} style={{}} >Download</Button>

                            </Card.Body>

                        </Card>
                    </Col>
                </Row>

            </Container>

        </div>
    );
}
