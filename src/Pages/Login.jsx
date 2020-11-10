import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import FormLogin from '../components/FormUser/FormLogin';

const noficationSuccess = (text) => {
    toast.success(text, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });
}

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const registered = useSelector(state => state.userReducer.registered);

    const { from } = location.state || { from: { pathname: "/" } };

    useEffect(() => {
        if (registered) noficationSuccess('Register Successfully!');

    }, [registered])

    return (
        <div className="account-page">
            <FormLogin history={history} from={from} />
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

export default Login;