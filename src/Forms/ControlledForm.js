import React, { Component } from 'react';
import PersonDetails from './PersonDetails'
import './forms.css'

export default class ControlledForm extends Component {
    constructor() {
        super()
        this.state = {
            fullname: '',
            email: '',
            designation: '',
            city: 'chennai',
            landmark: '',
            state: 'AP'
        }
    }

    saveData = (ev) => {
        ev.preventDefault()
        const {
            fullname = '',
            city = '',
            landmark = '',
            designation = '',
            state = '',
            email = ''
        } = this.state
        this.setState({
            person: {
                fullname,
                designation,
                email,
                address: {
                    landmark, city, state
                }
            }
        })
    }

    _onChange = (ev) => {
        const name = ev.target.name
        const value = ev.target.value
        this.setState({
            [name]: value
        })
    }
    render() {
        const {
            fullname = '',
            city = '',
            landmark = '',
            designation = '',
            state = '',
            email = '',
            person = {}
        } = this.state
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className='form-container' style={{display:'flex', width : '45%'}}>
                    <form onSubmit={this.saveData} >
                        <label htmlFor="fullname">Full Name</label>
                        <input
                            type="text"
                            name="fullname"
                            onChange={this._onChange}
                            value={fullname}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            onChange={this._onChange}
                            value={email}
                        />
                        <label htmlFor="designation">Designation</label>
                        <input
                            type="text"
                            name="designation"
                            onChange={this._onChange}
                            value={designation}
                        />
                        <label htmlFor="landmark">Landmark</label>
                        <input
                            type="text"
                            name="landmark"
                            onChange={this._onChange}
                            value={landmark}
                        />
                        <select
                            name="city"
                            className="select-css"
                            onChange={this._onChange}
                            value={city}
                        >
                            {
                                ['bangalore', 'delhi', 'chennai', 'pune', 'hyderabad'].map((city, index) => {
                                    return <option value={city} key={'' + index}>{city}</option>
                                })
                            }
                        </select>
                        <select
                            name="state"
                            className="select-css"
                            onChange={this._onChange}
                            value={state}
                        >
                            {
                                ['Orissa', 'Bengal', 'MP', 'Maharashtra', 'AP', 'Kerala', 'Tamilnadu'].map((state, index) => {
                                    return <option value={state} key={'' + index}>{state}</option>
                                })
                            }
                        </select>
                        <input type="submit" className="btn" value="Add Details" />
                    </form>

                </div>
                <div style={{display:'flex', width : '45%'}}>
                    {
                        Object.keys(person).length > 0 ? <PersonDetails person={person} /> : null
                    }
                </div>
            </div>
        )
    }
}