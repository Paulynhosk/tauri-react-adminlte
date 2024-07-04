//import React from "react"
import Navbar from "../components/navigations/Navbar"
import Sidebar from "../components/navigations/Sidebar"
import Footer from "../components/navigations/Footer"
import Header from "../components/navigations/Header"

type Props = {
    children?: string | JSX.Element | JSX.Element[]
}

function Dashboard ({children}: Props) {
    return (
        <div className="wrapper">
            <Navbar/>
            <Sidebar/>
            <div className="content-wrapper">
                <Header/>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard