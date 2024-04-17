import React from 'react';

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;