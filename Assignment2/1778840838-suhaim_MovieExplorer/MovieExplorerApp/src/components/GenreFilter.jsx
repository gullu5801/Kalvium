function GenreFilter({ genre, setGenre }) {
  return (
    <select
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
      className="genre-filter"
    >
      <option value="All">All Genres</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Action">Action</option>
    </select>
  );
}

export default GenreFilter;