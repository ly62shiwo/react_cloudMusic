import React from 'react'
import { renderRoutes } from 'react-router-config';
import Header from '@/layout/Header.jsx'
import Footer from '@/layout/Footer.jsx'
import BackTopTo from '@/component/backTop'
import PlayMusic from '@/application/playMusic'

function Home(props) {
    const {route , location} = props
    // console.log(props);
    return (
        <div>
            <Header location ={location}/>
            {renderRoutes(route.routes)}
            <BackTopTo />
            <PlayMusic />
            <Footer />
        </div>
    )
}

export default (React.memo (Home))
