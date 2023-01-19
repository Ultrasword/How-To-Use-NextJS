import Head from 'next/head'
import Image from 'next/image'

import React from 'react';
// reactstrap components
import {Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";

import styles from '../styles/Home.module.css';


export default function Home() {
    return (
    <div className='maindiv'>
        <Head>
            <title>Home Page</title>
            <link rel="icon" href="/favicon.ico" />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
            />
        </Head>

        <div className='submaindiv'>
            <div id="navbar" className={styles.navbar}>
                <h1>Home Page</h1>
                <table>
                    Figure out how to add tables into (for separaing stuff)
                </table>
            </div>
            <div id="content" className='width: 100%'>
                <div id="background">
                    <img className={styles.backimg} src='background.jpg'></img>
                </div>
                <div>
                    <h1>Content</h1>
                    <p>Welcome to the home page! This is a page full of awesome stuff!</p>
                    <div id="p1">
                        <h2>Who Am I?</h2>
                    </div>
                    
                    <div id="p2">
                        <h2>What Do I Do?</h2>
                    </div>

                    <div id="p3">
                        <h2>Projects</h2>
                        <Container>
                            <Row>
                                <Col>
                                    <Card outline style={{width: '18rem'}}>
                                        <img alt="icon 1" src="background.jpg"/>
    <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
        </CardSubtitle>
        <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
            Explore
        </Button>
    </CardBody>
                                    </Card>
                                </Col>
                                <Col>
                                <Card outline style={{width: '18rem'}}>
                                        <img alt="icon 1" src="background.jpg"/>
    <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
        </CardSubtitle>
        <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
            Explore
        </Button>
    </CardBody>
                                    </Card>
                                </Col>
                                <Col>
                                <Card outline style={{width: '18rem'}}>
                                        <img alt="icon 1" src="background.jpg"/>
    <CardBody>
        <CardTitle tag="h5">Card title</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
        </CardSubtitle>
        <CardText>
            Some quick example text to build on the card title and make up the bulk of the card‘s content.
        </CardText>
        <Button>
            Explore
        </Button>
    </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                </div>
            </div>
            <div id="endbar" className={styles.endbar}>

            </div>
        </div>
    </div>
    )
}

