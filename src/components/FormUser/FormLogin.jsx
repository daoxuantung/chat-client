import { FastField, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getCurrentUser, loginUser } from '../../actions/user';
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
    const errors = {};
    const emailRegex = /@gmail.com|@yahoo.com|@hotmail.com|@live.com/;

    if (!values.email) {
        errors.email = '*Email is required!';
    } else if (!emailRegex.test(values.email)) {
        errors.email = '*Invalid email address';
    }

    if (!values.password) {
        errors.password = '*Password is required!';
    }

    return errors;
};

const FormLogin = ({ history, from }) => {
    const dispatch = useDispatch();
    const handleFormLogin = async (values, actions) => {
        const { email, password } = values;
        const { error, token } = (await AuthService.login(email, password)).data;
        if (error) {
            noficationError(error);
            actions.resetForm({
                values: {
                    ...values,
                    password: '',
                }
            })
            return;
        }
        localStorage.setItem("token", token);
        dispatch(loginUser(true));
        const { user } = (await AuthService.getUser(token)).data;
        if (user) {
            dispatch(getCurrentUser(user))
        }
        history.replace(from);
    }

    return (
        <div className="form">
            <div className="form_logo">
                <img src={Logo} alt="" width="60" height="60" />
            </div>
            <h5 className="form_title">Sign in</h5>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validate={validate}
                onSubmit={(values, actions) => handleFormLogin(values, actions)}
            >
                {props => {
                    return (
                        <Form>
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
                            <button className="form_btn" type="submit">Sign in</button>
                        </Form>
                    )
                }}
            </Formik>
            <hr className="form_space" />
            <p className="form_text">Don't have an account?</p>
            <Link className="nav-link form_link" to="/register">Register now!</Link>
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
        </div>
    );
};

export default FormLogin;