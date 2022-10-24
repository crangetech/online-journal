const path = require("path");
const userRoutes=require('./controlers/api/user-routes.js');
const express = require("express");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require("./config/connection");

//app.use(express.static(__dirname + '../online-journal/Assests/style.css'));
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api",userRoutes);
// app.use(require('./controllers/'));
// const createError=require('http-errors');
// const express=require('express');
// const path=require('path');
// const bodyParser=require('body-parser');
// const cors=require('cors');
// const indexRouter=require('./Router.js');
//
//
// app.use(express.json());
//
// app.use(bodyParser.json());
//
// app.use(bodyParser.urlencoded({
//      extended:true
// }));
//
// app.use(cors());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html/'))
})
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, './public/dashboard.html/'))
})
app.get('/entry', (req, res) => {
    res.sendFile(path.join(__dirname, './public/entry.html/'))
})
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signup.html/'))
})
app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/support.html/'))
})
app.get('/terms-conditions', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/terms-conditions.html/'))
})
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/register.html/'))
})
app.get('/viewAllEntries', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/viewAllEntries.html/'))
})
app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/privacy-policy.html/'))
})
app.get('/loggedOut', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/loggedOut.html/'))
})
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/signup.html/'))
})
app.get('/forgot-password', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/forgot-password.html/'))
})


// app.get('/viewAllEntries', (req, res) => {
//     res.sendFile(path.join(__dirname, '/viewAllEntries.html/'))
// })
// app.use('/api',indexRouter);
//
//
// app.use((err,req,res,next)=>{
//     err.statusCode=err.statusCode || 500;
//     err.message=err.message || "Internal Server Error";
//     res.status(err.statusCode).json({
//         message: err.message,
//     });
//
//
//
app.listen(PORT,()=>{
console.log('App listening on port '+PORT);
sequelize.sync({force:false});

});














