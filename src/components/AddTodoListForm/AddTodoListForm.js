import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodoList } from '../../redux/actions/todoListsActions';
import { AddTodoListFormWrapper, ColorSelect, TopSection } from './AddTodoListForm.styled';

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
        if (colorValue.length >= 1) {
            dispatch(addTodoList(titleValue, colorValue));
            setTitleValue('');
        }
        return
    }

    return (
        <AddTodoListFormWrapper className="form-wrapper" onSubmit={handleAddTodoListCategoryForm}>
            <TopSection>
                <input className="form-input" type="text" name="todo" value={titleValue} placeholder="Add todo list..." onChange={handleInputChange} />
                <button className="cta-button-add" type="submit">+</button>
            </TopSection>
            <label>
                <ColorSelect className="form-select" value={colorValue} onChange={handleOptionChange}>
                    <option value='' hidden>Select theme color</option>
                    {COLORS_DATA.map(colorItem => {
                        return (
                            <option value={colorItem.color} key={colorItem.id}>{colorItem.color}</option>
                        )
                    }
                    )}
                </ColorSelect>
            </label>
        </AddTodoListFormWrapper>
    )
}

export default AddTodoListForm
