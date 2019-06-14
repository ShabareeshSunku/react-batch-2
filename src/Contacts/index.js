import React, { Component } from 'react';

export default class Contacts extends Component {
    constructor() {
        super()
        this.state = {
            contacts: []
        }
    }
    componentDidMount() {
        const me = this
        fetch('https://randomuser.me/api/?results=5')
            .then((resp) => resp.json())
            .then(function (data) {
                me.setState({
                    contacts: data.results
                })
            })
            .catch(err => console.log(err))
    }


    render() {
        const contacts = this.state.contacts
        return (
            <div className="container">
                {
                    JSON.stringify(contacts)
                }
            </div>
        )
    }
}