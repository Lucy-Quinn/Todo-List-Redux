import React, { useState, useRef, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodoListCategory } from '../../redux/actions/todoItemsActions';
import { SelectTodoFormWrapper, Select } from './SelectTodoForm.styled';

const SelectTodoForm = ({ currentTodoList }) => {

    const todosArr = useSelector(state => state.todoItemsReducer.todos);

    const [todoValue, setTodoValue] = useState('');
    const [todoId, setTodoId] = useState('');

    const dispatch = useDispatch();
    const refArray = useRef(todosArr.map(() => createRef()));

    const todolistTitle = currentTodoList ? currentTodoList.title : '';

    const handleOptionChange = (e) => {
        const currentIndex = e.target.options.selectedIndex;
        const todoId = refArray?.current[currentIndex - 1].current?.className;
        setTodoId(todoId)
        setTodoValue(e.target.value);
    }

    const handleTodoSelectForm = (e) => {
        e.preventDefault();
        dispatch(addTodoListCategory({ todoId, todolistTitle }))
    }

    return (
        <SelectTodoFormWrapper className="form-wrapper" onSubmit={handleTodoSelectForm} >
            <label>
                <Select className="form-input" defaultValue={todoValue} onChange={handleOptionChange}>
                    <option value='' hidden>Choose from your todos</option>
                    {todosArr.map((todo, index) =>
                        <option value={todo.text} key={todo.id} className={todo.id} ref={refArray.current[index]}>{todo.text}</option>
                    )}
                </Select>
            </label>
            <button className="cta-button-add" type="submit">+</button>
        </SelectTodoFormWrapper>
    )
}

export default SelectTodoForm
