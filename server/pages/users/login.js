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
	let username = request.body.name;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		con.query('SELECT * FROM couch_store.users WHERE name = ? AND password = ?', [username, password], function(error, results, fields) {
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				response.json({message: "success", userId: results[0].id, userName: results[0].name});
			} else {
				response.status(401).json({error: 'Incorrect Username and/or Password!'});
			}			
			response.end();
		});
	} else {
		response.status(401).json({error: 'Please enter Username and Password!'});
		response.end();
	}
}

exports.getProducts = (req, res) => {

	con.query('SELECT * FROM couch_store.user_products WHERE user_id = ? AND on_cart = 1', [req.query.user_id], function(error, results, fields) {
		if (error) throw error;
		res.json(results)
	});
}