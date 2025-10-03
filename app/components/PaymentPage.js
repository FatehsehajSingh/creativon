"use client"

import React from 'react'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/action/useraction'
import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"


const PaymentPage = ({ username }) => {

    const router = useRouter()
    const [paymentform, setpaymentform] = useState({name:"",message:"",amount:""})
    const [currentuser, setcurrentuser] = useState({})
    const [Payments, setPayments] = useState([])
    const searchParams = useSearchParams()


    useEffect(() => {
        getData()
    }, [username])

    useEffect(() => {

        if (searchParams.get("paymentdone") == "true") {
            toast.success('Thanks for your donation', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
        router.push(`/${username}`)

    }, [searchParams])



    const handleChange = (e) => {

        setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentuser(u)
        let dbpayments = await fetchpayments(username)
        setPayments(dbpayments)
    }

    const pay = async (amount) => {

        let a = await initiate(amount, username, paymentform)
        let orderId = a.id
        var options = {
            "key": currentuser.razorpayid, // Enter the Key ID generated from the Dashboard
            "amount": amount, // Amount is in currency subunits. 
            "currency": "INR",
            "name": "Creativon", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com",
                "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    }




    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>


            <div className='cover w-full relative'>
                <img className='object-fill w-full h-48 md:h-[350]' src={currentuser.coverpic} alt="cover pic" />
                <div className='absolute -bottom-9 right-[40%] md:right-[46%] border-2 border-white rounded-full '>
                    <img className='rounded-full' width={100} height={100} src={currentuser.profilepic} alt="profile pic" />
                </div>
            </div>
            <div className="info flex flex-col items-center   gap-2 text-white mb-32 my-12">
                <div className='font-bold text-lg'>

                    @{username}
                </div>
                <div className='text-slate-400'>
                    Let's help {username} 
                </div>
                <div className='text-slate-400'>
                    {Payments.length} Payments. ₹{(Payments.reduce((a,b) => a+b.amount,0)/100)} Raised.

                </div>

                <div className="payment flex flex-col md:flex-row gap-3 mt-11  w-[80%] ">

                    <div className="supporter w-full md:w-1/2 bg-slate-900 p-7 rounded-lg ">
                        <h2 className="supporters text-2xl  font-bold my-5">Top 10 Supporters
                        </h2>
                        <ul className='mx-5 text-lg'>
                            {Payments.length == 0 && <li>No payments yet</li>}
                            {Payments.map((p, i) => {

                                return <li key={i} className='my-4 flex gap-2 items-center'>
                                    <i width={33} src="/avatar.gif" alt="user gif" />
                                    <span>
                                        {p.name} donated <span className='font-bold'> ₹{p.amount / 100}</span> with a messsage "{p.message}"
                                    </span>
                                </li>
                            })}



                        </ul>
                    </div>

                    <div className="makePaymentw-full md:w-1/2 bg-slate-900 p-10 rounded-lg ">
                        <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
                        <div className='flex flex-col gap-2'>
                            <input onChange={handleChange} value={paymentform.name || ""} name='name' className='bg-slate-800 w-full p-3 rounded-lg' placeholder='Enter Name' type="text" />
                            <input onChange={handleChange} value={paymentform.message || ""} name='message' className='bg-slate-800 w-full p-3 rounded-lg' placeholder='Enter Message' type="text" />

                            <input onChange={handleChange} value={paymentform.amount || ""} name='amount' className='bg-slate-800 w-full p-3 rounded-lg' placeholder='Enter Amount' type="text" />


                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-900 disabled:from-purple-100" disabled={paymentform.name?.length < 3 || paymentform.message?.length < 3 || paymentform.amount?.length <1}>Pay</button>

                        </div>
                        <div className='gap-2 mt-5 flex flex-col md:flex-row'>
                            <button className='bg-slate-800 p-3 rounded-lg hover:cursor-pointer' onClick={() => pay(1000)}>Pay ₹10</button>
                            <button className='bg-slate-800 p-3 rounded-lg hover:cursor-pointer' onClick={() => pay(2000)}>Pay ₹20</button>
                            <button className='bg-slate-800 p-3 rounded-lg hover:cursor-pointer' onClick={() => pay(3000)}>Pay ₹30</button>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default PaymentPage
