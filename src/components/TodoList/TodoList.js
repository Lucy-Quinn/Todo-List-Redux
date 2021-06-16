import React, { useContext } from 'react';
import Todo from '../Todo';
import TodoListWrapper from './TodoList.styled';
import { ThemeContext } from '../../contexts/ThemeContext';

const TodoList = ({ todos, setTodos }) => {

    const { isLightTheme, themes } = useContext(ThemeContext);
    const theme = isLightTheme ? themes.light : themes.dark;

    const handleCompleteItem = (currentItem) => {
        const newArr = todos.map(todo => {
            if (todo.id === currentItem.id) {
                return {
                    id: currentItem.id,
                    text: currentItem.text,
                    complete: !currentItem.complete,
                }
            }
            return todo
        })
        setTodos([...newArr])
    }

    const handleRemoveItem = (currentItem) => {
        setTodos(todos.filter(item => item !== currentItem));
    }

    return (
        <TodoListWrapper theme={theme}>
            {todos.map((item) =>
                <Todo key={item.id} todos={todos} setTodos={setTodos} item={item} handleCompleteItem={handleCompleteItem} handleRemoveItem={handleRemoveItem} />)
            }
        </TodoListWrapper>
    );
}

export default TodoList;