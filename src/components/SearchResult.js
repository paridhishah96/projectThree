// Result component that appends if we GET track information from API

const SearchResult = ({trackName, artistName, albumName, trackLyrics, trackGenre}) => {
    return (
        <section className='results searchResult wrapper'>
			<ul>						
				<li>
					<p>Song: <span>{trackName}</span></p>
				</li>
				<li>
					<p>	Artist: <span>{artistName}</span></p>
				</li>
				<li>
					<p>	Album: <span>{albumName}</span></p>
				</li>
				<li>
					<p>
						Lyrics: <a target="_blank" rel="noopener noreferrer" href={trackLyrics}>Click here</a>
					</p>
				</li>		
			</ul>
		</section>
    )
}

export default SearchResult;