import React from 'react'
import { renderRoutes } from 'react-router-config';
import Header from '@/component/layout/Header.jsx'
function Home(props) {
    const {route , location} = props
    // console.log(props);
    return (
        <div>
            <Header location ={location}/>
            {renderRoutes(route.routes)}
        </div>
    )
}

export default React.memo (Home)
