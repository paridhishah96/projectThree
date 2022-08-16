import { Link } from "react-router-dom";


const ChartResult = ({trackList}) => {
    return(
        <div className="wrapper">
            <section className="chartResults results">
                {trackList
                ? trackList.map(trackObj => {
                    return (
                        <div className="trackContainer" key={trackObj.track.track_id}>
                            <p>Song: {trackObj.track.track_name}</p>
                            <p>Album: {trackObj.track.album_name}</p>
                            <p>Artist: 
                                <Link to="/artist/:artistId">
                                        {trackObj.track.artist_name}
                                </Link>
                            </p>
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
    )
}

export default ChartResult;