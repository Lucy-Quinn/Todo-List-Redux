import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodoList } from "../../redux/actions/todoLists";
import {
    AddTodoListFormWrapper,
    ColorSelect,
    TopSection,
} from "./AddTodoListForm.styled";

const COLORS_DATA = [
    {
        id: 1,
        color: "red",
    },
    {
        id: 2,
        color: "green",
    },
    {
        id: 3,
        color: "blue",
    },
    {
        id: 4,
        color: "purple",
    },
];

const AddTodoListForm = () => {
    const [todoListTitle, setTodoListTitle] = useState("");
    const [todoListColor, setTodoListColor] = useState("");

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setTodoListTitle(e.target.value);
    };

    const handleOptionChange = (e) => {
        setTodoListColor(e.target.value);
    };

    const handleAddTodoListCategoryForm = (e) => {
        e.preventDefault();
        if (todoListColor.length >= 1) {
            dispatch(addTodoList({ todoListTitle, todoListColor }));
            setTodoListTitle("");
        }
        return;
    };

    return (
        <AddTodoListFormWrapper
            className="form-wrapper"
            onSubmit={handleAddTodoListCategoryForm}
        >
            <TopSection>
                <input
                    className="form-input"
                    type="text"
                    name="todo"
                    value={todoListTitle}
                    placeholder="Add todo list"
                    onChange={handleInputChange}
                />
                <button className="cta-button-add" type="submit">
                    +
                </button>
            </TopSection>
            <label>
                <ColorSelect
                    className="form-select"
                    value={todoListColor}
                    onChange={handleOptionChange}
                    required
                >
                    <option value="" hidden>
                        Select theme color
                    </option>
                    {COLORS_DATA.map((colorItem) => {
                        return (
                            <option value={colorItem.color} key={colorItem.id}>
                                {colorItem.color}
                            </option>
                        );
                    })}
                </ColorSelect>
            </label>
        </AddTodoListFormWrapper>
    );
};

export default AddTodoListForm;
