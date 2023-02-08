import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./home"
import App from "./App"
import News from "./news"
const Navbar = () => {
    return (
        <div> <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/app" element={<App />} />
                <Route path="/news" element={<News />} />
            </Routes>
        </Router></div>
    )
}

export default Navbar