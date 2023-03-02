import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Carde({ item }) {
    return (
        <div >
            <Row>
                <Col>
                    <Link style={{ textDecoration: 'none' }} to={`./details/${item.id}`}>
                        <Card style={{ width: '18rem', marginTop: '2rem' }}>
                            <Card.Img variant="top" src={item.photograph} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                   <h6> {item.address}</h6>
                                   <h6> {item.cuisine_type}</h6>
                                   <h6> {item.latlng.lat}</h6>
                                   <h6> {item.latlng.lng}</h6>
                                </Card.Text>
                                <Button variant="primary">KNOW MORE</Button>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            </Row>

        </div>
    );
}

export default Carde

