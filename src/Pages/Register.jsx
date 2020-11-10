import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import FormRegister from '../components/FormUser/FormRegister';

const Register = () => {
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/login" } };
    return (
        <div className="account-page">
            <FormRegister history={history} from={from} />
        </div>
    );
};

export default Register;