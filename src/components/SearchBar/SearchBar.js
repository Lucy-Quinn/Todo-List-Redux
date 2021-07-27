import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { filterTodos } from '../../redux/actions/todoItems';

const SearchBar = () => {

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
        <div className="form-wrapper">
            <input className="form-input" type="text" name="search" placeholder="Search for your todo..." value={searchInput} onChange={handleSearchInput} />
        </div>
    );
};

export default SearchBar;
