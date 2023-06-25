import './components/ThemeToggler/colorsThemeToggler.css';

export const theme = {
  colors: {
    primary: '#3E85F3',
    secondary: '#2B78EF',
    lightBlue: '#E3F3FF',
    darkBlue: '#CAE8FF',
    bgBlue: '#DCEBF7',
    background: '#FFFFFF',
    white: '#FFFFFF',
    blackTitle: '#171820',
    black: '#111111',
    text: '#343434',
    mainYellow: '#F3B249',
    lightYellow: '#FCF0D4',
    redError: '#DA1414',
    redErrorLight: '#E74A3B',
    mainRed: '#EA3D65',
    lightRed: '#FFD2DD',
    greenValid: '#3CBC81',
    muted: '#F7F6F9',
    closeButton: '#111111',

    // Theme toggler

    background_switch: 'var(--background)',
    //light #f7f6f9 => dark #171820

    second_background_switch: 'var(--second-background)',
    //light #ffffff => dark #13151a

    third_background_switch: 'var(--third-background)',
    //light #ffffff => dark #21222c

    primary_text_switch: 'var(--primary-text)',
    //light #111111 => dark #fff

    second_text_switch: 'var(--second-text)',
    //light rgba(52, 52, 52, 0.5) => dark #fff

    third_text_switch: 'var(--third-text)',
    //light #343434 => dark #fff

    user_text_switch: 'var(--user-text)',
    //light #343434 => dark rgba(250, 250, 250, 0.3)

    side_bar_hover_task_buttons_background_switch:
      'var(--side-bar-hover-and-task-buttons-background)',
    //light #e3f3ff => dark #3e85f3

    side_bar_content_hover_switch: 'var(--side-bar-buttons-content-hover)',
    //light #3e85f3 => dark #ffffff

    user_label_color_switch: 'var(--user-label-color)',
    //light #111 => dark rgba(250, 250, 250, 0.3);

    user_input_border_color_switch: 'var(--user-input-border-color)',
    //light rgba(17, 17, 17, 0.15) => dark rgba(255, 255, 255, 0.15);

    calendar_border_color_switch: 'var(--calendar-border-color)',
    //light rgba(220, 227, 229, 0.8) => dark rgba(255, 255, 255, 0.15);
  },

  fonts: {
    body: 'Coolvetica',
    heading: 'Inter',
    text: 'Inter',
  },
  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '40px',
    хxl: '120px',
  },
  fontWeights: {
    normal: 500,
    heading: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.25,
    heading: 1.1,
  },
  radii: {
    none: '0',
    small: '8px',
    medium: '14px',
    big: '16px',
    round: '50%',
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  shadows: {
    boxShadow: '4px 2px 16px rgba(136, 165, 191, 0.48)',
    modalShadow: '0px 4px 57px rgba(17, 17, 17, 0.05)',
  },

  breakpoints: {
    mobile: '375px',
    mobileMax: '767px',
    table: '768px',
    desktop: '1440px',
  },
};
