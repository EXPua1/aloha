import React from 'react';
import Section from '../Section/Section';
import Container from '../Container/Container';
import css from './Benefits.module.css';
import { FiZap, FiEye, FiClock, FiShield } from 'react-icons/fi';

const Benefits = () => {
    return (
        <Section id="benefits" className={css.section}>
            <Container>
                <h2 className={css.title}>Why you should sell your car with us?</h2>
                <ul className={css.list}>
                    <li className={css.item}>
                        <FiZap className={css.icon} />
                        <div className={css.content}>
                            <h3 className={css.title}>Fast and easy process</h3>
                            <p className={css.description}>
                                Sell your car in just a few steps—quickly, without hassle, right from the Hawaiian islands.
                            </p>
                        </div>
                    </li>
                    <li className={css.item}>
                        <FiEye className={css.icon} />
                        <div className={css.content}>
                            <h3 className={css.title}>100% transparency</h3>
                            <p className={css.description}>
                                We provide clear pricing and honest deals, so you always know what to expect.
                            </p>
                        </div>
                    </li>
                    <li className={css.item}>
                        <FiClock className={css.icon} />
                        <div className={css.content}>
                            <h3 className={css.title}>24/7 support</h3>
                            <p className={css.description}>
                                Our team is here for you anytime, ready to assist with any questions or concerns.
                            </p>
                        </div>
                    </li>
                    <li className={css.item}>
                        <FiShield className={css.icon} />
                        <div className={css.content}>
                            <h3 className={css.title}>Safe and secure</h3>
                            <p className={css.description}>
                                Your data and transactions are protected with top-notch security measures.
                            </p>
                        </div>
                    </li>
                </ul>
            </Container>
        </Section>
    );
};

export default Benefits;