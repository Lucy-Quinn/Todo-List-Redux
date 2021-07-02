import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodoList } from '../../redux/actions/todoListsActions';

const COLORS_DATA = [
    {
        id: 1,
        color: 'red'
    },
    {
        id: 2,
        color: 'green'
    },
    {
        id: 3,
        color: 'blue'
    },
    {
        id: 4,
        color: 'purple'
    }
]

const AddTodoListForm = () => {

    const [titleValue, setTitleValue] = useState('');
    const [colorValue, setColorValue] = useState('');

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setTitleValue(e.target.value);
    }

    const handleOptionChange = (e) => {
        setColorValue(e.target.value);
    }

    const handleAddTodoListCategoryForm = (e) => {
        e.preventDefault();
        dispatch(addTodoList(titleValue, colorValue));
        setTitleValue('');
    }

    return (
        <form className="form-wrapper" onSubmit={handleAddTodoListCategoryForm}>
            <input className="form-input" type="text" name="todo" value={titleValue} placeholder="Add todo list..." onChange={handleInputChange} />
            <label>
                Choose your theme color:
                <select value={colorValue} onChange={handleOptionChange}>
                    {COLORS_DATA.map(colorItem =>
                        <option value={colorItem.color} key={colorItem.id}>{colorItem.color}</option>
                    )}
                </select>
            </label>
            <button className="cta-button" type="submit">Add</button>
        </form>
    )
}

export default AddTodoListForm
