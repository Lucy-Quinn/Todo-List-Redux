import React, { useState, useRef, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodoListCategory } from '../../redux/actions/todoItemsActions';

const SelectTodoForm = ({ currentTodoList }) => {

    const todosArr = useSelector(state => state.todoItemsReducer.todos);

    const [todoValue, setTodoValue] = useState('');
    const [todoIdValue, setTodoIdValue] = useState('');

    const dispatch = useDispatch();
    const refArray = useRef(todosArr.map(() => createRef()));

    const currentListTitle = currentTodoList ? currentTodoList.title : '';

    const handleOptionChange = (e) => {
        const currentIndex = e.target.options.selectedIndex;
        const todoId = refArray?.current[currentIndex - 1].current?.className;

        setTodoIdValue(todoId)
        setTodoValue(e.target.value);
    }

    const handleTodoSelectForm = (e) => {
        e.preventDefault();
        dispatch(addTodoListCategory(todoIdValue, currentListTitle))
    }

    return (
        <form onSubmit={handleTodoSelectForm}>
            <label>
                <select defaultValue={todoValue} onChange={handleOptionChange}>
                    <option value='' disabled>Pick from your todos...</option>
                    {todosArr.map((todo, index) =>
                        <option value={todo.text} key={todo.id} className={todo.id} ref={refArray.current[index]}>{todo.text}</option>
                    )}
                </select>
            </label>
            <button className="cta-button" type="submit">Add</button>
        </form>
    )
}

export default SelectTodoForm
