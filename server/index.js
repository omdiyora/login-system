const express = require('express')
var bodyParser = require('body-parser');

var cors = require('cors')

const dotenv = require('dotenv')
const connentDB = require('./db/connect')
const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();
connentDB();

app.use('/api', require('./routes/index'))

const PORT = process.env.PORT;

app.listen(PORT , () =>{
    try {
        console.log(`Server Running in ${PORT}`);
    } catch (err) {
        console.log(`Server Crash`);
    }
})