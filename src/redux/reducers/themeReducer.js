import { TOGGLE_THEME_BUTTON } from '../types';

const INITIALSTATE = {
  themes: {
    light: {
      primary: '#6646ee',
      gradientOne: '#fff',
      gradientTwo: '#fff',
      button: '#60DBC7',
      surface: '#fff',
      boxShadow: '2px 2px 6px rgb(122 119 119 / 58%)',
      todoListBackgroundColor: 'rgba(166, 216, 219, 0.411)',
      border: '#3b32b3',
      buttonFont: 'black',
      headerFont: 'black',
    },
    dark: {
      primary: '#292929',
      gradientOne: '#121212',
      gradientTwo: '#121212',
      button: '#6646EE',
      surface: '#292929',
      boxShadow: 'none',
      todoListBackgroundColor: 'gray',
      border: '#fff',
      buttonFont: '#fff',
      headerFont: '#fff',
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
