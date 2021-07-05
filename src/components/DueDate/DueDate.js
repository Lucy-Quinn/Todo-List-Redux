import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import { useDispatch } from 'react-redux';
import "react-datepicker/dist/react-datepicker.css";

import { addTodoDueDate } from '../../redux/actions/todoItemsActions';

const DueDate = ({ todoId }) => {

    const [dueDate, setDueDate] = useState(null);
    const dispatch = useDispatch();

    const handleDueDate = () => {
        const modifiedDate = dueDate.toDateString().slice(0, 10);
        dispatch(addTodoDueDate(todoId, modifiedDate))
    };

    return (
        <div>
            <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                placeholderText="Set a due date"
            />
            <button className='cta-button' onClick={handleDueDate}>set</button>
        </div>
    );
}

export default DueDate
