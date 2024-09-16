import React, { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the search logic here
        console.log('Searching for:', query);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search for services..."
            />
            <button type="submit">Search</button>
        </form>
    );
};
