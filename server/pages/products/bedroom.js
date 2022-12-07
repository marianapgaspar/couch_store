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
    con.query("SELECT * FROM couch_store.products  WHERE id = ? ", [req.query.product_id], function (err, result, fields) {
        if (err) throw err;
        res.json(result)
    });
}