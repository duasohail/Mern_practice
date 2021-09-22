const mongoose = require('mongoose');
const express = require('express');
const app = express();


//DB Connection
const DB = 'mongodb+srv://dua_mernpractice:123dua123@cluster0.jopfe.mongodb.net/mernpractice?retryWrites=true&w=majority';


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connected');
}).catch((err) => console.log('not connected'));

//Middleware

const middleware = (req, res, next) => {
    console.log('hello middleware');
    next();
}



app.get('/', (req, res) => {
    res.send('hello home welcome to MERN STACK');
});
app.get('/about', (req, res) => {
    res.send('hello About');
});
app.get('/contact', (req, res) => {
    res.send('hello Contact');
});
app.get('/login', (req, res) => {
    res.send('hello LOGIN');
});
app.get('/logout', (req, res) => {
    res.send('hello Logout');
});
app.get('/register', (req, res) => {
    res.send('hello Register');
});


app.listen(3000, () => {
    console.log('server is running at port 3000');
})