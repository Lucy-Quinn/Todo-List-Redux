import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function useTrucateText(str, lengthOfStr, typeOfText) {
  const currentText = str;
  const [text, setText] = useState(currentText);

  const truncateText = (str, n) => {
    const newTitle = str.substr(0, n - 1) + '...';
    str?.length > n ? setText(newTitle) : setText(str);
  };

  useEffect(() => {
    truncateText(str, lengthOfStr);
  }, [text, currentText, str, lengthOfStr]);

  return typeOfText === 'header' ? <h2>{text}</h2> : <p>{text}</p>;
}

useTrucateText.propTypes = {
  str: PropTypes.string.isRequired,
  lengthOfStr: PropTypes.number.isRequired,
  typeOfText: PropTypes.string.isRequired,
};

export default useTrucateText;
