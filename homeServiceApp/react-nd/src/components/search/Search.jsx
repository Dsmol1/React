import React, { useState } from 'react';
import styles from "./Search.module.scss";

export default function SearchBar() {
    const [query, setQuery] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', query);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.search}>
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
