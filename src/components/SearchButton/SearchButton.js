import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './SearchButton.styled';

const SearchButton = ({
  isSearchActive,
  setIsSearchActive,
  theme,
  isLightTheme,
}) => {
  const handleSearchBar = () => {
    setIsSearchActive(!isSearchActive);
  };
  return (
    <Button
      className="form-select"
      onClick={handleSearchBar}
      isSearchActive={isSearchActive}
      theme={theme}
      isLightTheme={isLightTheme}
    >
      Search
      {isSearchActive ? (
        <i className="fas fa-times"></i>
      ) : (
        <i className="fas fa-search search-icon"></i>
      )}
    </Button>
  );
};

SearchButton.propTypes = {
  isSearchActive: PropTypes.bool,
  setIsSearchActive: PropTypes.func,
  theme: PropTypes.object,
  isLightTheme: PropTypes.bool,
};

export default SearchButton;
