import { TOGGLE_THEME_BUTTON } from '../types';

const INITIALSTATE = {
  themes: {
    light: {
      primary: '#6646ee',
      onPrimary: '#fff',
      secondary: '#60DBC7',
      onSecondary: '#fff',
      background: '#fff',
      onBackground: 'black',
      surface: '#fff',
      onSurface: 'black',
      error: '#f49381',
      onError: 'black',
      boxShadow: '2px 2px 6px rgb(122 119 119 / 58%)',
      border: '#3b32b3',
      // buttonFont: 'black',
      // genericFont: 'black',
    },
    dark: {
      primary: '#292929',
      onPrimary: '#fff',
      secondary: '#6646EE',
      onSecondary: '#fff',
      background: '#121212',
      onBackground: '#fff',
      surface: '#292929',
      onSurface: '#fff',
      error: '#f49381',
      onError: '#fff',
      boxShadow: 'none',
      border: '#fff',
      // buttonFont: '#fff',
      // genericFont: '#fff',
    },
  },
  toggleTheme: { toggleTheme: false },
};

export default function themeReducer(state = INITIALSTATE, action) {
  switch (action.type) {
    case TOGGLE_THEME_BUTTON:
      return {
        ...state,
        toggleTheme: !state.toggleTheme,
      };
    default:
      return state;
  }
}
