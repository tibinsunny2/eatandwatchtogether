import React from 'react'
import { Link } from 'react-router-dom'
import SideNavigation from './SideNavigation';

function Activity() {
  return (
    <div className='row'>
     <SideNavigation/>
      <div className='col-10'>
        <Link className='btn btn-success m-3 ' style={{ width: "5%" }} to={'/sidebar'}> BACK</Link>
        <div className='service'>
          <h1 className="container text-center text-danger"><b>We are always looking for upward growth</b></h1>
          <div className="container text-center">
            <div className="row py-5">
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Eat and watch together</h5>
                    <p className="card-text">we have two methodes of soureces of income digital OTT platfrom and a industrial best food delivering sysytem , that on your fingertips</p>
                    <a href="#" className="btn btn-primary"> More</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="https://picsum.photos/201/300" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Food corner</h5>
                    <p className="card-text">We are providing the newly uptrending food vibe that suitable for your taste buds its completly done by the famouse restaurents  </p>
                    <a href="#" className="btn btn-primary"> More</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" style={{ width: "18rem" }}>
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

export default Activity