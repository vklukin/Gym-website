import { Navigate, Outlet, useLocation } from 'react-router-dom';

type TAllowedRoles = { allowedRoles: string[] };

const PrivateRoute = ({ allowedRoles }: TAllowedRoles): JSX.Element => {
    const session = JSON.parse(window.localStorage.getItem('Auth-Session') as string);
    const location = useLocation();

    return !session?.isAuth ? (
        <Navigate to="/authorization" state={{ from: location }} replace />
    ) : !session?.role || !session?.id ? (
        <Navigate to={'/authorization'} state={{ from: location }} replace />
    ) : allowedRoles.includes(session.role) ? (
        <Outlet />
    ) : (
        <Navigate to={`/${session.id}/profile`} state={{ from: location }} replace />
    );
};

export default PrivateRoute;
