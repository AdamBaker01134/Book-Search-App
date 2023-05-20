/**
 * Search component located at the top of the application.
 */

import React, { useState } from "react";

type SearchProps = {
    onSearch: (query: string) => void
}

const Search = ({ onSearch } : SearchProps) => {

    const [ query, setQuery ] = useState("");

    const handleClick = () => {
        onSearch(query);
        setQuery("");
    }

    return (
        <div className="horizontal-container">
            <input type="text" style={{width: "100%"}} value={query} onChange={(e) => setQuery(e.currentTarget.value)}/>
            <button onClick={handleClick}>Search</button>
        </div>
    );
}

export default Search;