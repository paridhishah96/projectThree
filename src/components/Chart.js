// Routes to this page once someone clicks on the Link Search to show info about songs
import { useState } from "react";

const Chart = function () {
    const apiKey = "f2173fa361a5723207fc6a1fa4c6af56";
    const apiUrl = "https://quiet-ridge-74718.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get";

    const [ userChoice, setUserChoice ] = useState("placeholder");
    const [ trackList, setTrackList ] = useState([]);

    const handleChange = (e) => {
        e.preventDefault();
        setUserChoice(e.target.value);

        const url = new URL(apiUrl);
        url.search = new URLSearchParams({
            apikey: apiKey,
            country: userChoice,
            chart_name: "hot",
            page: 1,
            page_size: 10
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
                    setTrackList(jsonData.message.body.track_list);
    
                })
                .catch(function (error) {
                    console.log(error);
                });
    }

    
    return (
        <section className="chartSelect" id="chart">
            <div className="wrapper">
                <form>
                    <label htmlFor="countrySelect">Select a Country</label>
                    <select 
                    id="countrySelect" 
                    name="countrySelect"
                    value={userChoice}
                    onChange={handleChange}>
                        <option value="placeholder" disabled>Pick one:</option>
                        <option value="ar">Argentina</option>
                        <option value="au">Australia</option>
                        <option value="br">Brazil</option>
                        <option value="ca">Canada</option>
                        <option value="cn">China</option>
                        <option value="cr">Costa Rica</option>
                        <option value="cu">Cuba</option>
                        <option value="fr">France</option>
                        <option value="in">India</option>
                        <option value="it">Italy</option>
                        <option value="za">South Africa</option>
                        <option value="kr">South Korea</option>
                        <option value="ng">Nigeria</option>
                        <option value="rw">Rwanda</option>
                        <option value="us">United States of America</option>
                    </select>           
                </form>
            </div>
            <div className="wrapper">
                <section className="chartResults results">
                    {trackList
                    ? trackList.map(trackObj => {
                        return (
                            <div className="trackContainer" key={trackObj.track.track_id}>
                                <p>Song: {trackObj.track.track_name}</p>
                                <p>Album: {trackObj.track.album_name}</p>
                                <p>Artist: {trackObj.track.artist_name}</p>
                                <p>
                                    Lyrics: <a target="_blank" rel="noopener noreferrer" href={trackObj.track.track_share_url}>Click here</a>
                                </p>
                            </div>
                        );
                        })
                    : <p>Data not available at the moment. Please try after some time!</p>
                }
                </section>
            </div>
        </section>
    )
}


export default Chart;