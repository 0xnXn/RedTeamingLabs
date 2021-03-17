
import React from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import { Component } from "react";

import Switch from "react-switch";
export default class FlippyTemp1 extends Component {
    constructor() {
        super();

        this.state = { isFlipped: false, checked1: false, checked2: false, checked3: false };
        this.machine3 = this.machine3.bind(this);

    }
    machine3(checked3) {
        this.setState({ checked3 });
        this.toggle()

    }
    toggle = () => {
        this.setState({
            isFlipped: !this.state.isFlipped
        });
    }

    render() {
        return (
            <Flippy
                flipOnHover={false} // default false
                isFlipped={this.state.isFlipped}
                flipOnClick={false} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '250px', height: '250px', marginLeft: "20px" }} //  / these are optional style, it is not necessary
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
                        {this.props.frontName}
                        <div style={{ marginTop: "40%", marginLeft: "70%" }}>

                            <Switch
                                onChange={this.machine3}
                                checked={this.state.checked3}
                                id="normal-switch"
                            />
                        </div>
                    </div>
                </FrontSide>
                <BackSide
                    style={{ backgroundColor: '#175852', }}>
                    <div>
                        <Switch
                            onChange={this.machine3}
                            checked={this.state.checked3}
                            id="normal-switch"
                        />
                    </div>


                  
                </BackSide>
            </Flippy>
        )
    }
}