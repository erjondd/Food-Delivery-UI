import SearchIcon from "../../assets/SearchIcon";

const SearchBar = () => {
  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    console.log("Search term:", searchTerm);
  };
  return (
    <div>
      <input type="text" placeholder="Search..." onChange={handleSearch} />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
