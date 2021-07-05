import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { orderTodosByDateCreated, orderTodosAlphabetically, orderTodosByFavorites } from '../../redux/actions/todoItemsActions';

const ORDER_TODO_DATA = [
    {
        id: 1,
        action: 'favorites'
    },
    {
        id: 2,
        action: 'newest'
    },
    {
        id: 3,
        action: 'oldest'
    },
    {
        id: 4,
        action: 'alphabetically'
    }
]

const OrderTodos = () => {

    const [sortAction, setSortAction] = useState('');

    const dispatch = useDispatch();

    const handleOptionChange = (e) => {
        setSortAction(e.target.value);
    }

    useEffect(() => {
        switch (sortAction) {
            case 'favorites':
                return (dispatch(orderTodosByFavorites(sortAction)))
            case 'alphabetically':
                return (dispatch(orderTodosAlphabetically(sortAction)))
            case 'newest':
                return (dispatch(orderTodosByDateCreated(sortAction)))
            case 'oldest':
                return (dispatch(orderTodosByDateCreated(sortAction)))
            default:
                return ''
        }
    }, [dispatch, sortAction]);

    return (
        <div className="form-wrapper">
            <label>
                <select value={sortAction} onChange={handleOptionChange}>
                    <option value=''>Order your todos by...</option>
                    {ORDER_TODO_DATA.map((element) =>
                        <option value={element.action} key={element.id}>{element.action}</option>
                    )}
                </select>
            </label>
        </div>
    )
}

export default OrderTodos
