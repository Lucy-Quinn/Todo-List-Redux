import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const EditFormInput = ({
  inputValue,
  setInputValue,
  currentItem,
  isTodoListsPath,
  isEdit,
}) => {
  const inputRef = useRef(null);
  const { text, title } = currentItem;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const adjustWidth = () => {
    inputRef.current.style.width = 0;
    inputRef.current.style.width = inputRef.current.scrollWidth + 'px';
  };

  useEffect(() => {
    adjustWidth();
  }, [inputValue]);

  return (
    <div>
      <input
        className="form-input"
        type="text"
        name="editItem"
        placeholder={isEdit && isTodoListsPath ? title : text}
        defaultValue={isEdit && isTodoListsPath ? title : text}
        onChange={handleChange}
        ref={inputRef}
      />
    </div>
  );
};

EditFormInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
  isEdit: PropTypes.bool.isRequired,
  setInputValue: PropTypes.func.isRequired,
  currentItem: PropTypes.object.isRequired,
  isTodoListsPath: PropTypes.bool.isRequired,
};

export default EditFormInput;
