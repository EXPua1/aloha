import React from 'react';
import css from './Form.module.css';

const Form = () => {
    return (
        <form
            className={css.form}
            action="https://formspree.io/f/mldjvejd"
            method="POST"
        >
            <div className={css.input}>
                <label htmlFor="car-message">Enter short description about your car</label>
                <textarea
                    id="car-message"
                    name="message"
                    rows="10"
                    placeholder={`Write us short information about your car and your contacts.
Honda Accord 2.0L, front damage, 127k miles on the odometer.
+1-012-345-6789`}
                    required
                ></textarea>
            </div>

            <div className={css.input}>
                <label className={css.label} htmlFor="email">Your email</label>
                <input className={css.input_email}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com"
                    required
                />
            </div>

            <button type="submit">Send</button>
        </form>
    );
};

export default Form;
