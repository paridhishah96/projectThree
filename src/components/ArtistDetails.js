// import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import { useState } from "react";


// const ArtistDetails = () => {
//     const [ albumList, setAlbumList ] = useState([]);

//     const {artist_name, artist_id} = useParams();



//     // const apiKey = "f2173fa361a5723207fc6a1fa4c6af56";
//     // const apiUrl = "https://quiet-ridge-74718.herokuapp.com/http://api.musixmatch.com/ws/1.1/artist.albums.get";
//     const url = new URL(apiUrl);
//         url.search = new URLSearchParams({
//             apikey: apiKey,
//             artist_id: 24410788,
//             g_album_name: 1,
//             s_release_date: "desc",
//             page_size: 10,
//             page: 1
//         });
//         fetch(url)
//             .then(function (response) {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw new Error();
//                 }
//             })
//                 .then(function (jsonData) {
//                     console.log(jsonData)
//                     // if API call is successful, set albumList state to the returned data  
//                     setAlbumList(jsonData.message.body.album_list);
//                 })
//                 .catch(function (error) {
//                     console.log(error);
//                 });
                
//     return(
//         <div className="wrapper">
//             <section className="albumResults" id='artistDetails'>
//                 <h3>{artist_name} list of most recent 10 albums</h3>
//                 <div className="artistAlbums">
//                     {albumList
//                     ? albumList.map(albumObj => {
//                         return (
//                             <div className="albumContainer" key={albumObj.album.album_id}>
//                                 <p>Album: {albumObj.album.album_name}</p>
//                                 <p>Label: {albumObj.album.album_name}</p>
//                                 <p>Release Date: {albumObj.album.album_release_date}</p>
//                             </div>
//                         );
//                         })
//                     : <p>Data not available at the moment. Please try after some time.</p>
//                     }
//                 </div>
//             </section>
//         </div>
//     )
// }




// export default ArtistDetails;