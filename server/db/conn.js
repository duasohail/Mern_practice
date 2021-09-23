const mongoose = require('mongoose');

//DB Connection
const DB = process.env.DATABASE;


mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connected');
}).catch((err) => console.log('not connected'));