"use server"

import payment from "@/models/payment"
import Razorpay from "razorpay"
import connectDB from "@/app/db/connenctDB"
import User from "@/models/user"

export const initiate = async (amount, to_username, paymentform) => {
    
    await connectDB()
    var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET })

   

    let options ={
        amount:Number.parseInt(amount),
        currency:"INR"
    
    
    }
    let x =await instance.orders.create(options)

    await payment.create({oid:x.id, amount: amount, to_user:to_username, name:paymentform.name, message:paymentform.message})

    return x;
}