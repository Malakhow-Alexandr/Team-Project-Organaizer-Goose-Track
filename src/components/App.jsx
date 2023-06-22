import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Публічний та Приватний роутер в залежності від наявності userAccessToken, котрий приходить від BACKEND
import { PublicRoute } from './AuthRoutes/PublicRoute';
import { PrivateRoute } from './AuthRoutes/PrivateRoute';

// pages необхідно огорнути та зробити lazy
import MainPage from 'pages/MainPage/MainPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import PasswordPage from 'pages/PasswordPage/PasswordPage';
import PasswordRecoveryPage from 'pages/PasswordRecoveryPage/PasswordRecoveryPage';
import MainLayout from './MainLayout/MainLayout';
import UserForm from './UserForm/UserForm';
import CalendarPage from 'pages/CalendarPage/CalendarPage';
import ChoosedMonth from './ChoosedMonth/ChoosedMonth';
import ChoosedDay from './ChoosedDay/ChoosedDay';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

// import MainPage from 'pages/MainPage/MainPage';
export const App = () => {
  return (
    <>
      {/* До fallback потрібно додати LOADER AБО Spinner */}
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route index element={<MainPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="password" element={<PasswordPage />} />
            <Route
              path="reset-password/:token"
              element={<PasswordRecoveryPage />}
            />
          </Route>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<MainLayout />}>
              <Route path="account" element={<UserForm />} />
              <Route path="calendar" element={<CalendarPage />}>
                <Route path="month/:currentDate" element={<ChoosedMonth />} />
                <Route path="day/:currentDay" element={<ChoosedDay />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
