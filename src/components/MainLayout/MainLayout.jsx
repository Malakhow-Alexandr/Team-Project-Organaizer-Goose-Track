import { SideBar } from 'components/SideBar/SideBar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <h2>Main Layout</h2>
      {/* WrapLeftColumn Ліва колонка використовується для компонента SideBar */}
      <div
        style={{ height: '100%', width: '225px', outline: '1px solid tomato' }}
      >
        <SideBar />
      </div>

      {/* WrapRightColumn Права колонка використовується для рендера Main */}
      <div
        style={{
          'flex-grow': 1,
          padding: '0 20px',
          outline: '1px solid tomato',
        }}
      >
        <h3>Main</h3>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
