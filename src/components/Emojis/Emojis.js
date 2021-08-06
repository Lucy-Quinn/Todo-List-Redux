import React, { useState, useEffect, useRef, createRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmojis } from '../../redux/actions/emojis';
import { EmojiWrapper } from './Emojis.styled';
import PropTypes from 'prop-types';

const Emojis = ({ setSingleEmoji, setTextAreaValue, textAreaRef }) => {
  const [isActive, setIsActive] = useState(false);
  const { emojis, error, isLoading } = useSelector(
    (state) => state.emojiReducer
  );

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

  if (isLoading) 'Loading...';
  if (error) 'Error!';

  return (
    <div>
      <button onClick={handleOnclickButton} type="button">
        Add your emoji
      </button>
      <EmojiWrapper>
        {isActive &&
          emojis?.map((emojiObj, index) => {
            return (
              <p
                key={emojiObj.codePoint}
                onClick={handleEmoji}
                ref={refArray.current[index]}
                className={emojiObj.character}
              >
                {emojiObj.character}
              </p>
            );
          })}
      </EmojiWrapper>
    </div>
  );
};
Emojis.propTypes = {
  setSingleEmoji: PropTypes.func.isRequired,
  setTextAreaValue: PropTypes.func.isRequired,
  textAreaRef: PropTypes.object.isRequired,
};
export default Emojis;
