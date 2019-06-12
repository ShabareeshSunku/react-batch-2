import React, { Component } from 'react';
import './forms.css'

export default class UnControlledForm extends Component {
    constructor() {
        super()
        console.log('constructor')
        this.nameRef = React.createRef()
        this.emailRef = React.createRef()
        this.desgRef = React.createRef()
        this.cityRef = React.createRef()
    }

    saveData = (ev) => {
        ev.preventDefault()
        const name = this.nameRef.value
        const email = this.emailRef.value
        const designation = this.desgRef.value
        const city = this.cityRef.value
        localStorage.setItem('person_details', JSON.stringify({ name, city, email, designation }))
    }
    render() {
        return (
            <div className='form-container'>
                <form onSubmit={this.saveData} >
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" name="fullname" ref={(c) => this.nameRef = c} />
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" ref={(c) => this.emailRef = c} />
                    <label htmlFor="designation">Designation</label>
                    <input type="text" name="designation" ref={(c) => this.desgRef = c} />
                    <select name="city" className="select-css" ref={(c) => this.cityRef = c}>
                        {
                            ['bangalore', 'delhi', 'chennai', 'pune', 'hyderabad'].map((city, index) => {
                                return <option value={city} key={'' + index}>{city}</option>
                            })
                        }
                    </select>
                    <input type="submit" className="btn" value="Add Details" />
                </form>
            </div>
        )
    }
}