// Routes to this page once someone clicks on the Link to show top song chart by user selected country
import { useState } from "react";
import ChartForm from "./ChartForm";
import ChartResult from "./ChartResult";
import ErrorPage from "./ErrorPage";

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
                .catch(function () {
                    return (
                        <ErrorPage />
                    )
                });
    }

    
    return (
        <section className="chartSelect" id="chart">
            <ChartForm userChoice={userChoice} handleChange={handleChange} />
            <ChartResult trackList={trackList} />
        </section>
    )
}


export default Chart;