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
                    <h2 className={css.title}>A quick solution to your car disposal problem</h2>
                </div>
                <Form/>
            </Container>

        </Section>


    )
}

export default Hero