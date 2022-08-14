import { Link, Routes, Route } from 'react-router-dom';
import Chart from './Chart';
import Search from './Search';



const LandingPage = () => {
    
    return (
        <>
        <header>
            <div className="wrapper">
                <h1>Song-tastic</h1>
                <h2>Welcome to your one stop shop for everything songs!</h2>
            </div>
            <div className="landingNav">
                    <nav>
                        <ul>

                            <li>
                                <Link to="/search">Info by Search</Link>
                            </li>
                            <li>
                                <Link to="/chart">Charts by Country</Link>
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
