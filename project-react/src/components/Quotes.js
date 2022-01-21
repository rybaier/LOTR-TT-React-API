import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card } from 'reactstrap'
import Header from './pagecomponents/Header'
import NavigationPanel from './pagecomponents/NavigationPanel'
import RandomSearch from './pagecomponents/RandomSearch'
import InfoDisplay from './pagecomponents/InfoDisplay'

const Quotes =() => {
    return (
        <Container>
            <h1>Quotes</h1>
            <Header />
            <Row className="nav-and-display">
                    <NavigationPanel />
                    <RandomSearch />
                    <InfoDisplay />
            </Row>
        </Container>
    )
}
export default Quotes