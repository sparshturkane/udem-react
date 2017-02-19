import React from 'react';
import VideoListItem from './video_list_item'

class VideoList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){
        const videoItems = this.props.videos.map((video)=>{
            return (
                <VideoListItem video={video} onVideoSelect={this.props.onVideoSelect} key={video.etag}/>
            );
        });
        return(
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        );
    }
}

export default VideoList;
