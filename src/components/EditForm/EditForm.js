import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { editTodoList } from "../../redux/actions/todoLists";
import { editTodo } from "../../redux/actions/todoItems";
import { EditFormWrapper } from "./EditForm.styled";
import { useLocation } from "react-router-dom";
import EditFormInput from "./EditFormInput/EditFormInput";

const EditForm = ({ currentItem, isEdit, setIsEdit, theme }) => {
    const [inputValue, setInputValue] = useState("");

    const dispatch = useDispatch();

    const location = useLocation();
    const { pathname } = location;
    const isTodoListsPath = pathname.includes("todoLists");

    const { id } = currentItem;

    const handleEditTodoForm = (event) => {
        event.preventDefault();
        if (isTodoListsPath) {
            dispatch(editTodoList({ id, inputValue }));
        } else {
            dispatch(editTodo({ id, inputValue }));
        }
        setIsEdit(false);
    };

    return (
        <EditFormWrapper onSubmit={handleEditTodoForm}>
            <EditFormInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                isTodoListsPath={isTodoListsPath}
                currentItem={currentItem}
                isEdit={isEdit}
            />
            <button className="cta-button" theme={theme} type="submit">
                Save
            </button>
        </EditFormWrapper>
    );
};

EditForm.propTypes = {
    currentItem: PropTypes.object.isRequired,
    isEdit: PropTypes.bool.isRequired,
    setIsEdit: PropTypes.func.isRequired,
    theme: PropTypes.object,
};

export default EditForm;
