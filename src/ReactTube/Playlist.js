import React from 'react';

function PlayList(props) {
    const videos = props.videos
    return (
        <div>
            {
                videos.map((video, index) => {
                    return (
                        <div className="video-item" onClick={() => { props.videoClickHandler(index) }}>
                            <div className="thumbnail-container">
                                <img src={video.thumb} alt="" className="thumbnail" />
                            </div>
                            <div className="text-container">
                                <h3>{video.title}</h3>
                                <p className="subtitle">{video.subtitle}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PlayList