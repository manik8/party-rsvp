import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../../context/authContext/authContext';

export default function PrivateRoute({ component: Component, ...rest }) {
    const { userAuth } = useContext(AuthContext);
    return (
        <Route
            { ...rest}
            render={ props => !userAuth ?  (<Redirect to="/login" />) : (<Component { ...props } />)  }
        />
    )
}
