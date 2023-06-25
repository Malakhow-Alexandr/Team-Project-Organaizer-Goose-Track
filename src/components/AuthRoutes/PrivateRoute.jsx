import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/selectors';

export const PrivateRoute = () => {
  // Це для перемикання між приватним та публічним
  // const userAccessToken = true;
  const userAccessToken = useSelector(selectAccessToken);

  return userAccessToken ? (
    <div style={{ display: 'flex' }}>
      <Outlet />
    </div>
  ) : (
    <Navigate to="/" replace />
  );
};
