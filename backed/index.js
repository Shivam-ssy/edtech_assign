import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import Stripe from "stripe"
import {v4 as uuid} from "uuid"
dotenv.config({
    path: './.env'
})
const app = express()
app.use(express.json())
app.use(cors({
    origin:process.env.FRONTEND_URL
}))

// ROUTES 
const stripe= new Stripe(process.env.STRIPE_KEY)

app.post("/payment",(req,res)=>{
    const {product,token}=req.body
    console.log("product", product);
    console.log("token", token);
    const idempondentKey=uuid()
    return stripe.customers.create({
        email:token.email,
        source:token.id
    })
    .then(customer=>{
        stripe.charges.create({
            amount:product.price*100,
            currency:"usd",
            customer:customer.id,
            receipt_email:token.email,
            description:`Purchase of ${product.name}`
        })
    },{
        idempondentKey
    })
    .then(result=>res.status(200).json(result))
    .catch(Error=>console.log(Error))
})

//LISTEN
app.get("/",(req,res)=>{
    res.send("Welcome to new project")
})






app.listen(3000,()=>{
    console.log("app is listing on port 3000");
})