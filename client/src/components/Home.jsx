import React from 'react'
import Hero from './Hero'
import DreamPlots from './DreamPlots'
import Contact from './Contact'
import OtoB from './OtoB'
import Construction from './Construction'
import LandCard from './LandCard'
import ListForm from './Admin/ListForm'
import Dashboard from './Admin/Dashboard'


const Home = () => {
    return (
        <div>
            <Hero />
            <DreamPlots />
            <Contact />
            <OtoB />
            <Construction />
            <ListForm />
            <Dashboard />
        </div>
    )
}

export default Home
