import React from 'react'
import Time from './Time'
class Clock extends React.Component {
    constructor() {
        super()
        this.state = {
            time: new Date().toString()
        }
        this.timer = null
    }
    componentDidMount() {
        const me = this
        this.timer = setInterval(function () {
            me.setState({
                time: new Date().toString()
            })
        }, 10000)
    }

    render() {
        const time = this.state.time
        return (
            <Time time={time} />
        )
    }
}
export default Clock