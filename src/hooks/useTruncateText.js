import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useWindowSize from './useWindowSize';

function useTruncateText(str, lengthOfStr, typeOfText) {
  const currentText = str;
  const [text, setText] = useState(currentText);

  const { width } = useWindowSize();
  const truncateText = (str, n) => {
    const newTitle = str.substr(0, n - 1) + '...';
    str?.length > n ? setText(newTitle) : setText(str);
  };

  useEffect(() => {
    truncateText(str, lengthOfStr);
  }, [text, currentText, str, lengthOfStr]);

  if (width >= 768) {
    return typeOfText === 'header' ? <h2>{str}</h2> : <p>{str}</p>;
  }
  return typeOfText === 'header' ? <h2>{text}</h2> : <p>{text}</p>;
}

useTruncateText.propTypes = {
  str: PropTypes.string.isRequired,
  lengthOfStr: PropTypes.number.isRequired,
  typeOfText: PropTypes.string.isRequired,
};

export default useTruncateText;
