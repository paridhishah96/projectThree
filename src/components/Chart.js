// Routes to this page once someone clicks on the Link Search to show info about songs
import { useState } from "react";

const Chart = function () {
    const apiKey = "f1fc157fc587725a2aa64311ce48541f";
    const apiUrl = "https://quiet-ridge-74718.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get";

    const [ trackList, setTrackList ] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = new URL(apiUrl);
        url.search = new URLSearchParams({
            apikey: apiKey,
            country: "in",
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
                })
    }

    
    return (
        <section className="chartSelect">
            <div className="wrapper">
                <form>
                    <select id="photoOrientation" name="photoOrientation">
                        <option value="ca">Canada</option>
                        <option value="us">United States of America</option>
                        {/* <option value="landscape">landscape</option>
                        <option value="portrait">portrait</option> */}
                    </select>
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <div className="wrapper">
                <section className="chartResults">
                    {trackList.map(trackObj => {
                        return (
                            <div className="trackContainer" key={trackObj.track.track_id}>
                                <p>Song: {trackObj.track.track_name}</p>
                                <p>Album: {trackObj.track.album_name}</p>
                                <p>Artist: {trackObj.track.artist_name}</p>
                                <p>
                                    Lyrics: <a rel="noopener" href={trackObj.track.track_edit_url}>Click here</a>
                                </p>
                            </div>
                        );
                    })}
                </section>
            </div>
        </section>
    )
}


export default Chart;