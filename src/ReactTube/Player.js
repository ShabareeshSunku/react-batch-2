import React, { Component } from 'react';

export default class Player extends Component {
    constructor(){
        super()
        this.videoRef = React.createRef()
    }
    render() {
        const video = this.props.video || {}
        const src = video.sources && video.sources.length && video.sources[0]
        return (
            src.length ? (
                <video
                    src={src}
                    className="video-player"
                    controls={true}
                    autoPlay={false}
                    ref={(reference)=>{this.videoRef = reference}}
                />

            ) : null
        )
    }
}