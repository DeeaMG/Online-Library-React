import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component: Component, restricted=false, ...rest}) =>
{
    return (
        <Route {...rest} render={props => (
            sessionStorage['userEmail'] && restricted ? <Redirect to="/" /> : <Component {...props} />
        )} />
    )
}

export default PublicRoute;
