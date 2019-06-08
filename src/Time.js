import React, { Component } from 'react';

export default class Time extends Component{
    constructor(){
        super()
        console.log('==> constructor')
    }
    componentWillMount(){
      console.log('==> componentWillMount')
    }
    render(){
        const time = this.props.time
        console.log('===> render')
        return <h1>{time}</h1>
    }
    componentDidMount(){
        console.log('==> componentDidMount')
    }
    componentWillReceiveProps(nextProps){
      console.log('====> componentWillReceiveProps',this.props, nextProps)
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('===> shouldComponentUpdate')
        return false
    }
    
    componentWillUpdate(nextProps, nextState){
        console.log('===> componentWillUpdate')
    }

    componentDidUpdate(prevProps, prevState){
      console.log('===> componentDidUpdate')
    }
    
}
