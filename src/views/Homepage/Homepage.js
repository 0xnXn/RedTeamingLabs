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
                            Etamax 2020
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
                            ETAMAX is the annual techno-cultural inter college fest
                            of FCRIT. It is an exceptional confluence of exquisite
                            cultural displays with technical innovations and
                            reverberating in an aura filled with ecstasy, euphoria
                            and exhilaration.
                            This year, for ETAMAX 2020 we are all set with yet
                            another ravishing theme – ETAMAX LEHER which is
                            going to take the maximum of every student’s potential
                            under its majestic wave.

          </p>
                        <h2
                            style={{
                                paddingTop: '1em',
                                fontWeight: "780",
                                fontSize: "2.6em"
                            }}
                        >
                            Leher
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
                            While we have all accepted our present inertia, we do
                            long for a wave of freshness and delight and ETAMAX is
                            always there to wash that monotony off of our
                            lives. The theme we present this time is thus, ‘Leher’ - a
                            wave of the most marvellous cultural and artistic
                            pursuits and technical novelties to leave away a breezy
                            aftertaste of euphoria and the beautiful corals of
                            memories, as it washes off the shore.
                            Let your symphonic appreciation and indulgence in art
                            and culture be as mighty as the great wave off
                            Kanagawa as we treat you with a series of events
                            organised just for you.
                            That’s not all, for all of you tech savvy beans these three
                            fabulous days are for you to translate your ideas into
                            ripples of innovation and exercise the entirety of your
                            technical acumen in the sea of events we present.
                            Now who doesn’t love the soothing waves crashing
                            against your feet while they sink into the soft sand.
                            Hence, with ETAMAX 2020, we strive to bring you this
                            exact feeling of calm accompanied with the enthralment
                            of exploring new ideas, widening your horizons and
                            letting your creative juices flow, while you bask in the
                            January sun and enjoy the cool winter breeze.

          </p>
                    </div>


                </Container>

            </div>
        </div >
    );
};
export default Homepage;
