import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { addTodo } from "../../redux/actions/todoItems";

const AddTodoForm = ({ currentTodoList, theme }) => {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();

    const todaysDate = new Date();
    const currentList = currentTodoList ? new Array(currentTodoList.title) : "";

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItemForm = (e) => {
        e.preventDefault();
        dispatch(addTodo({ inputValue, currentList, todaysDate }));
        setInputValue("");
    };

    return (
        <form className="form-wrapper" onSubmit={handleAddItemForm}>
            <input
                className="form-input"
                type="text"
                name="todo"
                value={inputValue}
                placeholder="Add task..."
                onChange={handleChange}
            />
            <button className="cta-button-add" type="submit" theme={theme}>
                +
            </button>
        </form>
    );
};

AddTodoForm.propTypes = {
    currentTodoList: PropTypes.object,
    theme: PropTypes.object,
};

export default AddTodoForm;
