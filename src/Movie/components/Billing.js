import React from 'react'
import { Link } from 'react-router-dom'
import SideNavigation from './SideNavigation'
function Billing() {
    return (
        <div className='row'>
           <SideNavigation/>
            <div className='col-10'>
            <Link className='btn btn-success m-3 ' style={{width:"12%"}} to={'/sidebar'}> BACK</Link>
                <center>
                <div className="card mt-5" style={{ width: "25rem" }}>
                  <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Eat and watch together</h5>
                    <p className="card-text"><form>
                      <label> total amount :1000 $</label><br></br>
                      <label>movie : thor ragnor</label>
                        </form></p>
                    <a href="#" className="btn btn-primary"> Buy</a>
                  </div>
                </div>
                </center>
            </div>
        </div>
    )
}

export default Billing