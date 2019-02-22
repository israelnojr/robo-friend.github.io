import React from 'react';

const SearchBox = ({ searchField, searhChange }) => {
    return (
        <div className='pa2'>
            <input className='tc pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search_robots'
            onChange={searhChange}
            />
        </div>
    );
};

export default SearchBox;