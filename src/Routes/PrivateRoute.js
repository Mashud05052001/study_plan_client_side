import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import { AuthContext } from '../Firebase/UserContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading, setLoading } = useContext(AuthContext);

    if (loading) {
        return <div><Spinner /></div>
    }
    if (user) return children;
    else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default PrivateRoute;