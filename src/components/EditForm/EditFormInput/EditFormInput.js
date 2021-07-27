import React, { useEffect, useRef } from 'react';

const EditFormInput = ({ inputValue, setInputValue, currentItem, isTodoListsPath, isEdit }) => {

    const inputRef = useRef(null);
    const { text, title } = currentItem;

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const adjustWidth = () => {
        inputRef.current.style.width = 0;
        inputRef.current.style.width = inputRef.current.scrollWidth + 'px';
    };

    useEffect(() => {
        adjustWidth()
    }, [inputValue]);

    return (
        <div>
            <input className="form-input" type="text" name="editItem" placeholder={isEdit && isTodoListsPath ? title : text} defaultValue={isEdit && isTodoListsPath ? title : text} onChange={handleChange} ref={inputRef} />
        </div>
    )
}

export default EditFormInput;
