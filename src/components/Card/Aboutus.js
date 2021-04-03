import React from "react";
import cybersmith from "images/cybersmithsecure.png";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AboutusCarosal from "./AboutusCarosal";
import { useDispatch, useSelector } from 'react-redux'

export default function Aboutus(props) {
    let count = useSelector(state=>state.counter)
    return (

        <div>
            
           {count}

        </div>
    );
}