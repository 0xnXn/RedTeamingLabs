import React from "react";
import cybersmith from "images/cybersmithsecure.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import axios from "axios";
import server from '../../server';
import download from 'js-file-download';

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

        <div style={{
            display: "flex",
            borderRadius: "25px",
            border: "2px solid white",

            paddingTop: "50px",

            paddingBottom: "50px",
            outline: "10px",
            borderBlockColor: "yellowgreen"


        }}>

            <Container >
                <Row style={{ marginLeft: "5%", marginRight: "5%" }} >
                    <CardDeck>

                        <Card
                            bg="dark"
                            text="light"
                            style={{ width: '40rem' }}
                            className="mb-2"
                        >

                            <Card.Body>
                                <Card.Title>  Getting Started </Card.Title>
                                <ul style={{ color: "#949ba2" }}>
                                    <li>Install software for managing virtual machines, such as VirtualBox, VMWare Workstation, etc.</li>
                                    <li>Create a Linux virtual machine. You can use a pre-made pentesting OS such as Kali Linux/Parrot Linux, or build your own toolkit from scratch. We do not recommend using Windows as your primary attack environment.
                                                                </li>
                                    <li>Download your connection pack here.</li>
                                    <li>Run openvpn nXn.ovpn in terminal.</li>
                                    <li>Have fun! Find IP addresses of attackable machines on the Active Machines page.  </li>
                                </ul>
                            </Card.Body>

                        </Card>
                        <Card
                            bg="dark"
                            text="light"
                            style={{ width: '40rem' }}
                            className="mb-2"
                        >

                            <Card.Body>
                                <Card.Title>  Having Issues?</Card.Title>
                                <ul style={{ color: "#949ba2" }}>
                                    <li>Restart your VM?</li>
                                    <li>OpenVPN is up-to-date?</li>
                                    <li>OpenVPN is running as root?</li>
                                    <li>Pv6 is available?</li>
                                    <li>Tried alternate TCP connection?</li>
                                    <li>Still having issues? Click here to contact support</li>
                                </ul>
                            </Card.Body>

                        </Card>

                    </CardDeck>
                </Row>
                <Row style={{ marginLeft: "5%", marginRight: "5%" }}>
                    <Card
                        bg="dark"
                        text="light"
                        style={{ width: '100%' }}
                        className="mb-2"
                    >

                        <Card.Body>

                            <div style={{ fontSize: "20px" }}> Download Your Key File
                       <Button onClick={getKey} style={{ float: "right" }} >Download</Button>
                            </div>
                        </Card.Body>

                    </Card></Row>

            </Container>

        </div>
    );
}
