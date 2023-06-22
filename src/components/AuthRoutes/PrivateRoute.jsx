import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  // Це для перемикання між приватним та публічним
  const userAccessToken = true;
  //  const userAccessToken = useSelector(selectAccessToken);

  return userAccessToken ? (
    <div style={{ display: 'flex' }}>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" replace />
  );
};
