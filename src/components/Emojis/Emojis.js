import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { getEmojis } from '../../redux/actions/emojis';
import EmojiList from './EmojiList';
import CategoryList from './CategoryList';
import EmojiButton from './EmojiButton';

const CATEGORY_DATA = [
  { id: 1, className: 'fas fa-smile-beam', category: 'smileys-emotion' },
  { id: 2, className: 'fas fa-hamburger', category: 'food-drink' },
  { id: 3, className: 'fas fa-child', category: 'people-body' },
  { id: 4, className: 'fas fa-dog', category: 'animals-nature' },
  { id: 5, className: 'fas fa-plane', category: 'travel-places' },
  { id: 6, className: 'fas fa-snowboarding', category: 'activities' },
  { id: 7, className: 'fas fa-lightbulb', category: 'objects' },
  { id: 8, className: 'fas fa-icons', category: 'symbols' },
  { id: 9, className: 'far fa-flag', category: 'flags' },
];

const Emojis = ({ setTextAreaValue, textAreaRef, theme }) => {
  const [isActive, setIsActive] = useState(false);
  const [emojisByCategory, setEmojisByCategory] = useState([]);
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
      <EmojiButton
        isActive={isActive}
        setIsActive={setIsActive}
        CATEGORY_DATA={CATEGORY_DATA}
        emojis={emojis}
        setEmojisByCategory={setEmojisByCategory}
        theme={theme}
      />
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
            CATEGORY_DATA={CATEGORY_DATA}
            setEmojisByCategory={setEmojisByCategory}
            emojis={emojis}
            isActive={isActive}
            theme={theme}
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
};
export default Emojis;
