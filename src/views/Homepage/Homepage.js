import React, { useState, useEffect, useRef } from "react";
import {
    Container,
    Button
} from "react-bootstrap";
import "./home.css";
import GoogleLogin from 'react-google-login';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { Link } from 'react-router-dom';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import { useHistory } from "react-router-dom";

const Homepage = (props) => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    const history = useHistory();
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                THREE: THREE,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                // minHeight: 50.00,
                // minWidth: 50.00,
                scale: 1.00,
                scaleMobile: 1.00,
                // maxHeight: 300.00,
                // maxWidth: 300.00,
                backgroundColor: 0x2d2d2d,
                color: 0xa0c37d
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);

    const styles = theme => ({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        root: {
            width: '100%',
        },
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginLeft: -12,
            marginRight: 20,
        },
        title: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing.unit * 2,
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing.unit * 3,
                width: 'auto',
            },
        },
        searchIcon: {
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
            width: '100%',
        },

    });

    const responseGoogle = (response) => {
        if (response.error !== '') {
            // this.setState({ googleProfile: response.profileObj });
            // this.setState({ Ziobj: response.Zi });
            history.push("/admin/dashboard");
            // handleGlogin(response);
        } else {
            this.setState({ error: <p className='red'>Wrong Credentials</p> })
        }
    }
    return (

        <div>
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script> */}
            <div className="waveCont" style={{ zIndex: "0", backgroundColor: 'white', height: '500px' }}>
                <div ref={myRef}>
                    <div
                        className="carousel tc"
                        style={{
                            // backgroundImage:
                            // "linear-gradient(to top, rgb(0, 210, 255), rgb(58, 123, 213))",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            // justifyContent: "center",
                            // alignItems: "center",
                            // alignContent: "center", 
                            height: '500px'
                        }}
                    >
                        <div style={{
                            zIndex: "1000",
                            position: 'relative',
                            textAlign: 'left',
                            maxWidth: '1500px',
                            marginLeft: '5%',
                        }}>
                            {/* <Animated animationIn="rubberBand" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                            <h3>
                                <img src={leher} className='leher' />
                            </h3>
                        </Animated> */}
                            <div style={{ color: "white", }}>
                                <h1 style={{ fontWeight: '300' }}> Red Teaming Lab </h1>
                                <h3>  </h3>
                            </div>
                            <div
                                class="f6 dim br1 ph3 pv2 mb2 dib white pa1 ma3 shadow-1"
                                style={{
                                    background: "radial-gradient(circle, rgba(150,59,153,1) 0%, rgba(9,102,158,1) 100%)",
                                    cursor: 'pointer'
                                }}
                            >
                            </div>
                            <div>
                                <GoogleLogin
                                    clientId="580355290705-sqq8ki917vkc8ktddj0icgea3ammg53i.apps.googleusercontent.com"
                                    render={renderProps => (
                                        <MenuItem onClick={renderProps.onClick} disabled={renderProps.disabled} style={{ width: '200px', border: 'inset', borderRadius: '30px' }}>
                                            <svg className='' width="18" height="18" className='ml1' xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path fill="none" d="M0 0h18v18H0z"></path></g></svg>
                                            <Typography className='pa2' variant="inherit">
                                                <div style={{ color: 'white', }}> &nbsp; Login with Google</div>
                                            </Typography>
                                        </MenuItem>
                                    )}
                                    style={{ color: 'white', backgroundColor: 'white', width: '200px' }}
                                    buttonText="LOGIN WITH GOOGLE"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    className='disableshadow'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div
                className="pt1 pb2"
                style={{
                    marginBottom: "0em",
                    background: "",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "center",
                    minHeight: "600px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Container
                    className="mbv"
                    style={{
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <div
                        className="pa3"
                        style={{
                            color: "#153454",
                            fontWeight: "350",
                            textAlign: "justify",
                            justifyContent: "center",
                            padding: "10%"
                        }}
                        data-aos="fade-down"
                    >
                        <h2
                            style={{
                                fontWeight: "780",
                                fontSize: "2.6em"
                            }}
                        >
                            RedTeamingLabs
          </h2>
                        <h4
                            style={{
                                color: "#0fcce7",
                                margin: "0.6em 0"
                            }}
                        >
                        </h4>
                        <p
                            style={{
                                padding: "1em 0 1.5em 0",
                                color: '#122c48',
                                fontWeight: 'normal',
                            }}

                        >
                           Red Teaming is a full-scope, multi-layered attack simulation designed to measure how well a company’s people and networks, applications and physical security controls can withstand an attack from a real-life adversary.
To put red teaming in layman’s terms, it’s “ethical hacking”—a way for independent security teams to test how well an organization would fare in the face of a real attack.
A thorough red team test will expose vulnerabilities and risks regarding:
<ul><li>Technology — Networks, applications, routers, switches, appliances, etc.</li>
<li>People — Staff, independent contractors, departments, business partners, etc.</li>
<li>Physical — Offices, warehouses, substations, data centers, buildings, etc.</li>
</ul>
The premise of red teaming is comparable to the old sports saying, ‘the best offense is a good defense.’ Red teaming helps a business remain competitive while securing its business interests by leveraging social engineering and physical, application and network penetration testing to find ways to shore up your defenses.
During a red team engagement, highly trained security consultants enact attack scenarios to reveal potential physical, hardware, software and human vulnerabilities. Red team engagements also identify opportunities for bad actors and malicious insiders to compromise company systems and networks or enable data breaches.


          </p>
                        <h2
                            style={{
                                paddingTop: '1em',
                                fontWeight: "780",
                                fontSize: "2.6em"
                            }}
                        >
                            RedTeaming Training Course
          </h2>
                        <h4
                            style={{
                                color: "#0fcce7",
                                margin: "0.6em 0"
                            }}
                        >
                        </h4>
                        <p
                            style={{
                                padding: "1em 0 1.5em 0",
                                color: '#122c48',
                                fontWeight: 'normal',
                            }}

                        >
                            Red Team Training Course is a course designed to teach participants methods on how to compromise organisations both physically and electronicaly.

The term “Red Team Testing’ is used to define an attacker whose purpose is to penetrate a company’s security using any means at their disposal. While a typical External Penetration Test would identify and exploit vulnerabilities in external internet systems only, a Red Team Test attacks would range from Electronic, to Physical, to Social.

During the 3 day course, you will learn:
<ul>
<li>Using Open Source Recon tools</li>
<li>Developing Attack Plan</li>
<li>Pretext Creation and Methods</li>
<li>Physical Entry Methods</li>
<li>System Level Attacks</li>
<li>Misc.</li>
</ul> 
items from a combined 20 years of experience
On the final day, you will be involved in gaining access using the tools and techniques you've learnt into a simulated organisation..

          </p>
                    </div>


                </Container>

            </div>
        </div >
    );
};
export default Homepage;
