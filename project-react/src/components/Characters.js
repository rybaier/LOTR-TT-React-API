import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card,CardBody, CardText, CardTitle } from 'reactstrap'
import Header from './pagecomponents/Header'
import NavigationPanel from './pagecomponents/NavigationPanel'
import RandomSearch from './pagecomponents/RandomSearch'
import InfoDisplay from './pagecomponents/InfoDisplay'

const Characters =( {data} ) => {
    console.log(data)
    return (
        <Container>
            <h1>Characters</h1>
            <Header />
            <Row className="nav-and-display">
                    <NavigationPanel />
                    <RandomSearch />
                   
            </Row>
            <Card className="info-display">
            <CardTitle tag={'h4'}>LOTR Character Information Type</CardTitle>
            <CardBody tag={'h6'}> Desired Informaion  name
                <CardText> information </CardText>
                <CardText> ternary for display wiki link if true, 
                            no display if false</CardText>
            </CardBody>
        </Card>
        </Container>
    )
}
export default Characters