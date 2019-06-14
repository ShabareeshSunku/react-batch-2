//example of pure component

import React, { PureComponent } from 'react';

export default class PersonDetails extends PureComponent {
    render() {
        const { fullname, email, designation, address } = this.props.person
        return (
            <div className="card">
                <img src='https://randomuser.me/api/portraits/men/83.jpg' alt="John" style={{ width: '100%' }} />
                <h1>{fullname}</h1>
                <p className="title">{designation}</p>
                <p>{email}</p>
                <p>{address.landmark}, {address.city}, {address.state}</p>
                <p><button>Contact</button></p>
            </div>
        )
    }
}