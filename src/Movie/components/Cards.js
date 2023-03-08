import React from 'react'

function Cards() {
  return (
    <div>
         <Row>
                <Col>
                  <Container>
                 <center>
                   <Link className='btn btn-success m-3 ' style={{width:"5%"}}  to={`/details/${item.id}`}> BACK</Link>
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
                 </center>
                  </Container>
                </Col>
            </Row>

    </div>
  )
}

export default Cards