import React from 'react'
import Header from '../common/header/header'
import Footer from '../common/footer/footer'

const Layout = ({ children}) => {
    return (
        <div>
            <Header />
            <div>{ children }</div>
            <Footer/>
        </div>
    )
}
export default Layout