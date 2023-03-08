import React from 'react'
import Banner from '../Movie/Banner'
import { Link } from 'react-router-dom'
function Service() {
  return (
     
    <div className='row'>
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

                  <a className='list-group-item py-2 fs-5 me-3'>
                    <i class="bi bi-people-fill me-3"></i>
                    <span className='fs-5'>clients</span>
                  </a>
                  <a className='list-group-item py-2 fs-5 me-3'>
                    <i class="bi bi-wallet me-3"></i>
                    <span className='fs-5'>billing</span>
                  </a>
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
      <div className='col-10'>
      <Link className='btn btn-success m-3 ' style={{width:"5%"}} to={'/sidebar'}> BACK</Link>
      <div className='service'>
      <h1  className="container text-center text-danger">Welcome.....We are always at your service</h1>
      <div className="container text-center">
        <div className="row py-5">
          <div className="col">
            <div className="card" style={{width: "18rem"}}>
              <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Eat and watch together</h5>
                <p className="card-text">we are happy to bind your taste buds with the movie trends..hi hello there you can easily buy food for your belly and movies for your moods</p>
                <a href="#" className="btn btn-primary"> More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: "18rem"}}>
            <img src="https://picsum.photos/201/300" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Food corner</h5>
                <p className="card-text">We are providing the newly uptrending food vibe that suitable for your taste buds its completly done by the famouse restaurents  </p>
                <a href="#" className="btn btn-primary"> More</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: "18rem"}}>
              <img src="https://picsum.photos/201/301" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Trending movies</h5>
                <p className="card-text">we are providing the newly released movies in netflix and other OTT platforms  more efficiently than the otheres</p>
                <a href="#" className="btn btn-primary"> More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
     
    </div>
  )
}

export default Service