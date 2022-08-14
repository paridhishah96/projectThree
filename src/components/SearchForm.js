const SearchForm = ({handleTitleInputChange, handleArtistInputChange,handleSubmit }) => {
    return (
        <div className='wrapper'>
			<form onSubmit={handleSubmit}>
				<label htmlFor="songName">Song Title</label>
				<input onChange={handleTitleInputChange}  type="songName" name="songName" required />

				<label htmlFor="artistName">Artist</label>
				<input onChange={handleArtistInputChange}  type="artistName" name="artistName" required/>

				<button>Submit</button>
			</form>
		</div>
    )
}

export default SearchForm;