import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ToggleButtonWrapper, ToggleButtonIcon } from './ToggleButton.styled';

const ToggleButton = () => {
    const { isLightTheme, toggleTheme, themes } = useContext(ThemeContext);

    const theme = isLightTheme ? themes.light : themes.dark;

    const handleThemeToggle = () => {
        toggleTheme();
    }
    return (
        <ToggleButtonWrapper>
            <ToggleButtonIcon onClick={handleThemeToggle} theme={theme}>
                {isLightTheme ?
                    <i className="far fa-sun"></i>
                    : <i className="far fa-moon"></i>}
            </ToggleButtonIcon>
        </ToggleButtonWrapper>
    );
}

export default ToggleButton;
