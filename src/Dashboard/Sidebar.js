import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Sidebar.css'
import { Row, Col } from 'react-bootstrap'
import { Link, Route } from 'react-router-dom'
import Landing from './Landing'
import Banner from '../Movie/Banner'
import SideNavigation from '../Movie/components/SideNavigation'
function Sidebar() {

    return (

        <Row>
            <Col>
                <div className='container-fluid bg-secondary min-vh-100' >
                    <div className='row'>
                        <SideNavigation/>
                        <div className='col-10' >
                            <Landing />
                            <div>
                                <h3 className='text-white'>WATCH TRENDING MOVIES</h3>
                                <Banner />
                            </div>
                        </div>
                    </div>

                </div>
            </Col>
        </Row>
    )
}


export default Sidebar