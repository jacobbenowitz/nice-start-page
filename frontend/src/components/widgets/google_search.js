import React, {useState} from "react";

const GoogleSearch = () => {

  const [query, updateQuery] = useState("");

  const handleSearch = e => {
    e.preventDefault();
    newSearch(query);
    updateQuery("")
  }


  const newSearch = query => {
    window.open(`https://google.com/search?q=${query}`, '_blank')
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={e => updateQuery(e.target.value)}
          value={query}
          placeholder="Search Google"
        >

        </input>
      </form>
    </div>
  )
}

export default GoogleSearch;