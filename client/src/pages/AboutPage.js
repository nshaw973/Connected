import React from 'react'
// import '../styles/style.css';
import { Container, Row, Col } from 'react-bootstrap'

export default function AboutPage() {
  return (

    <Container>
        <Row className='textbackground'>
            <Col md={7} >
            <h3 className='aboutus'>About Us</h3>
                <p className='aboutdetails'>
                
                    Currently intergrating with Web Development .
                    

                </p>
                <p className='aboutdetails'>
              
                    Open to collaborating on innovative projects.
                    Feel free to reach out to us on LinkedIn.

                </p>
                <ul className='skillist'>
                    <Row>
                        <h3>Skills</h3>
                        <Col md={7}>
                            <li>HTML5/CSS3</li>
                            <li>JavaScript</li>
                            <li>SQL</li>
                            <li>Redux Js</li>
                            <li>BASH</li>
                            <li>Git/Github</li>
                        </Col>
                        <Col md={5}>
                            <li>MongoDB</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Node</li>

                        
                        </Col>
                    </Row>
                </ul>
            </Col>
            <Col md={5}>
                <div className="webimage"></div>
            </Col>
        </Row>
    </Container>



);
}