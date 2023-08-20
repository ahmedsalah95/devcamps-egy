const mongoose = require('mongoose');
const connectDB = async () =>{
  const conn = await mongoose.connect(`mongodb+srv://ahmedsalah9570:LXAOEwlanqORU051@nodedev.5zmliyx.mongodb.net/devcamper?
  retryWrites=true&w=majority`); 

  console.log(`mongo connection : ${conn.connection.host}`);
}

module.exports = connectDB;