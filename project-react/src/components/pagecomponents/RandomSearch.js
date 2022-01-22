import React, {useState, useEffect} from "react";
import { Col, Container } from "reactstrap";

const RandomSearch = () => {
    return(
        //randomize information function attached to onClick
        // can the onclick be nested inside this component or 
        // should this it be a parent function passed to this component as props?
        // should I use this as a place to build and test function then
        // take code out of component and slot it into each individual component 
        // to eliminate a connection branch. Now that I type this this seems 
        // the better course of action. I should get back to coding now 
        // on to the Routes!
        // also instead of creating a function to randomize infromation her, I will do it on each data set display
        // this componenent simply needs to have an onClick function that resets the page 
        <Container>
            <button>
                Randomize Information 
            </button>
        </Container>
    )
}

export default RandomSearch

