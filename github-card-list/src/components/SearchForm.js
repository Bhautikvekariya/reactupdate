import React, {useState} from "react";

function SearchForm({onSearch}){
    const[query,setQuery]=useState("");

    const handleChange=(event)=>{
        setQuery(event.target.value);
    };

    const handleSubmit=(event)=>{
        event.preventDefault();
        onSearch(query);
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search Github users"/>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;