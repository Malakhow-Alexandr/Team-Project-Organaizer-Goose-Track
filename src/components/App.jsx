import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const MainPage = lazy(() => import('../pages/Main'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const CalendarPage = lazy(() => import('../pages/Calendar'));
const CalendarMonth = lazy(() => import('../pages/Month'));
const CalendarDay = lazy(() => import('../pages/Day'));
const AccountPage = lazy(() => import('../pages/Account'));
const StatisticsPage = lazy(() => import('../pages/Statistics'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  return (
    <>
      {/* <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <p>Hello</p>
      </div> */}

      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/calendar" element={<CalendarPage />}>
          <Route path="month/:currentDate" element={<CalendarMonth />} />
          <Route path="day/:currentDay" element={<CalendarDay />} />
        </Route>

        <Route path="/account" element={<AccountPage />} />

        <Route path="/statistics" element={<StatisticsPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
