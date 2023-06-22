import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const PublicRoute = () => {
  const location = useLocation();

  // Це для перемикання між приватним та публічним
  const userAccessToken = false;
  //  const userAccessToken = useSelector(selectAccessToken);;

  return !userAccessToken ? (
    <Outlet />
  ) : (
    <Navigate to={location?.state?.from ?? '/calendar'} replace />
  );
};
