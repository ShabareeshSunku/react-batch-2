import React from 'react';
import ReactDOM from 'react-dom';
//import DefaultExport, { NamedExport } from './ImportExport'
import ProfileCard from './ProfileCard'
import Clock from './Clock'
import ReactTube from './ReactTube'
import UnControlledForm from './Forms/UnControlledForm'
import * as serviceWorker from './serviceWorker';
import './app.css'
//var sample = (<div><DefaultExport /><NamedExport /></div>)
var profileCards = (
    <div>
        <ProfileCard
            name="Sanjib Sahu"
            designation="Senior Software Engineer"
            company="Oracle India"
            src="https://randomuser.me/api/portraits/men/83.jpg"
        />
        <ProfileCard
            name="Mathew Hoskins"
            designation="Tech Lead"
            company="Accenture India"
            src="https://randomuser.me/api/portraits/men/18.jpg"
        />
        <ProfileCard
            name="Ramesh Patro"
            designation="Senior Manager"
            company="CTS Limited"
            src="https://randomuser.me/api/portraits/men/67.jpg"
        />
    </div>
)

var clock = (
    <Clock name="Sanjib"/>
)

var reactTube = <ReactTube />
var uncontrolledForm = <UnControlledForm />
ReactDOM.render(uncontrolledForm, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
