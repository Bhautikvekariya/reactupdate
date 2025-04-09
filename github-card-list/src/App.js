import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import CardList from "./components/CardList";

function App() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);


  const fetchProfiles = async () => {
 
      const response = await fetch("https://api.github.com/users/Bhautikvekariya");
      const data = await response.json();
      setProfiles([data]);
      setFilteredProfiles([data]);
    
  };

  const handleSearch = (query) => {
    const filtered = profiles.filter((profile) =>
      profile.login.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };


  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <CardList profiles={filteredProfiles} />
    </div>
  );
}

export default App;
