import React from 'react'
import Table from 'react-bootstrap/Table';
function Landing() {
    return (
        <div className='px-3' >
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-3'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>230</h3>
                                <p className='fs-5'>products</p>
                            </div>
                            <i className='bi bi-cart-plus p-3 fs-1'></i>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>2444</h3>
                                <p className='fs-5'>delivery</p>
                            </div>
                            <i className='bi bi-truck p-3 fs-1'></i>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>20%</h3>
                                <p className='fs-5'>increce</p>
                            </div>
                            <i className='bi bi-graph-up-arrow p-3 fs-1'></i>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>2550</h3>
                                <p className='fs-5'>sales</p>
                            </div>
                            <i className='bi bi-currency-dollar p-3 fs-1'></i>
                        </div>
                    </div>

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
        </div>
    )
}

export default Landing