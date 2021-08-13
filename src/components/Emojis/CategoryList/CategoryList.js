import React from 'react';
import PropTypes from 'prop-types';

import { CategoryListWrapper } from './CategoryList.styled';
import CATEGORY_DATA from '../../AddNote/ButtonsAndEmojis/CATEGORY_DATA';

const CategoryList = ({
  setEmojisByCategory,
  emojis,
  isActive,
  theme,
  toggleTheme,
}) => {
  const handleCategory = (event) => {
    const filteredEmojis = emojis.filter((emojiObj) => {
      return emojiObj.group === event.target.classList[2];
    });
    setEmojisByCategory(filteredEmojis);
  };

  return (
    <>
      <CategoryListWrapper
        isActive={isActive}
        theme={theme}
        toggleTheme={toggleTheme}
      >
        {CATEGORY_DATA.map((category) => {
          return (
            <i
              key={category.id}
              className={`${category.className}  ${category.category}`}
              onClick={handleCategory}
            ></i>
          );
        })}
      </CategoryListWrapper>
    </>
  );
};
CategoryList.propTypes = {
  setEmojisByCategory: PropTypes.func.isRequired,
  emojis: PropTypes.array.isRequired,
  isActive: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  toggleTheme: PropTypes.object.isRequired,
};
export default CategoryList;
