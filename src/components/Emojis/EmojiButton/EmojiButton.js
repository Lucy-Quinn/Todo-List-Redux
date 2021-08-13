import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './EmojiButton.styled';
import CATEGORY_DATA from '../../AddNote/ButtonsAndEmojis/CATEGORY_DATA';

const EmojiButton = ({
  isActive,
  setIsActive,
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
    <>
      <Button
        onClick={handleOnclickButton}
        type="button"
        theme={theme}
        isActive={isActive}
      >
        {<span>{emojis[0]?.character}</span>}
      </Button>
    </>
  );
};

EmojiButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  setIsActive: PropTypes.func.isRequired,
  emojis: PropTypes.array.isRequired,
  setEmojisByCategory: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};

export default EmojiButton;
