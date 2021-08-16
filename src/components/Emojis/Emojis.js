import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getEmojis } from '../../redux/actions/emojis';
import EmojiList from './EmojiList';
import CategoryList from './CategoryList';

const Emojis = ({
  setTextAreaValue,
  textAreaRef,
  emojisByCategory,
  setEmojisByCategory,
  theme,
  isLightTheme,
  isActive,
}) => {
  const { emojis, error, isLoading } = useSelector(
    (state) => state.emojiReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmojis());
  }, []);

  if (isLoading) 'Loading...';
  if (error) 'Error!';

  return (
    <>
      {isActive && (
        <>
          <EmojiList
            setTextAreaValue={setTextAreaValue}
            textAreaRef={textAreaRef}
            emojisByCategory={emojisByCategory}
            emojis={emojis}
            isActive={isActive}
          />
          <CategoryList
            setEmojisByCategory={setEmojisByCategory}
            emojis={emojis}
            isActive={isActive}
            theme={theme}
            isLightTheme={isLightTheme}
          />
        </>
      )}
    </>
  );
};

Emojis.propTypes = {
  setTextAreaValue: PropTypes.func.isRequired,
  textAreaRef: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isLightTheme: PropTypes.bool.isRequired,
  emojisByCategory: PropTypes.array.isRequired,
  setEmojisByCategory: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Emojis;
