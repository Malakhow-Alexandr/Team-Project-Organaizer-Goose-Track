import { useTheme } from '../../hooks/useTheme';
import { FiMoon } from 'react-icons/fi';
import { BiSun } from 'react-icons/bi';
import { ThemeModeBtn } from './ThemeToggler.styled';

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const handleDarkClick = () => {
    setTheme('dark');
  };

  const handleLightClick = () => {
    setTheme('light');
  };

  function DarkButton() {
    return (
      <ThemeModeBtn onClick={handleDarkClick}>
        <FiMoon size={30} />
      </ThemeModeBtn>
    );
  }

  function LightButton() {
    return (
      <ThemeModeBtn onClick={handleLightClick}>
        <BiSun size={30} />
      </ThemeModeBtn>
    );
  }

  function CurrentButton() {
    if (theme === 'light') {
      return <DarkButton />;
    }
    return <LightButton />;
  }

  return <CurrentButton />;
};
