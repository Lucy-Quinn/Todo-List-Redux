
import { TOGGLE_THEME_BUTTON } from '../types';

export function toggleThemeButton(toggleTheme) {
    return {
        type: TOGGLE_THEME_BUTTON,
        payload: {
            toggleTheme
        }
    }
};