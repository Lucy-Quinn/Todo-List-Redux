import { TOGGLE_THEME_BUTTON } from '../types';

const INITIALSTATE = {
    themes: {
        light: {
            gradientOne: '90deg, rgba(54,209,220,1) 0%',
            gradientTwo: 'rgba(91,134,229,1) 100%',
            button: '#5C88E5',
            todoListBackgroundColor: 'rgba(166, 216, 219, 0.411)',
            border: 'rgb(122 119 119 / 58%)'
        },
        dark: {
            gradientOne: '90deg, rgba(21,25,101,1) 0%',
            gradientTwo: 'rgba(81,85,133,1) 100%',
            button: '#46B5D1',
            todoListBackgroundColor: 'gray',
            border: '#fff'
        }
    },
    toggleTheme: { toggleTheme: false },
}


export default function themeReducer(state = INITIALSTATE, action) {
    switch (action.type) {
        case TOGGLE_THEME_BUTTON:
            return {
                ...state,
                toggleTheme: !state.toggleTheme
            }
        default:
            return state
    }
};