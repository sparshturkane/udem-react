import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyBzEqMC8ypnMPseFmIrw4GcX1o0tIFiCbs';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo : null
        }

        // initializing videos searched
        YTSearch({key: API_KEY, term:'surfboards' }, (videos) =>{
            this.setState({
                videos:videos,
                selectedVideo : videos[4]
            });
            // console.log(videos);
        });
    }



    render(){
        return(
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={ (selectedVideo) => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
