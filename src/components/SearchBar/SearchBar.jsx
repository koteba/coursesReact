import './SearchBar.css'
const SearchBar = ({ input, btn }) => {
  return (
    <div className="search-bar">
      <input type={input.type} placeholder={input.placeholder} />
      <button class="explore-btn">{btn}</button>
    </div>
  );
}

export default SearchBar


