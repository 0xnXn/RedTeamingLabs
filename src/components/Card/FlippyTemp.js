
import React from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import { Component } from "react";
export default class FlippyTemp extends Component {
  constructor(props){
    super(props);
    this.state={
      isFlipped:false
    }
  }
  toggle = () => {
    this.setState({
      isFlipped: !this.state.isFlipped
    });
  }

  render() {
    return (
      <Flippy
        flipOnHover={true} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: '#343a40',
            color:"white",
            
          }}
        >
          <div style={{
            marginTop:"40%",
           fontWeight:"300",
            fontSize:"30px",
            textAlign:"center"
          }}>
          {this.props.frontName}
          </div>
        </FrontSide>
        <BackSide
          style={{ backgroundColor: '#175852', }}>
          <div style={{ marginTop: "20px", marginLeft: "20%" }}>
            <svg id="Capa_1" enable-background="new 0 0 512 512" height="100" viewBox="0 0 512 512" width="100" xmlns="http://www.w3.org/2000/svg"><g><path d="m446.605 124.392-119.997-119.997c-2.801-2.802-6.624-4.395-10.608-4.395h-210c-24.813 0-45 20.187-45 45v422c0 24.813 20.187 45 45 45h300c24.813 0 45-20.187 45-45v-332c0-4.09-1.717-7.931-4.395-10.608zm-115.605-73.179 68.787 68.787h-53.787c-8.271 0-15-6.729-15-15zm75 430.787h-300c-8.271 0-15-6.729-15-15v-422c0-8.271 6.729-15 15-15h195v75c0 24.813 20.187 45 45 45h75v317c0 8.271-6.729 15-15 15z" /><path d="m346 212h-180c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15z" /><path d="m346 272h-180c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15z" /><path d="m346 332h-180c-8.284 0-15 6.716-15 15s6.716 15 15 15h180c8.284 0 15-6.716 15-15s-6.716-15-15-15z" /><path d="m286 392h-120c-8.284 0-15 6.716-15 15s6.716 15 15 15h120c8.284 0 15-6.716 15-15s-6.716-15-15-15z" /></g></svg>
          </div>
          <div style={{ color: "white",fontSize:"20px",textAlign:"center" }}>Download</div>
        </BackSide>
      </Flippy>
    )
  }
}