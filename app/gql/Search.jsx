import React from 'react'
import { SearchBarProps } from '@/app/components/type';
const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <input
            type="text"
            placeholder="Search films..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded"
        />
    )
}

export default SearchBar;
