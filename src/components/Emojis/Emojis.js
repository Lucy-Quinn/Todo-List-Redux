import React, { useState, useEffect, useRef, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmojis } from '../../redux/actions/emojis';
import { EmojiWrapper, EmojiList, EmojiButton } from './Emojis.styled';
import PropTypes from 'prop-types';

const Emojis = ({
  singleEmoji,
  setSingleEmoji,
  setTextAreaValue,
  textAreaRef,
  theme,
}) => {
  const [isActive, setIsActive] = useState(false);
  const { emojis, error, isLoading } = useSelector(
    (state) => state.emojiReducer
  );

  const [emojiCategory, setEmojiCategory] = useState('');
  const [emojisByCategory, setEmojisByCategory] = useState([]);

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

  const dispatch = useDispatch();
  const refArray = useRef(emojis && emojis.map(() => createRef()));

  useEffect(() => {
    dispatch(getEmojis());
  }, []);

  const handleOnclickButton = () => {
    setIsActive(!isActive);
  };

  const handleEmoji = (ref) => {
    setSingleEmoji(ref.target.className);
    setTextAreaValue((prestate) => prestate + ref.target.className);
    textAreaRef = textAreaRef.current.focus();
  };

  const handleCategory = (e) => {
    setEmojiCategory(e.target.classList[2]);
    const filteredEmojis = emojis.filter((emojiObj) => {
      return emojiObj.group === e.target.classList[2];
    });
    setEmojisByCategory(filteredEmojis);
  };

  if (isLoading) 'Loading...';
  if (error) 'Error!';
  return (
    <EmojiWrapper>
      <EmojiButton
        onClick={handleOnclickButton}
        type="button"
        theme={theme}
        isActive={isActive}
      >
        {emojis[0].character}
      </EmojiButton>
      <div>
        {CATEGORY_DATA.map((category) => {
          return (
            <i
              key={category.id}
              className={`${category.className}  ${category.category}`}
              onClick={handleCategory}
            ></i>
          );
        })}
      </div>
      <EmojiList isActive={isActive}>
        {isActive &&
          emojisByCategory?.map((emojiObj, index) => {
            return (
              <p
                key={emojiObj.unicodeName}
                onClick={handleEmoji}
                ref={refArray.current[index]}
                className={emojiObj.character}
              >
                {emojiObj.character}
              </p>
            );
          })}
      </EmojiList>
    </EmojiWrapper>
  );
};
Emojis.propTypes = {
  setSingleEmoji: PropTypes.func.isRequired,
  setTextAreaValue: PropTypes.func.isRequired,
  textAreaRef: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  singleEmoji: PropTypes.string.isRequired,
};
export default Emojis;
