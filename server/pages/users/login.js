const mysql = require('mysql2');
const express = require('express');
const session = require('express-session');
const dotenv = require("dotenv");
dotenv.config();

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

exports.authentication = (request,response) => {
    // Capture the input fields
	console.log(request.email, request.password)
	let username = request.email;
	let password = request.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		con.query('SELECT * FROM couch_store.users WHERE name = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedIn = true;
				request.session.username = username;
				// Redirect to home page
				response.redirect('http://localhost:3000/home');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
}
exports.getAuth = (req,res) => {
    if (session.loggedIn != undefined) {
        res.json({loggedIn: true, name:req.session.name})
    }
    res.json({loggedIn: false})
}