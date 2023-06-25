// import MainPage from 'pages/MainPage/MainPage';

import LanguageFlags from "./localization/LanguageFlags";


//Translation

  

export const App = () => {
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <LanguageFlags/>
      <p>Hello</p>
    </div>
  );
};
