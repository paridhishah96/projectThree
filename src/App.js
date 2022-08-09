import { useState } from 'react';
import './App.css';

//  https://quiet-ridge-74718.herokuapp.com/
// api key f1fc157fc587725a2aa64311ce48541f;
// const apiUrl = "https://quiet-ridge-74718.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search";
const apiKey = "f1fc157fc587725a2aa64311ce48541f"
// const url = new URL(apiUrl);
// url.search = new URLSearchParams({
//     apikey: apiKey,
//     q_track: "shake it off",
//     q_artist: "taylor swift"
// });
// fetch(url)
//     .then(function (response) {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error();
//         }
//     })
//         .then(function (jsonData) {
//         console.log(jsonData);
//         })
//         .catch(function () {
//         console.log("there's an error :(")
//         })

const apiUrlTwo = "https://quiet-ridge-74718.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.track.get";


function App() {
const [ userInput, setUserInput] = useState("");
const [genre, setGenre] = useState([])

function handleInputChange (e) {
  setUserInput(e.target.value)
}

function handleClick (e) {
	e.preventDefault();

	const urlTwo = new URL(apiUrlTwo);
	urlTwo.search = new URLSearchParams({
		apikey: apiKey,
		// track_id:  74376191,
		q_track: userInput,
		q_artist: "Queen"
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
        // console.log(jsonData.message.body.track.primary_genres.music_genre_list[0].music_genre.music_genre_name);
        setGenre(jsonData.message.body.track.primary_genres.music_genre_list[0].music_genre.music_genre_name)
        })
        .catch(function () {
        console.log("there's an error :(")
        })
}


  return (
    <div className="App">
      <h1>React app</h1>
      <form>
        <label htmlFor="songName">Song title</label>
        <input onChange={handleInputChange}  type="songName" name="songName" />

        {/* <label htmlFor="songName">Artist</label>
        <input onChange={handleInputChange}  type="songName" name="songName" /> */}

        <button onClick={handleClick}> Click to see the genres</button>
      </form>
      <p>Genre of the song is: {genre}</p>
    </div>
  );
}

export default App;
