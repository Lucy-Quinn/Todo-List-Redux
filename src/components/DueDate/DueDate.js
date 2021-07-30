import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from "prop-types";

import { addTodoDueDate } from "../../redux/actions/todoItems";
import { DueDateWrapper } from "./DueDate.styled";

const DueDate = ({ todoId }) => {
    const [dueDate, setDueDate] = useState(null);
    const dispatch = useDispatch();

    const handleDueDate = () => {
        const modifiedDate = dueDate && dueDate.toDateString().slice(0, 10);
        dispatch(addTodoDueDate({ todoId, modifiedDate }));
    };

    function onDueDateChange(date) {
        setDueDate(date);
    }

    return (
        <DueDateWrapper className="form-wrapper">
            <DatePicker
                selected={dueDate}
                onChange={onDueDateChange}
                placeholderText="Add a due date"
                className="form-input"
            />
            <button className="cta-button-add" onClick={handleDueDate}>
                +
            </button>
        </DueDateWrapper>
    );
};

DueDate.propTypes = {
    todoId: PropTypes.string.isRequired,
};

export default DueDate;
