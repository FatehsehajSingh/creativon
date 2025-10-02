import React from 'react'
import PaymentPage from '../components/PaymentPage'
import connectDB from '../db/connenctDB'
import { notFound } from "next/navigation"
import User from '@/models/user'





const Username = async ({ params }) => {
  const checkUser = async () =>{
  
    await connectDB()
   let u = await User.findOne({username:params.username})
    
   if(!u){
    return notFound()
   }
  
   
  }
  await checkUser()
    return (
      <>
   
    <PaymentPage username={params.username}/>
    </>
  )
}

export default Username
