import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { filterTodos } from '../../redux/actions/todoItems';
import { SearchBarWrapper } from './SearchBar.styled';

const SearchBar = ({ theme }) => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  useEffect(() => {
    dispatch(filterTodos({ searchInput }));
  }, [dispatch, searchInput]);
  return (
    <SearchBarWrapper className="form-wrapper" theme={theme}>
      <input
        className="form-input"
        type="text"
        name="search"
        placeholder="Search for your todo..."
        value={searchInput}
        onChange={handleSearchInput}
      />
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default SearchBar;
