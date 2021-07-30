import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import {
    removeTodo,
    removeTodoListCategory,
} from "../../redux/actions/todoItems";
import { DeleteItem } from "./DeleteButton.styled";
import { removeTodoList } from "../../redux/actions/todoLists";

const DeleteTodo = ({ currentItem }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const location = useLocation();
    const { pathname } = location;
    const isTodoListsPath = pathname.includes("todoLists");

    const { id, title } = currentItem;

    const handleRemoveItem = () => {
        if (isTodoListsPath) {
            dispatch(removeTodoList({ id }));
            dispatch(removeTodoListCategory({ title }));
            history.push("/todoLists");
        } else {
            dispatch(removeTodo({ id }));
            history.push("/");
        }
    };

    return (
        <div>
            <DeleteItem onClick={handleRemoveItem}>
                {isTodoListsPath ? "Delete todo list" : "Delete Todo"}
            </DeleteItem>
        </div>
    );
};

DeleteTodo.propTypes = {
    currentItem: PropTypes.object.isRequired,
};

export default DeleteTodo;
