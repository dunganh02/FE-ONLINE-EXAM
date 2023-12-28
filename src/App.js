import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './components1/Layout1';
import Home from './pages/Home/Home';
import Content from './pages/Content/Content';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    return (
                    <Route exact path="/" element={<DefaultLayout children={<Home />} />} />
                    <Route exact path="/content" element={<DefaultLayout children={<Content />} />} />
                    );
                </Routes>
            </div>
        </Router>
    );
}

export default App;
