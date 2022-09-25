import React, { FC } from 'react';
import { Icon } from '../icon/Icon';
import './SearchBar.sass';

interface SearchBarProps {
  onClick?: any;
}

const SearchBar: FC<SearchBarProps> = ({ onClick }) => {
  return (
    <div className="search-wrapper" onClick={onClick}>
      <Icon name="search" height={'16'} width={'16'} />
      <input className="search" placeholder="Поиск" />
    </div>
  );
};

export default SearchBar;
