import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getCurrentUser } from '../actions/user';
import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import authService from '../services/auth.service';
import io from 'socket.io-client';
import BoxEdit from '../components/BoxEdit/BoxEdit';


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

const Home = props => {
    const loggedIn = useSelector(state => state.userReducer.loggedIn);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const user = useSelector(state => state.userReducer.user);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    useEffect(() => {
        if (loggedIn) noficationSuccess('Login Successfully!');

        const getUser = async () => {
            if (token) {
                const { user } = (await authService.getUser(token)).data;

                if (user) {
                    dispatch(getCurrentUser(user))
                }
            }
        }
        getUser();

    }, [dispatch, loggedIn, token])

    return (
        user && <div className="home">
            <Header />
            <Content user={user} history={history} from={from} />
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
            <BoxEdit user={user} />
        </div>
    );
};

export default Home;