const createError=require('http-errors');
const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const indexRouter=require('./Router.js');


const app=express();

app.use(express.json());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
     extended:true
}));

app.use(cors());
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/loginTest.html/'))
})
app.get('/onlineEntry.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/onlineEntry.html/'))
})
app.get('/signup.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/signup.html/'))
})
app.get('/entry.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/entry.html/'))
})
app.get('/loggedOut.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/loggedOut.html/'))
})
app.get('/viewAllEntries.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/viewAllEntries.html/'))
})

app.get('/loginTest.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/loginTest.html/'))
})
app.use('/api',indexRouter);


app.use((err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;
    err.message=err.message || "Internal Server Error";
    res.status(err.statusCode).json({
        message: err.message,
    });



});

app.listen(3000,()=>console.log('Server is running on port 3000'));