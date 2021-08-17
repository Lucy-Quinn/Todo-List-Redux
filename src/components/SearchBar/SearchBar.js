import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { filterTodos } from '../../redux/actions/todoItems';
import { SearchBarWrapper } from './SearchBar.styled';

const SearchBar = ({ theme }) => {
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  let inputRef = useRef(null);

  const handleSearchInput = (e) => {
    const { value } = e.target;
    setSearchInput(value);
  };

  useEffect(() => {
    dispatch(filterTodos({ searchInput }));
    inputRef = inputRef.current.focus();
  }, [dispatch, searchInput, inputRef]);

  return (
    <SearchBarWrapper theme={theme}>
      <input
        className="form-input mainLoginInput"
        type="text"
        name="search"
        placeholder="&#xf002;"
        value={searchInput}
        onChange={handleSearchInput}
        ref={inputRef}
      />
    </SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  theme: PropTypes.object.isRequired,
};

export default SearchBar;
