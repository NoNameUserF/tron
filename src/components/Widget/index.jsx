import React from 'react'
import {Routes , Route} from "react-router-dom";

import './index.css'
export const Widget = ({router}) => {
    const GsuRouterWidget = router ?? false
    return (
        <div className ='gsu-widget'>
            {GsuRouterWidget ? <Routes>
                {router.map(route => <Route key={route.name} path={route.path} element={route.component} />)}
            </Routes> : 'Your Widget'}
        </div>

    )
}

