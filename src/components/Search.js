// Routes to this page once someone clicks on the Link Search to show info about songs
import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

const Search = function () {
    const apiKey = "f2173fa361a5723207fc6a1fa4c6af56";
    const apiUrl = "https://quiet-ridge-74718.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.track.get";

    const [ userInputTitle, setUserInputTitle] = useState("");
    const [ userInputArtist, setUserInputArtist] = useState("");
    const [ track, setTrack ] = useState({});

    function handleTitleInputChange (e) {
    setUserInputTitle(e.target.value);
    }

    function handleArtistInputChange (e) {
        setUserInputArtist(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();

        const url = new URL(apiUrl);
        url.search = new URLSearchParams({
            apikey: apiKey,
            q_track: userInputTitle,
            q_artist: userInputArtist
    });
        fetch(url)
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error();
                }
            })
                .then(function (jsonData) {
                    setTrack(jsonData.message.body.track);

                })
                .catch(function (error) {
                    console.log(error);
                })
    }
    
    return (
        <section id="search">
            <SearchForm handleTitleInputChange={handleTitleInputChange} handleArtistInputChange={handleArtistInputChange} handleSubmit={handleSubmit} />
    
            {
                track.track_name 
                ? 
                <SearchResult trackName={track.track_name} artistName={track.artist_name} albumName={track.album_name} trackLyrics={track.track_share_url} trackGenre={track.primary_genres.music_genre_list[0].music_genre.music_genre_name} />
                : 
                null			
            }
        </section>
    )
}


export default Search;