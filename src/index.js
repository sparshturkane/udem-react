import _ from 'lodash';
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
        this.videoSearch("surfboards")

    }


    videoSearch(term){
        YTSearch({key: API_KEY, term: term }, (videos) =>{
            this.setState({
                videos:videos,
                selectedVideo : videos[0]
            });
            // console.log(videos);
        });
    }

    render(){
        const videoSearch = _.debounce( (term) => { this.videoSearch(term) },300 );
        return(
            <div>
                <SearchBar onSearch={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={ (selectedVideo) => this.setState({selectedVideo}) }
                    videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
