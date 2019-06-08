import React from 'react';
//Sample Functional Component
export default function ProfileCard(props) {
    return (
        <div className="card">
            <img src={props.src} alt="John" style={{ width: '100%' }} />
            <h1>{props.name}</h1>
            <p className="title">{props.designation}</p>
            <p>{props.company}</p>
            <div className="icon-holder">
                <a href="/"><i className="fa fa-dribbble"></i></a>
                <a href="/"><i className="fa fa-twitter"></i></a>
                <a href="/"><i className="fa fa-linkedin"></i></a>
                <a href="/"><i className="fa fa-facebook"></i></a>
            </div>
            <p><button>Contact</button></p>
        </div>
    )
}

