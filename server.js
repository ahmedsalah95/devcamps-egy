const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
dotenv.config({ path:'./config/config.env' });

//initilize app
const app = express();

// use body parser 

app.use(express.json());
// connect to DB
connectDB();

// Routes
const bootcamps = require('./routes/bootcamps');
app.use('/api/v1/bootcamps',bootcamps);

// port configurations
const PORT = process.env.PORT;
app.use(morgan('dev'));
app.use(errorHandler);

const server = app.listen(PORT,console.log(`server working on port ${PORT}  and in ${process.env.NODE_ENV}` ));

process.on('unhandledRejection',(error,promise)=>{
    console.log(`error message :${error.message}`);
    server.close(()=>process.exit(1));
});