import React from 'react';

class VideoListItem extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    handleOnClick(event){
        event.preventDefault();
        this.props.onVideoSelect(this.props.video)
    }
    render(){
        const video = this.props.video;
        const imageUrl = video.snippet.thumbnails.default.url;

        return(
            <li className="list-group-item" onClick={this.handleOnClick.bind(this)}>
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageUrl} alt={video.snippet.title}/>
                    </div>

                    <div className="media-body">
                        <div className="media-heading" >{video.snippet.title}</div>
                    </div>

                </div>
            </li>
        );
    }
}

export default VideoListItem;
