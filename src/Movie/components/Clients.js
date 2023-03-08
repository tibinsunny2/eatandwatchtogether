import React from 'react'
import SideNavigation from './SideNavigation'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Clients() {
  return (
    <div className='row'>
        <SideNavigation/>
        <div className='col-10'>
        <Link className='btn btn-success m-3 ' style={{ width: "5%" }} to={'/sidebar'}> BACK</Link>
           <center> <h2 className='text-danger '>Our valuable clients are</h2></center>
        <Table striped bordered hover color='success' size="sm" className='bg-white rounded'>
                        <caption className='table caption-top text-white rounded'><h3>Recent Orders</h3></caption>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Customer</th>
                                <th>Restaurents</th>
                                <th>Movie</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Emily</td>  
                                <td>Lucifer</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Kang Ho Dong Baekjeong</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan={2}>Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
        </div>
    </div>
  )
}

export default Clients