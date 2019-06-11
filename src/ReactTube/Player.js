import React, { Component } from 'react';

export default class Player extends Component {
    constructor() {
        super()
        this.videoRef = React.createRef()
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        return this.videoRef.currentTime
    }
    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if(this.props.index !== prevProps.index){
            this.props.onSaveVideoProgress(snapshot, prevProps.index)
            this.videoRef.currentTime = this.props.video.progress || 0
            this.videoRef.play()
        }
    }

    refHandler = (elm)=>{
        this.videoRef = elm
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
                    ref={this.refHandler}
                    id="video-player"
                />

            ) : null
        )
    }
}