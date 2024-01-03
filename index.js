const express = require("express");
const mongoose = require("mongoose");

const toyRouter = require("./routes/toy");



mongoose.connect("mongodb://0.0.0.0:27017/myLibrary").then(() => {
    console.log("mongo db connected!!!")
}).catch(err => {
    console.log(err)
    console.log("cannot connect mongo db")
    process.exit(1);
})


const app = express();





app.use(express.json())//כל בקשה שמגיעה לשרת 
//אם יש לך תוכן בתוך הbody
//אנו מבקשים מפונקציה זו
//reqשתיקח את התכון הזה ותכניס אותו לתוך שדה חדש ב
//req.body לשדה
//ותכניס לשם את מה ששלחו בבודי כאוייקט רגיל של גאוה סקריפט


app.use("/toys", toyRouter)


app.listen(4000, () => {
    console.log("app is litening on port 4000")
})


//middleware - 