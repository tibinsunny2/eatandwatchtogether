import React, {  useState,useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Carde from './Carde'
import { restaurantListReducers } from '../reducers/RestaurentReducers'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../actions/restaurentActions'
function Home() {
    const dispatch = useDispatch()
    const restaurantData = useSelector(state => state.restuarantReducer)
    const { restaurants } = restaurantData
    useEffect(() => {
        dispatch(listRestaurants())
    }, [])
    console.log(restaurants);
    return (
        <div style={{ backgroundColor: 'pink' }}>
            <Row>
           <div>
           <Link className='btn btn-success m-3 ' style={{width:"5%"}} to={'/sidebar'}> BACK</Link>
           </div>
                {restaurants.map((item) => (
                    <Col sm={12} md={8} lg={6} X1={3}>
                        <Carde item={item} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Home