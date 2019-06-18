import React from 'react';
import FavButton from './FavButton'
const ContactItem = (props) => {
    const { contact = {}, ...rest } = props
    return (
        <div className="card light">
            <FavButton userId={contact.id} {...rest} />
            <img src={contact.thumbnail} className="avatar" alt="" />
            <div className='text-container'>
                <h2 className="name">{contact.name}</h2>
                <p className="email">{contact.email}</p>
                <p className="address">{contact.address}</p>
            </div>
            <button>Contact</button>
        </div>
    )
}

export default ContactItem