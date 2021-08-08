import React from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper, Button } from './EmojiButton.styled';

const EmojiButton = ({
  isActive,
  setIsActive,
  CATEGORY_DATA,
  setEmojisByCategory,
  theme,
  emojis,
}) => {
  const handleOnclickButton = () => {
    setIsActive(!isActive);
    const defaultEmojiCategory = emojis.filter((emojiObj) => {
      return emojiObj.group === CATEGORY_DATA[0].category;
    });
    setEmojisByCategory(defaultEmojiCategory);
  };

  return (
    <ButtonWrapper>
      <Button
        onClick={handleOnclickButton}
        type="button"
        theme={theme}
        isActive={isActive}
      >
        {<span>{emojis[0]?.character}</span>}
      </Button>
    </ButtonWrapper>
  );
};

EmojiButton.propTypes = {
  CATEGORY_DATA: PropTypes.array.isRequired,
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
  emojis: PropTypes.array.isRequired,
  setEmojisByCategory: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default EmojiButton;
