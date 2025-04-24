import React from 'react'
import Section from '../Section/Section'
import css from './Hero.module.css'
import Container from '../Container/Container'
import Form from '../Form/Form'

const Hero = () => {
    return (

        <Section id={"hero"} className={css.section} >
            <Container className={css.container}>
                <div className={css.container}>
                    <h2 className={css.title}>
                        Are you looking to sell your car quickly and get the best value in Hawaii? Look no further! At <span className={css.accent}>Hawaii.Parts</span>, we make selling your car simple and stress-free.
                    </h2>
                </div>
                <Form/>
            </Container>

        </Section>


    )
}

export default Hero