import React, { useState, useRef, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTodoListCategory } from '../../redux/actions/TodoItemsActions';

const SelectTodoForm = ({ currentTodoList }) => {

    const todosArr = useSelector(state => state.todoItemsReducer.todos);
    const todosTextArr = todosArr.map(todo => todo.text);

    const [todoValue, setTodoValue] = useState(todosTextArr[0]);
    const [todoIdValue, setTodoIdValue] = useState('');

    const dispatch = useDispatch();
    const refArray = useRef(todosArr.map(() => createRef()));

    const currentListTitle = currentTodoList ? currentTodoList.title : '';

    const handleOptionChange = (e) => {
        const currentIndex = e.target.options.selectedIndex;
        const todoId = refArray?.current[currentIndex].current?.className;
        setTodoIdValue(todoId)
        setTodoValue(e.target.value);
    }

    const handleTodoSelectForm = (e) => {
        e.preventDefault();
        dispatch(addTodoListCategory(todoIdValue, currentListTitle));
    }

    return (
        <form onSubmit={handleTodoSelectForm}>
            <label>
                Your todos:
                <select value={todoValue} onChange={handleOptionChange}>
                    {todosArr.map((todo, index) =>
                        <option value={todo.text} key={todo.id} className={todo.id} ref={refArray.current[index]}
                        >{todo.text}</option>
                    )}
                </select>
            </label>
            <button className="cta-button" type="submit">Add</button>
        </form>
    )
}

export default SelectTodoForm
