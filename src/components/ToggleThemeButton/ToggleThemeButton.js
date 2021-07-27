import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToggleButtonWrapper, ToggleButtonIcon } from './ToggleThemeButton.styled';
import { toggleThemeButton } from '../../redux/actions/theme';

const ToggleThemeButton = () => {

    const { toggleTheme, themes } = useSelector(state => state.themeReducer);
    const theme = toggleTheme ? themes.light : themes.dark;

    const dispatch = useDispatch();

    const handleThemeToggle = () => {
        dispatch(toggleThemeButton());
    }

    return (
        <ToggleButtonWrapper>
            <ToggleButtonIcon onClick={handleThemeToggle} theme={theme}>
                {toggleTheme ?
                    <i className="far fa-sun"></i>
                    : <i className="far fa-moon"></i>}
            </ToggleButtonIcon>
        </ToggleButtonWrapper>
    );
};

export default ToggleThemeButton;
