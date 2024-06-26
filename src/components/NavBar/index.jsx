import React from 'react'
import {Link} from "react-router-dom";
import './index.css'
export const NavBar = ({router}) => {
    const GsuRouterName = router ?? false
    return (
        <nav className='gsu-nav'>
            {GsuRouterName
                ?  router.map(route =>  <Link key={route.name} to={route.path}>{route.name}</Link>)
                : 'Your Nav Bar' }
        </nav>
    )
}
