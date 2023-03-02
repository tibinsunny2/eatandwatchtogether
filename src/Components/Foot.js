import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
function Footer() {
  return (
    <div>
        <Container>
        <Row className='text-center py-1 bg-success'>
          <Col><h5>copyright &copy; SAMPLE PRIVATE LIMITED COMPANY SINCE 1999</h5></Col>
        </Row>
        </Container>
    </div>
  )
}

export default Footer
