import React, { Component } from 'react';
import ContactList from './ContactList'
import './contacts.css'
import FavoritesContext from './FavoritesContext'
export default class Contacts extends Component {
    constructor() {
        super()
        this.state = {
            contacts: [],
            theme: 'light',
            favorites: []
        }
    }
    processData(results) {
        let contacts = []
        let resultsLen = results.length
        //console.log(results)
        for (let i = 0; i < resultsLen; i++) {
            let ithResult = results[i]
            let contactObj = {
                name: `${ithResult.name.title} ${ithResult.name.first} ${ithResult.name.last}`,
                email: ithResult.email,
                thumbnail: ithResult.picture.large,
                address: `${ithResult.location.street}, ${ithResult.location.city}, ${ithResult.location.state} `,
                id: ithResult.login.uuid
            }
            contacts.push(contactObj)
        }
        return contacts
    }
    changeTheme = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        })
    }
    addFavorite = (userId) => {
        let currFavs = []
        try {
            currFavs = localStorage.getItem('my-favorites') || '[]'
            currFavs = JSON.parse(currFavs)
        } catch (e) {
            console.log(e)
        }
        currFavs.push(userId)
        localStorage.setItem('my-favorites', JSON.stringify(currFavs))
        this.setState({
            favorites: currFavs
        })
    }
    removeFavorite = (userId) => {
        let currFavs = []
        try {
            currFavs = localStorage.getItem('my-favorites') || '[]'
            currFavs = JSON.parse(currFavs)
        } catch (e) {
            console.log(e)
        }
        currFavs = currFavs.filter((fav) => {
            if (fav !== userId) {
                return true
            } else {
                return false
            }
        })
        localStorage.setItem('my-favorites', JSON.stringify(currFavs))
        this.setState({
            favorites: currFavs
        })
    }
    componentDidMount() {
        const me = this
        fetch('https://randomuser.me/api/?results=50&seed=abc')
            .then((resp) => resp.json())
            .then(function (data) {
                let contacts = me.processData(data.results)
                me.setState({
                    contacts: contacts
                })
            })
            .catch(err => console.log(err))

        let currFavs = []
        try {
            currFavs = localStorage.getItem('my-favorites') || '[]'
            currFavs = JSON.parse(currFavs)
        } catch (e) {
            console.log(e)
        }
        if (currFavs.length > 0) {
            this.setState({
                favorites: currFavs
            })
        }
    }


    render() {
        const contacts = this.state.contacts
        const theme = this.state.theme
        const favorites = this.state.favorites
        const contextObj = {
            favorites: favorites,
            addFavorite: this.addFavorite,
            removeFavorite: this.removeFavorite
        }
        return (
            <FavoritesContext.Provider value={contextObj}>
                <div className={theme === 'light' ? 'lighttheme' : 'darktheme'}>
                    <div>
                        <button onClick={this.changeTheme}>Update Theme</button>
                    </div>
                    <ContactList
                        contacts={contacts}
                    />
                </div>
            </FavoritesContext.Provider>
        )
    }
}