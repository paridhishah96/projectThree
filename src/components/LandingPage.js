import { Link, Routes, Route } from 'react-router-dom';
import Chart from './Chart';
import Search from './Search';



const LandingPage = () => {
    
    return (
        <>
        <header>
            <div className="wrapper">
                <h1>Everything Music</h1>
                <p>Welcome to your one stop shop for information about songs</p>
            </div>
            <div className="landingNav">
                    <nav>
                        <ul>

                            <li>
                                <Link to="/search">Search</Link>
                            </li>
                            <li>
                                <Link to="/chart">Chart</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
        </header>
        <Routes>
            <Route path="/search" element={ <Search /> } />
            <Route path="/chart" element={ <Chart /> } />

        </Routes>
        </>
    )
}

export default LandingPage;
