import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBzEqMC8ypnMPseFmIrw4GcX1o0tIFiCbs';
import SearchBar from './components/search_bar';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
        }

        // initializing videos searched
        YTSearch({key: API_KEY, term:'surfboards' }, videos =>{
            this.setState({videos})
            console.log(videos);
        });
    }



    render(){
        return(
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
