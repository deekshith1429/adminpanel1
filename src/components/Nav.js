import React from 'react'
import {Link} from 'react-router-dom'

  const Nav=()=> {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          
          <Link className="nav-link " to="/userorders">userorders</Link>
          <Link className="nav-link " to="/productpanel">productpanel</Link>
          <Link className="nav-link " to="/productpanelaxios">productpanelaxios</Link>
           
          </div>
        </div>
      </nav>
    )
}
export default Nav


