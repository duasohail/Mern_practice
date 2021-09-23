const dotenv = require('dotenv');
const express = require('express');
const app = express();


//dotenv
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT; //hidden server PORT

//DB CONNECTION
require('./db/conn');

//Route Path
app.use(require('./router/auth'));


//Middleware
const middleware = (req, res, next) => {
    console.log('hello middleware');
    next();
}


//ROUTES
app.get('/', (req, res) => {
    res.send('hello home welcome to MERN STACK');
});
app.get('/about', middleware, (req, res) => {
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



//server listen
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})