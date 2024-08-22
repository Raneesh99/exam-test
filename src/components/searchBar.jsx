import React, { useState } from 'react'
import "./searchBar.css"
import {Search,} from "react-bootstrap-icons";
import { Button } from 'react-bootstrap';

const SearchBar = () => {
    const [searchR, setSearchR] = useState("")

    const handleInputChange = (event) => {
        setSearchR(event.target.value);
    }
    const handleSearch = () => {
        console.log('Searching for:', searchR);
    }

    return (
        <div className="search-bar-container">
            <div className="search-bar-wrapper">
            <Button
                    onClick={handleSearch}
                    className="search-button"
                >
                    <Search/>
                </Button>
                <input
                    type="text"
                    placeholder="Search for your preferred city..."
                    value={searchR}
                    onChange={handleInputChange}
                    className="search-input"
                />
            </div>
        </div>
    )
}

export default SearchBar