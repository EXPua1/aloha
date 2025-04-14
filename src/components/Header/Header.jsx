import React from 'react'
import css from './Header.module.css'
import Container from '../Container/Container'
import Address from '../Address/Address'

const Header = () => {
    return (

        <header className={css.header}>
            <Container>
                <div className={css.header_container}>
                    <a className={css.header_logo} href="/">Hawaii parts</a>
                 <Address/>
                </div>
               
            </Container>
        </header>


    )
}

export default Header