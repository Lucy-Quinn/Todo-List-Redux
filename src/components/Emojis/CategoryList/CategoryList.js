import React from 'react';
import PropTypes from 'prop-types';

import { CategoryListWrapper } from './CategoryList.styled';

const CategoryList = ({
  CATEGORY_DATA,
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
    <div>
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
    </div>
  );
};
CategoryList.propTypes = {
  CATEGORY_DATA: PropTypes.array.isRequired,
  setEmojisByCategory: PropTypes.func.isRequired,
  emojis: PropTypes.array.isRequired,
  isActive: PropTypes.bool.isRequired,
  theme: PropTypes.object.isRequired,
  toggleTheme: PropTypes.bool.isRequired,
};
export default CategoryList;
