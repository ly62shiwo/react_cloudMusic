import React from 'react'
import { renderRoutes } from 'react-router-config';
import Header from '@/layout/Header.jsx'
import Footer from '@/layout/Footer.jsx'

function Home(props) {
    const {route , location} = props
    // console.log(props);
    return (
        <div>
            <Header location ={location}/>
            {renderRoutes(route.routes)}
            <Footer />
        </div>
    )
}

export default React.memo (Home)
