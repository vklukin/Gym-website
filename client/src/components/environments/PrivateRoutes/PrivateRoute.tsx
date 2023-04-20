import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../../store/ReduxHooks';

type TAllowedRoles = { allowedRoles: string[] };

const PrivateRoute = ({ allowedRoles }: TAllowedRoles): JSX.Element => {
    const { isAuth, id, role } = useAppSelector((state) => state.Auth.user);
    const location = useLocation();

    return !isAuth ? (
        <Navigate to="/authorization" state={{ from: location }} replace />
    ) : allowedRoles.includes(role) ? (
        <Outlet />
    ) : (
        <Navigate to={`/${id}/profile`} state={{ from: location }} replace />
    );
};

export default PrivateRoute;
