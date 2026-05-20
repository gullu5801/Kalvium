function GenreFilter({ genre, setGenre }) {
  return (
    <select value={genre} onChange={(e) => setGenre(e.target.value)}>
      <option value="">All Genres</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Action">Action</option>
      <option value="Romance">Romance</option>
      <option value="Drama">Drama</option>
      <option value="Fantasy">Fantasy</option>
    </select>
  );
}

export default GenreFilter;