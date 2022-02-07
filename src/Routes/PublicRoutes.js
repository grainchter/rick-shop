import { Route, Redirect } from "react-router-dom";

const PublicRoutes = ({ component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('idToken') === null ?
                    <Component {...props} /> :
                    <Redirect to="/" />
            }
        />
    );

};

export default PublicRoutes;