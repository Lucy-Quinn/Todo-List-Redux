import React, { useRef, createRef } from 'react';
import { EmojiListWrapper } from './EmojiList.styled';
import PropTypes from 'prop-types';
import { map } from 'lodash';

const EmojiList = ({
  setTextAreaValue,
  textAreaRef,
  emojisByCategory,
  emojis,
  isActive,
}) => {
  const refArray = useRef(emojis && map(emojis, () => createRef()));

  const handleEmoji = (ref) => {
    setTextAreaValue((prestate) => prestate + ref.target.className);
    textAreaRef = textAreaRef.current.focus();
  };

  return (
    <EmojiListWrapper isActive={isActive}>
      {map(emojisByCategory, (emojiObj, index) => {
        return (
          <span
            key={emojiObj.unicodeName}
            onClick={handleEmoji}
            ref={refArray.current[index]}
            className={emojiObj.character}
          >
            {emojiObj.character}
          </span>
        );
      })}
    </EmojiListWrapper>
  );
};

EmojiList.propTypes = {
  setTextAreaValue: PropTypes.func.isRequired,
  textAreaRef: PropTypes.object.isRequired,
  emojisByCategory: PropTypes.array.isRequired,
  emojis: PropTypes.array.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default EmojiList;
