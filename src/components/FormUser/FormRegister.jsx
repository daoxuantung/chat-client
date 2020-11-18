import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { registerUser } from '../../actions/user';
import Images from '../../constants/image';
import AuthService from "../../services/auth.service";
import './Form.scss';
import InputField from './InputField';

const { Logo } = Images;

const noficationError = (text) => {
    toast.error(text, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

const validate = (values) => {
    const { username, email, password, confirmPassword } = values;
    const errors = {};
    const emailRegex = /@gmail.com|@yahoo.com|@hotmail.com|@live.com/;

    if (!username) {
        errors.username = '*Username is required!';
    }

    if (!email) {
        errors.email = '*Email is required!';
    } else if (!emailRegex.test(values.email)) {
        errors.email = '*Invalid email address';
    }

    if (!password) {
        errors.password = '*Password is required!';
    } else if (password.length < 6) {
        errors.password = '*Password must be atleast 6 characters long';
    }

    if (!confirmPassword) {
        errors.confirmPassword = '*Confirm password is required!';
    } else if (password !== confirmPassword) {
        errors.confirmPassword = `*Password don't match `;
    }

    return errors;
};


const FormRegister = ({ history, from }) => {
    const dispatch = useDispatch();
    const handleFormRegister = async (values, actions) => {
        const { username, email, password } = values;
        const { error } = (await AuthService.register(username, email, password)).data;

        if (error) {
            noficationError(error);
            actions.resetForm({
                values: {
                    ...values,
                    password: '',
                    confirmPassword: '',
                }
            })
            return;
        }
        dispatch(registerUser(true));
        history.replace(from);
    }

    return (
        <div className="form">
            <div className="form_logo">
                <img src={Logo} alt="" width="60" height="60" />
            </div>
            <h5 className="form_title">Create Account</h5>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                validate={validate}
                onSubmit={(values, actions) => handleFormRegister(values, actions)}
            >
                {props => (
                    <Form>
                        <FastField
                            name="username"
                            component={InputField}

                            type="text"
                            placeholder="Username"
                        />

                        <FastField
                            name="email"
                            component={InputField}

                            type="text"
                            placeholder="Email"
                        />

                        <FastField
                            name="password"
                            component={InputField}

                            type="password"
                            placeholder="Password"
                        />

                        <FastField
                            name="confirmPassword"
                            component={InputField}

                            type="password"
                            placeholder="Confirm Password"
                        />

                        <button className="form_btn" type="submit">Register</button>
                    </Form>
                )}
            </Formik>
            <hr className="form_space" />
            <p className="form_text">Already have an account?</p>
            <Link className="nav-link form_link" to="/login">Sign in!</Link>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </div >
    );
};

export default FormRegister;