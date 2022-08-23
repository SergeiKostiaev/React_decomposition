import './App.css';
import Header from "./Components/Header/Header";
import SearchBlock from "./Components/SearchBlock/SearchBlock";
import Banner from "./Components/Banner/Banner";
import Media from "./Components/Media/Media";

function App() {
    return (
        <div className="App">
            <Header/>
            <SearchBlock/>
            <div>
                <Banner/>
            </div>
            <Media/>
        </div>
    );
}

export default App;
