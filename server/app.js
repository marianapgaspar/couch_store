const express = require("express");
const app = express();
const api = require("./routes/api");
const route = require("./routes/web");
const bodyParser = require("body-parser");
var cors = require('cors');
const session = require('express-session')
const dotenv = require("dotenv");
dotenv.config();

app.use(cors())
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use("/api", api)
app.use("/", route)
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.listen(process.env.PORT) 