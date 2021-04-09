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
import NET from 'vanta/dist/vanta.rings.min';
import * as THREE from 'three';
import { useHistory } from "react-router-dom";
import { Divider } from '@material-ui/core';
import { Component } from "react";
import server from '../../server';
import { Row, Col } from "reactstrap";
import homeSec from '../../images/security.svg';
import home2 from '../../images/home2.svg';
import home3 from '../../images/home3.svg';

import { VerticalAlignCenter } from "@material-ui/icons";

class Homepage extends Component {

    constructor(props){
        super(props);
        this.state = {
            vantaEffect : '',
            myRef :'',
            history : '',
            gloading : false,
            token_id : '',
            username : '',
            vantaRef : React.createRef(),
email : '',
profPic : '',
googleId : '',
        }
    }

    componentDidMount() {
        this.vantaEffect = NET({
          el: this.state.vantaRef.current,
          THREE: THREE,
          mouseControls: true,
                touchControls: false,
                gyroControls: false,
                scale: 1.00,
                scaleMobile: 1.00,
                points: 5.00,
                maxDistance: 23.00,
                spacing: 15.00,
                backgroundColor: "black",
                color: 0xa0c37d,
        })
      }
      componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy()
      }
    // const [vantaEffect, setVantaEffect] = useState(0);
    // const myRef = useRef(null);
    // const history = useHistory();
    // useEffect(() => {
    //     if (!vantaEffect) {
    //         setVantaEffect(NET({
    //             el: myRef.current,
    //             THREE: THREE,
    //             mouseControls: true,
    //             touchControls: false,
    //             gyroControls: false,
    //             // minHeight: 50.00,
    //             // minWidth: 50.00,
    //             scale: 1.00,
    //             scaleMobile: 1.00,
    //             points: 5.00,
    //             maxDistance: 23.00,
    //             spacing: 15.00,
    //             backgroundColor: "black",
    //             color: 0xa0c37d
    //         }))
    //     }
    //     return () => {
    //         if (vantaEffect) vantaEffect.destroy()
    //     }
    // }, [vantaEffect]);
    
    handleGlogin = (response) => {
        console.log(response)
        this.setState({
            gloading: true,
            token_id: response.tc.id_token
        })
    
        // fetch(`${server}/users/verify`,
        fetch(`${server}/users/Glogin`,
            {
                method: "POST",
                mode: "cors",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    token_id: response.tc.id_token,
                    profileObj: response.profileObj,
                })
            })
            .then(response => response.json())
            .then(data => {
                if (data.verified) {
                    this.setState({
                        username: data.username,
                        email: data.email,
                        profPic: data.profPic,
                        onGlogin: true,
                        googleId: response.googleId
                    });
                    this.props.history.push("/admin/dashboard");
                }
                else {
                    this.setState({
                        userId: null,
                        Gloading: null
                    });
                }
                // if (data.reqProfDetails) {
                //     this.setState({
                //         username: data.username,
                //         email: data.email,
                //         profPic: data.profPic,
                //         onGlogin: true,
                //         redirect: true,
                //         Gloading: null
                //     })
                // } else {
                //     this.setState({
                //         username: data.username,
                //         email: data.email,
                //         profPic: data.profPic,
                //         isLoggedIn: true,
                //         onGlogin: true,
                //         Gloading: null
                //     })
    
                // }
                this.setState({ gloading: false })
            })
            .catch(
                err => { }
            )
    }
    
    responseGoogle = (response) => {
        if (response.error !== '') {
            // this.setState({ googleProfile: response.profileObj });
            // this.setState({ Ziobj: response.tc });
            // history.push("/admin/dashboard");
            this.handleGlogin(response);
        } else {
            this.setState({ error: <p className='red'>Wrong Credentials</p> })
        }
    }
    
    onLogout = () => {
    
        // this.setState({
        //     Gloading: <div className='flex justify-center '>
        //         <Spinner size={50} spinnerColor={"#333"} spinnerWidth={4} visible={true} />
        //     </div>
        // });
    
        fetch(`${server}/logout`, {
            method: 'delete',
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                'Access-Control-Allow-Origin': '*'
            },
        })
            .then(response => {
    
                this.setState({ isLoggedIn: false });
                this.setState({ onGlogin: false });
                this.setState({ userdata: {} });
    
                this.handleClickWithAction('Logged out')
            })
            .catch(err => {
                console.error(err)
            });
    }
    render(){
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
    return (
    
        <div>
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script> */}
            <div className="waveCont" style={{ zIndex: "0", height: '500px' }}>
                <div ref={this.state.vantaRef}>
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
                                <h2 className="p-3" style={{ 
                                    color: "white",
                                 fontWeight: '300',
                                  fontFamily: "lobster",
                            }}> Red Teaming Lab </h2>
                                
                            </div>
                            <div
                                className="f6 dim br1 ph3 pv2 mb2 dib white pa1 ma3 shadow-1"
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
                                            <svg className='' width="18" height="18" className='ml1' xmlns="http://www.w3.org/2000/svg"><g fill="#000" fillRule="evenodd"><path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path><path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path><path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path><path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path><path fill="none" d="M0 0h18v18H0z"></path></g></svg>
                                            <Typography className='pa2' variant="inherit">
                                                <div style={{ color: 'white', }}> &nbsp; Login with Google</div>
                                            </Typography>
                                        </MenuItem>
                                    )}
                                    style={{ color: 'white', backgroundColor: 'white', width: '200px' }}
                                    buttonText="LOGIN WITH GOOGLE"
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
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
                        className="pa1"
                        style={{
                            color: "#153454",
                            fontWeight: "350",
                            textAlign: "justify",
                            justifyContent: "center",
                            padding: "5%"
                        }}
                        data-aos="fade-down"
                    >
                    <Row>
                        <Col>
                        <h2
                            style={{
                                fontWeight: "780",
                                fontSize: "2.6em",
                                fontFamily: "lobster"
                                , color: "white"
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
                                color: "white"
                            }}
    
                        >
                            Red Teaming is a full-scope, multi-layered attack simulation designed to measure how well a company’s people and networks, applications and physical security controls can withstand an attack from a real-life adversary.
                            To put red teaming in layman’s terms, it’s “ethical hacking”—a way for independent security teams to test how well an organization would fare in the face of a real attack.
                            A thorough red team test will expose vulnerabilities and risks regarding:
    <ul><p>Technology — Networks, applications, routers, switches, appliances, etc.</p>
                                <p>People — Staff, independent contractors, departments, business partners, etc.</p>
                                <p>Physical — Offices, warehouses, substations, data centers, buildings, etc.</p>
                            </ul>
          </p>
                        </Col>
                        <Col >
                        <embed style={{verticalAlign: "center"}} src={homeSec} width='400' height='400'></embed>
                        </Col>

                    </Row>

                    <Row>
                        <Col>
                        <embed style={{verticalAlign: "center"}} src={home2} width='400' height='200'></embed>
                        </Col>
                        <Col>
                        <p>
                        The premise of red teaming is comparable to the old sports saying, ‘the best offense is a good defense.’ Red teaming helps a business remain competitive while securing its business interests by leveraging social engineering and physical, application and network penetration testing to find ways to shore up your defenses.
    During a red team engagement, highly trained security consultants enact attack scenarios to reveal potential physical, hardware, software and human vulnerabilities. Red team engagements also identify opportunities for bad actors and malicious insiders to compromise company systems and networks or enable data breaches.
    </p>
                        </Col>
                    </Row>

<Row>
    <Col>
                        <h2
                            style={{
                                paddingTop: '1em',
                                fontWeight: "780",
                                fontSize: "2.6em"
                                ,
                                fontFamily: "lobster",
                                color: "white",
                                // paddingTop: "400px"
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
                                color: "white"
                            }}
    
                        >
                            Red Team Training Course is a course designed to teach participants methods on how to compromise organisations both physically and electronicaly.
    
                            The term “Red Team Testing’ is used to define an attacker whose purpose is to penetrate a company’s security using any means at their disposal. While a typical External Penetration Test would identify and exploit vulnerabilities in external internet systems only, a Red Team Test attacks would range from Electronic, to Physical, to Social.
    
                            During the 3 day course, you will learn:
    <ul>
                                <p>Using Open Source Recon tools</p>
                                <p>Developing Attack Plan</p>
                                <p>Pretext Creation and Methods</p>
                                <p>Physical Entry Methods</p>
                                <p>System Level Attacks</p>
                                <p>Misc.</p>
                            </ul>
    items from a combined 20 years of experience
    On the final day, you will be involved in gaining access using the tools and techniques you've learnt into a simulated organisation..
    
          </p>
          </Col>
          <Col>
          <embed className="pt-5" src={home3} width='400' height='400'></embed>
          </Col>
          </Row>
                    </div>
    
    
                </Container>
    
            </div>
        </div >
    );
                        }
}
// const Homepage = (props) => {
// };
export default Homepage;