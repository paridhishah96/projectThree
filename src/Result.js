// Result component that appends if we GET track information from API

const Result = ({trackName, artistName, albumName, trackLyrics, trackGenre}) => {
    return (
        <section className='result wrapper'>
            <p>Some details about the song:</p>
			<ul>						
				<li>
					<p>	Name of the Song: <span>{trackName}</span></p>
				</li>
				<li>
					<p>	Artist Name: <span>{artistName}</span></p>
				</li>
				<li>
					<p>	Album Name: <span>{albumName}</span></p>
				</li>
				<li>
					<p>
						Lyrics: <a target="_blank" href={trackLyrics}>Click here</a>
					</p>
				</li>
				<li>
					<p>Genre of the song is: <span>{trackGenre}</span></p>
				</li>			
			</ul>
		</section>
    )
}

export default Result;