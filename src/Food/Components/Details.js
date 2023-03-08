import React, { useEffect, useState } from 'react'
import { Row, Col, Image, ListGroup, ListGroupItem } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import OperatingHours from './OperatingHours'
import Reviews from './Reviews'
import { useSelector } from 'react-redux'
function Details() {
  const params = useParams()
  const restaurantData = useSelector(state => state.restuarantReducer)
  const { restaurants } = restaurantData

  const details = restaurants.find((i) => i.id == params.id)
  return (
    <>
      {
        details ? (
          <>
            <Row className="my-2">
              <Col md={4}>
              <Link className='btn btn-success m-3 ' style={{width:"12%"}} to={'/sidebar'}> BACK</Link>
                <Image className='img' src={details.photograph} alt={details.name} fluid />
              </Col>
              <Col md={4} style={{ marginTop: '10%' }}>
                <ListGroup>
                  <ListGroup.Item>
                    <h2>{details.name}</h2>
                  </ListGroup.Item>
                  <ListGroupItem>
                    <h5>neighborhood:{details.neighborhood}</h5>
                    <h5>address:{details.address}</h5>
                    <h5>Lat:{details.latlng.lat}</h5>
                    <h5>lng: {details.latlng.lng}</h5>


                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col style={{ marginTop: '10%' }}>
                <ListGroup>
                  <ListGroupItem>
                    <Row>
                      <Col ><OperatingHours op={details.operating_hours} /></Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
            <ListGroup>
              <ListGroupItem>
                {details.reviews.map((items) => (
                  <Row>
                    <Col>
                      <Reviews items={items} />
                    </Col>
                  </Row>
                ))}
              </ListGroupItem>
            </ListGroup>
          </>
        ) : 'no values'
      }
    </>
  )
}
export default Details
// ,,latlng