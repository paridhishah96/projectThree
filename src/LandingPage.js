import { Link, Routes, Route } from 'react-router-dom';
import Search from './Search';



const LandingPage = () => {
    
    return (
        <>
        <header>
            <div className="wrapper">
                <h1>Everything Music</h1>
                <p>Welcome to your one stop shop for information about songs</p>
                <div className="landingNav">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/search">Search</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <Routes>
            <Route path="/search" element={ <Search /> } />


        </Routes>
        </>
    )
}

export default LandingPage;
