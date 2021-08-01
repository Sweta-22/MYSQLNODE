let express = require('express');
let cors = require('cors');
let app = express();

// app.use(cors('*'));
app.use(cors({
    origin:['http://localhost:4200'],
    "methods":"GET,PUT,POST,DELETE,PUT",
    "optionsSuccessStatus":204,
    credentials:true

}));

const sequelize = require('./config')
app.use(express.json());
app.use(express.urlencoded({extended:false}));
var schroutes = require('./routes/route');
app.use('/api', schroutes);
var custroutes1 = require('./routes/route');
app.use('/api', custroutes1);
const port = process.env.PORT||7000;
sequelize.authenticate().then(()=>{
    console.log("database connection established");
}).catch(err=>{
    console.log("unable to connect");
})
app.listen(port,()=>{
    console.log("server is running at"+port);
});