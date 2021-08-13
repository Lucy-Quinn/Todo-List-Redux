import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import EmojiButton from '../../Emojis/EmojiButton';
import Emojis from '../../Emojis/index';
import { ButtonWrapper, NoteAndEmojiButton } from './ButtonsAndEmojis.styled';
import { getEmojis } from '../../../redux/actions/emojis';

const ButtonsAndEmojis = ({
  theme,
  setTextAreaValue,
  textAreaRef,
  isLightTheme,
  currentTodo,
}) => {
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
    <ButtonWrapper theme={theme}>
      <NoteAndEmojiButton isActive={isActive}>
        <button className="cta-button">
          {currentTodo.note ? `Update note` : `Add note`}
        </button>
        <EmojiButton
          isActive={isActive}
          setIsActive={setIsActive}
          emojis={emojis}
          setEmojisByCategory={setEmojisByCategory}
          theme={theme}
        />
      </NoteAndEmojiButton>
      <Emojis
        setTextAreaValue={setTextAreaValue}
        textAreaRef={textAreaRef}
        theme={theme}
        isLightTheme={isLightTheme}
        isActive={isActive}
        emojisByCategory={emojisByCategory}
        setEmojisByCategory={setEmojisByCategory}
      />
    </ButtonWrapper>
  );
};

ButtonsAndEmojis.propTypes = {
  currentTodo: PropTypes.object.isRequired,
  setTextAreaValue: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  isLightTheme: PropTypes.bool.isRequired,
  textAreaRef: PropTypes.object.isRequired,
};
export default ButtonsAndEmojis;
