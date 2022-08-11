import './App.css';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';

const apiKey = "f1fc157fc587725a2aa64311ce48541f"
const apiUrlTwo = "https://quiet-ridge-74718.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.track.get";


function App() {
const [ userInputTitle, setUserInputTitle] = useState("");
const [ userInputArtist, setUserInputArtist] = useState("");
const [genre, setGenre] = useState([])

function handleTitleInputChange (e) {
  setUserInputTitle(e.target.value)
}

function handleArtistInputChange (e) {
	setUserInputArtist(e.target.value)
  }

function handleClick (e) {
	e.preventDefault();

	const urlTwo = new URL(apiUrlTwo);
	urlTwo.search = new URLSearchParams({
		apikey: apiKey,
		q_track: userInputTitle,
		q_artist: userInputArtist
});
  fetch(urlTwo)
    .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error();
        }
    })
        .then(function (jsonData) {
          console.log(jsonData);
          setGenre(jsonData.message.body.track.primary_genres.music_genre_list[0].music_genre.music_genre_name)
        })
        .catch(function (error) {
          console.log(error)
        })
}


  return (
    <div className="App">
      <Header />
      <div className='wrapper'>
        <form onClick={handleClick}>
          <label htmlFor="songName">Song Title</label>
          <input onChange={handleTitleInputChange}  type="songName" name="songName" />

          <label htmlFor="artistName">Artist</label>
          <input onChange={handleArtistInputChange}  type="artistName" name="artistName" />

          <button > Click to see the genres</button>
        </form>
      </div>
      <p className='result wrapper'>Genre of the song is: {genre}</p>
      <Footer />
    </div>
  );
}

export default App;
