import './assets/App.css'
import Writing from "./components/Writing.tsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "lucide-react";
import SearchHistoryList from "./components/SearchHistoryList.tsx";
import {Header} from "./components/Header.tsx";
import {Navigation} from "./components/Navigation.tsx";

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header/>
            <div className="flex">
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/writing" element={<Writing/>}/>
                    <Route path="/search-histories" element={<SearchHistoryList/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
