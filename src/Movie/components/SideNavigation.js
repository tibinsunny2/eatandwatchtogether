import React from 'react'
import { Link } from 'react-router-dom'
function SideNavigation() {
    return (
        <div className='col-2'>
            <div className='container-fluid bg-secondary min-vh-100' >
                <div className='row'>
                    <div>
                        <div className='bg-white Sidebar p-2 my-2 vh-100'>
                            <div>
                                <i class="bi bi-award-fill fs-1 text-dark me-3"></i>
                                <span className='brand-name fs-4 text-dark'>tibin</span>
                            </div>
                            <hr className='text-dark' />
                            <div className='list-group list-group-flush'>
                                <a className='list-group-item py-2'>
                                    <i className='bi bi-speedometer2 fs-5 me-3'></i>
                                    <span className='fs-5'>dashbord</span>
                                </a>
                                <Link style={{ textDecoration: "none" }} to={'/movie'}>
                                    <a className='list-group-item py-2 fs-5 me-3'>
                                        <i className='bi bi-eye me-3'></i>
                                        <span className='fs-5' >movie</span>
                                    </a>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to={'/food'}>
                                    <a className='list-group-item py-2 fs-5 me-3'>
                                        <i class="bi bi-egg-fried me-3"></i>
                                        <span className='fs-5'>foodCorner</span>
                                    </a></Link>

                                <Link style={{ textDecoration: "none" }} to={'/service'}>
                                    <a className='list-group-item py-2 fs-5 me-3'>
                                        <i class="bi bi-basket-fill me-3"></i>
                                        <span className='fs-5'>service</span>
                                    </a>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to={'/activity'}>
                                    <a className='list-group-item py-2 fs-5 me-3'>
                                        <i class="bi bi-activity me-3"></i>
                                        <span className='fs-5'>activity</span>
                                    </a>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to={'/clients'}>
                                <a className='list-group-item py-2 fs-5 me-3'>
                                    <i class="bi bi-people-fill me-3"></i>
                                    <span className='fs-5'>clients</span>
                                </a>
                                </Link>
                                <Link style={{ textDecoration: "none" }} to={'/billing'}>
                                    <a className='list-group-item py-2 fs-5 me-3'>
                                        <i class="bi bi-wallet me-3"></i>
                                        <span className='fs-5'>billing</span>
                                    </a>
                                </Link>
                                <a className='list-group-item py-2 fs-5 me-3'>
                                    <i class="bi bi-gear-fill me-3"></i>
                                    <span className='fs-5'>settings</span>
                                </a>
                                <Link style={{ textDecoration: "none" }} to={'/'}>
                                    <a className='list-group-item py-2 fs-5 me-3'>
                                        <i class="bi bi-box-arrow-right me-3"></i>
                                        <span className='fs-5'>logout</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideNavigation