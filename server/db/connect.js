const mongoose =  require("mongoose");
mongoose.set('strictQuery', true);
const connentDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONOGO_URL)
        // mongoose.set('strictQuery', false);
        console.log("db connected");
    } catch (err) {
        console.log(err);
    }
}

module.exports = connentDB;