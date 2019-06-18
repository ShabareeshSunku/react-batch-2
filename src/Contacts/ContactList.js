import React from 'react';
import ContactItem from './ContactItem'
export default function ContactList(props) {
    //let contacts = props.contacts || []
    let { contacts = [], ...rest } = props
    return (
        <div className='container'>
            {
                contacts.map((contact) => {
                    return (
                        <ContactItem contact={contact} key={contact.id} {...rest} />
                    )
                })
            }
        </div>
    )
}