import './App.css';
import Footer from './Footer';
import LandingPage from './LandingPage';


function App() {
  	return (
		<div className="App">
			<LandingPage />

			<Footer />
		</div>
  	);
}


export default App;


// add routes to :
// song information http://api.musixmatch.com/ws/1.1/matcher.track.get // already done
// get top songs by country (have continent?) https://developer.musixmatch.com/documentation/api-reference/track-chart-get
// get album discography https://developer.musixmatch.com/documentation/api-reference/artist-albums-get
// artist information https://developer.musixmatch.com/documentation/api-reference/artist-search
 