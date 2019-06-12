import React, { Component } from 'react'
import mockVideos from './videos-mock'
import Playlist from './Playlist'
import Player from './Player'
import VideoMeta from './VideoMeta'
import './react-tube.css'

export default class ReactTube extends Component {
    constructor() {
        super()
        this.state = {
            videos: mockVideos,
            selectedIndex: 3
        }
        this.onVideoClick = this.onVideoClick.bind(this)
    }

    // onVideoClick = (index)=> {
    //     this.setState({
    //         selectedIndex: index
    //     })
    // }
    onVideoClick(index) {
        console.log(index)
        this.setState({
            selectedIndex: index
        })
    }

    saveVideoProgress = (seconds, index) => {
        const videos = this.state.videos.map((video, videoIndex) => {
            if (index === videoIndex) {
                return { ...video, progress: seconds }
            } else {
                return video
            }
        })
        this.setState({ videos: videos })
    }
    render() {
        // const videos = this.state.videos || []
        // const selectedIndex = this.state.selectedIndex
        const { videos = [], selectedIndex } = this.state
        return (
            <section className="root-container">
                <header>
                    ReactTube
                </header>
                <div className="container">
                    <div className="container-left">
                        <Player
                            video={videos[selectedIndex]}
                            onSaveVideoProgress={this.saveVideoProgress}
                            index={selectedIndex}
                        />
                        <VideoMeta {...videos[selectedIndex]} />
                    </div>
                    <div className="container-right">
                        <Playlist videos={videos} videoClickHandler={this.onVideoClick} />
                    </div>
                </div>
            </section>
        )
    }
}