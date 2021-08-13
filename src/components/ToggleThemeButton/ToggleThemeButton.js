import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ToggleButtonWrapper,
  ToggleButtonIcon,
} from './ToggleThemeButton.styled';
import { toggleThemeButton } from '../../redux/actions/theme';

const ToggleThemeButton = () => {
  const { isLightTheme, themes } = useSelector((state) => state.themeReducer);
  const theme = isLightTheme ? themes.light : themes.dark;

  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleThemeButton());
  };

  return (
    <ToggleButtonWrapper>
      <ToggleButtonIcon onClick={handleThemeToggle} theme={theme}>
        {isLightTheme ? (
          <i className="far fa-sun light-dark-icon"></i>
        ) : (
          <i className="far fa-moon light-dark-icon"></i>
        )}
      </ToggleButtonIcon>
    </ToggleButtonWrapper>
  );
};

export default ToggleThemeButton;
