import React, { useState, useEffect } from 'react';
import css from './Form.module.css';

const Form = () => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });

    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => setStatus(''), 5000); // очищает сообщение через 5 секунд
            return () => clearTimeout(timer); // очистка таймера при размонтировании
        }
    }, [status]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://formspree.io/f/mldjvejd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus('Message sent successfully!');
            setFormData({ email: '', message: '' });
        } else {
            setStatus('Something went wrong. Try again.');
        }
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <div className={css.input}>
                <label htmlFor="message">Enter short description about your car</label>
                <textarea
                    id="message"
                    name="message"
                    rows="10"
                    placeholder={`Write us short information about your car and your contacts.
Honda Accord 2.0L, front damage, 127k miles on the odometer.
+1-012-345-6789`}
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <div className={css.input}>
                <label htmlFor="email">Your email</label>
                <input
                    className={css.input_email}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit">Send</button>

            <div className={css.statusWrapper}>
                <p className={css.status}>{status}</p>
            </div>
        </form>
    );
};

export default Form;
