import { useState } from "react";
import './searchbar.css';

const SearchBar = ({ allGuests }) => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");

  const search = (query) => {
    setInput(query);

    if (query === "") {
      setResults([]);
      return;
    }

    const filteredGuests = allGuests.filter((guest) =>
      guest.name.toLowerCase().startsWith(query.toLowerCase())
    );
    setResults(filteredGuests);
  };

  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => search(e.target.value)}
      />
      {results.length > 0 && (
        <ul className="resultsList">
          {results.map((guest, index) => (
            <li key={index}>{guest.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;