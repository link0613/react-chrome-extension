import React, { Component } from 'react';

export default class GenerateApiKey extends Component {
	componentDidMount() {
		var user = localStorage.getItem('login');
		var apiUrl = 'http://localhost:3000/createapikey';
	
    var request = new XMLHttpRequest();
    request.open('POST', apiUrl, true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onload = function() {
      console.log(this.response);
    };

    var requestBody = {
      email:user
    };

    request.send(JSON.stringify(requestBody));
	};

    render() {
    	const apiKey = 'fwe980ouaeqhdoasdaoff3423';
        return (
            <div>
                <h1 className="centered-text">This is Generate api key route!</h1>
                <p className="centered-text">Your current Api key: {apiKey} </p>
            </div>
        );
    };
}