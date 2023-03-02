import React, {  useState,useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Carde from './Carde'
import { restaurantListReducers } from '../reducers/RestaurentReducers'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../actions/restaurentActions'
function Home() {
    const dispatch = useDispatch()
    const restaurantData = useSelector(state => state.restuarantReducer)
    // going to destructure the incoing data
    const { restaurants } = restaurantData
    // const [hotels, setHotels] = useState([])
    // const fetchData = async () => {
    //     await fetch('/restaurants.json')
    //         .then((result) => result.json())
    //         .then((data) => setHotels(data.restaurants))
    // }
    useEffect(() => {
        dispatch(listRestaurants())
    }, [])
    console.log(restaurants);
    return (
        <div style={{ backgroundColor: 'pink' }}>
            <Row>
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