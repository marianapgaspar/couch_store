const mysql = require('mysql2');
const dotenv = require("dotenv");
dotenv.config();

var con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});
exports.products = (req,res) => {
        con.connect(function(err) {
            if (err) {
                throw err;
            }
        });
        con.query("SELECT * FROM couch_store.products", function (err, result, fields) {
            if (err) throw err;
            res.json(result)
        });
}
exports.getById = (req,res) => {
    con.connect(function(err) {
        if (err) {
            throw err;
        }
    });
    con.query("SELECT * FROM couch_store.products  WHERE id = ? ", [req.query.id], function (err, result, fields) {
        if (err) throw err;
        res.json(result)
    });
}
exports.getTotalById = (req,res) => {
    con.connect(function(err) {
        if (err) {
            throw err;
        }
    });
    con.query("SELECT count(*) AS total, sum(price) AS price FROM couch_store.user_products INNER JOIN (SELECT id AS id_join, price FROM couch_store.products) myAlias ON id_join = user_products.product_id WHERE user_id = ? ", [req.query.id], function (err, result, fields) {
        if (err) throw err;
        res.json(result)
    });
}