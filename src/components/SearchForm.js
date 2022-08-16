const SearchForm = ({handleTitleInputChange, handleArtistInputChange,handleSubmit }) => {
    return (
        <div className='wrapper'>
			<form onSubmit={handleSubmit}>
				<label htmlFor="songName">Song Title</label>
				<input onChange={handleTitleInputChange}  type="songName" name="songName" placeholder="Try Papaoutai" required />

				<label htmlFor="artistName">Artist</label>
				<input onChange={handleArtistInputChange} placeholder="Try Stromae"  type="artistName" name="artistName" required/>

				<button type="submit">Show Details</button>
			</form>
		</div>
    )
}

export default SearchForm;