const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://kasundimantha97:kasunEDUME97@cluster0.ook2x8c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

app.post("/login", (req,res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email})
    .then(user => {
        if(user) {
            if(user.password === password && user.name == "kasun") {
                res.json("SuccessKasun")
            } else if (user.password === password && user.name == "Dimantha"){
                res.json("SuccessDimantha")
            } else if (user.password === password && user.name == "Bandara"){
                res.json("SuccessBandara")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("user not exist")
        }
    })
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3000, () => {
    console.log("server is running")
})