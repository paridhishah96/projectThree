import { Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Chart from './Chart';
import ErrorPage from './ErrorPage';
import Search from './Search';

const LandingPage = () => {
    
    return (
        <>
            <header>
                <div className="wrapper">
                    <h1>Song-Tastic</h1>
                    <h2>Welcome to your one stop shop for everything songs!</h2>
                    <p>Select from options below</p>
                </div>
                <div className="landingNav">
                    <nav>
                        <ul>
                            <li>
                                <HashLink to="/search#search">Info by Search</HashLink>
                            </li>
                            <li>
                                <HashLink to="/chart#chart">Chart by Country</HashLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Routes>
                <Route path="/search" element={ <Search /> } />
                <Route path="/chart" element={ <Chart /> } />
                <Route path="*" element={ <ErrorPage /> } />
            </Routes>
        </>
    )
}

export default LandingPage;
