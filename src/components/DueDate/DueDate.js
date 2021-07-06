import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { useDispatch } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";

import { addTodoDueDate } from '../../redux/actions/todoItemsActions';
import { DueDateWrapper } from './DueDate.styled';

const DueDate = ({ todoId }) => {

    const [dueDate, setDueDate] = useState(null);
    const dispatch = useDispatch();

    const handleDueDate = () => {
        const modifiedDate = dueDate && dueDate.toDateString().slice(0, 10);
        dispatch(addTodoDueDate(todoId, modifiedDate))
    };

    return (
        <DueDateWrapper className="form-wrapper">
            <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                placeholderText="Add a due date"
                className="form-input"
            />
            <button className='cta-button-add' onClick={handleDueDate}>+</button>
        </DueDateWrapper>
    );
}

export default DueDate
