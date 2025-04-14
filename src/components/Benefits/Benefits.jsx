import React from 'react';
import Section from '../Section/Section';
import Container from '../Container/Container';
import css from './Benefits.module.css';
// Импортируем иконки
import { FiZap, FiEye, FiClock, FiShield } from 'react-icons/fi';

const Benefits = () => {
    return (
        <Section id={"benefits"}>
            <Container>
                <h2>Why you should sell your car with us?</h2>
                <ul className={css.list}>
                    <li>
                        <FiZap className={css.icon} /> Fast and easy process
                    </li>
                    <li>
                        <FiEye className={css.icon} /> 100% transparency
                    </li>
                    <li>
                        <FiClock className={css.icon} /> 24/7 support
                    </li>
                    <li>
                        <FiShield className={css.icon} /> Safe and secure
                    </li>
                </ul>
            </Container>
        </Section>
    );
};

export default Benefits;