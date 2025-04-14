import React from 'react'
import Section from '../Section/Section'
import Container from '../Container/Container'
import css from './Benefits.module.css'

const Benefits = () => {
    return (
        <Section id={"benefits"}>
            <Container>
                <h2>Why you should sell your car with us?</h2>
                <ul className={css.list}>
                    <li>Fast and easy process</li>
                    <li>100% transparency</li>
                    <li>24/7 support</li>
                    <li>Safe and secure</li>
                </ul>
            </Container>
        </Section>



    )
}

export default Benefits