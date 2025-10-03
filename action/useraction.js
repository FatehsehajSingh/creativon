"use server"

import Payment from "@/models/payment"
import Razorpay from "razorpay"
import connectDB from "@/app/db/connenctDB"
import User from "@/models/user"

export const initiate = async (amount, to_username, paymentform) => {

    await connectDB()
    let user = await User.findOne({username:to_username })
    const secret = user.razorpaysecret
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })



    let options = {
        amount: Number.parseInt(amount),
        currency: "INR"

    }

    let x = await instance.orders.create(options)

    await Payment.create({ oid: x.id, amount: amount, to_user: to_username, name: paymentform.name, message: paymentform.message })

    return x;
}

export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username });

    if (!u) {

        return null; 
    }

    let user = u.toObject({ flattenObjectIds: true });
    return user;
};

export const fetchpayments = async (username) => {
  try {
    await connectDB();

    let payments = await Payment.find({ to_user: username, done: true })
      .sort({ amount: -1 }) 
      .limit(10)           
      .lean();

    return payments.map((p) => ({
      ...p,
      _id: p._id.toString(),
      createdAt: p.createdAt?.toISOString?.() || null,
      updatedAt: p.updatedAt?.toISOString?.() || null,
    }));
  } catch (err) {
    console.error("Error fetching payments:", err);
    return [];
  }
};


export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = Object.fromEntries(data)

   
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }   
        await User.updateOne({email: ndata.email}, ndata)

        await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
        
    }
    else{

        
        await User.updateOne({email: ndata.email}, ndata)
    }}


