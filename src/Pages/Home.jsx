import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { showMenu } from '../actions/dropdownMenu';
import { getCurrentUser } from '../actions/user';
import BoxEdit from '../components/BoxEdit/BoxEdit';
import Content from '../components/Content/Content';
import Header from '../components/Header/Header';
import authService from '../services/auth.service';

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

const Home = ({ socket }) => {
    const loggedIn = useSelector(state => state.userReducer.loggedIn);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const user = useSelector(state => state.userReducer.user);

    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    const handleHidden = () => {
        dispatch(showMenu(false));
    }


    useEffect(() => {
        const getUser = async () => {
            const user = (await authService.getUser(token)).data;
            if (user) {
                dispatch(getCurrentUser(user))
            }
        }

        getUser();
    }, [dispatch, token])

    useEffect(() => {
        if (loggedIn) noficationSuccess('Login Successfully!');

    }, [loggedIn])

    return (
        user && <div className="home">
            <Header handleHidden={handleHidden} />
            <Content history={history} from={from} handleHidden={handleHidden} socket={socket} />
            <ToastContainer />
            <BoxEdit user={user} />
        </div>
    );
};

export default Home;