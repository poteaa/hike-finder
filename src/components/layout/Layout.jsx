import { createContext, useState } from "react"
import { Outlet, Link, useLocation } from "react-router-dom"
import InfoCard from "../InfoCard/InfoCard"
import Search from "../Search/Search"

import Header from './Header/Header'
import Footer from './Footer/Footer'

import './Layout.css'

const SearchContext = createContext()

export default function Layout() {
    const [search, setSearch] = useState()
    console.log('rendering layout...')
    let location = useLocation()
    console.log('location.pathname: ', location.pathname)

    return (
        <SearchContext.Provider value={{search}}>
            <Header />
            <main>
                <section className="hero">
                    <div className="hero__cover">
                        <h1 className="title container">
                            Find Your Next <span className="title--accent">Adventure</span>
                        </h1>
                    </div>
                    <div className="search-container container">
                        {location.pathname === '/' && <Search searchCb={setSearch} />}
                    </div>
                </section>
                <Outlet />
                <section className="more-info container">
                    <InfoCard
                        iconSrc="/src/assets/bell.png"
                        title="Sign up for Notifications">
                        <Link to="/signup">Sign up</Link> to get conditions alerts, information on pop-up events and interesting stories.
                    </InfoCard>
                    <InfoCard
                        iconSrc="/src/assets/location.png"
                        title="Get the HikeFinder App">
                        <Link to="/">Download the app</Link> to get the most out of every minute outdoors with offline maps and more!
                    </InfoCard>
                    <InfoCard
                        iconSrc="/src/assets/share.png"
                        title="Share Trails">
                        <Link to="/">Share your hiking adventures</Link> with the community and keep a record of your travels.
                    </InfoCard>
                </section>
            </main>
            <Footer />
        </SearchContext.Provider>
    )
}

export { SearchContext }