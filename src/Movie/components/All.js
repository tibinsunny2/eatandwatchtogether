import React from 'react'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../requests'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SideNavigation from './SideNavigation';
function All() {
    return (
        <div className='row'>
         <SideNavigation/>
        <div className='col-10'>
        <div className='bg bg-white'>
            <Link className='btn btn-success m-3 ' style={{width:"5%"}} to={'/sidebar'}> BACK</Link>
            <Banner />
            <ListGroup >
                <ListGroupItem><Row title="WathOriginals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} /></ListGroupItem>
                <ListGroupItem> <Row title="WathTrending" fetchUrl={requests.fetchTrending} /></ListGroupItem>
                <ListGroupItem> <Row title="WathToprated" fetchUrl={requests.fetchTopRated} /></ListGroupItem>
                <ListGroupItem> <Row title="Wath Action movies" fetchUrl={requests.fetchActionMovies} /> </ListGroupItem>
                <ListGroupItem> <Row title="Wath Comedy Movies" fetchUrl={requests.fetchComedyMovies} /></ListGroupItem>
                <ListGroupItem><Row title="Wath Horror Movies" fetchUrl={requests.fetchHorrorMovies} /></ListGroupItem>
                <ListGroupItem><Row title="Wath Romance Movies" fetchUrl={requests.fetchRomanceMovies} /></ListGroupItem>
                <ListGroupItem><Row title="Wath Documentaries" fetchUrl={requests.fetchDocumentaries} /></ListGroupItem>

            </ListGroup>
        </div>
        </div>
        </div>
    )
}

export default All







