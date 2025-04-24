import React from 'react';
import Section from '../Section/Section';
import Container from '../Container/Container';
import css from './Benefits.module.css';
import { FiZap, FiEye, FiClock, FiShield } from 'react-icons/fi';

const Benefits = () => {
    return (
        <Section id="benefits" className={css.section}>
            <Container>
                <h2 className={css.title}>Why Choose Us?</h2>
                <ul className={css.list}>
                    <li className={css.item}>
                        <FiZap className={css.icon} />
                        <div className={css.content}>
                            <h3 className={css.title}>Top Dollar Offers</h3>
                            <p className={css.description}>
                                We offer fair and competitive prices for all types of vehicles, regardless of make, model, or condition.
                            </p>
                        </div>
                    </li>
                    <li className={css.item}>
                        <FiEye className={css.icon} />
                        <div className={css.content}>
                            <h3 className={css.title}>Free Towing</h3>
                            <p className={css.description}>
                                No need to worry about how to get your car to us. We provide free towing anywhere in Hawaii – saving you time and money!
                            </p>
                        </div>
                    </li>
                    <li className={css.item}>
                        <FiClock className={css.icon} />
                        <div className={css.content}>
                            <h3 className={css.title}>Fast & Easy Process</h3>
                            <p className={css.description}>
                                Get a quote in minutes, schedule a pickup at your convenience, and get paid on the spot.
                            </p>
                        </div>
                    </li>
                    <li className={css.item}>
                        <FiShield className={css.icon} />
                        <div className={css.content}>
                            <h3 className={css.title}>No Hidden Fees</h3>
                            <p className={css.description}>
                                What we offer is what you get. There are no hidden charges or last-minute surprises.
                            </p>
                        </div>
                    </li>
                    <li className={css.item}>
                        <FiShield className={css.icon} />
                        <div className={css.content}>
                            <h3 className={css.title}>Trusted Local Service</h3>
                            <p className={css.description}>
                                As a Hawaii-based company, we understand the local market and are committed to providing the best customer experience.
                            </p>
                        </div>
                    </li>
                </ul>
            </Container>
        </Section>
    );
};

export default Benefits;