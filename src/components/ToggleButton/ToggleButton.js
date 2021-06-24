import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ToggleButtonWrapper, ToggleButtonIcon } from './ToggleButton.styled';
import { toggleThemeButton } from '../../redux/actions';

const ToggleButton = () => {

    const dispatch = useDispatch();
    const { toggleTheme, themes } = useSelector(state => state.themeReducer);

    const theme = toggleTheme ? themes.light : themes.dark;

    const handleThemeToggle = () => {
        dispatch(toggleThemeButton())
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
}

export default ToggleButton;
