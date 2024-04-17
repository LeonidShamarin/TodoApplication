import React from 'react';

interface FilterButtonsProps {
  setFilter: (filter: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
      <button onClick={() => setFilter('incomplete')}>Incomplete</button>
    </div>
  );
};

export default FilterButtons;