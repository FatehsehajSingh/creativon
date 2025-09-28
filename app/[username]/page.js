import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full relative'>
        <img className='object-cover w-full h-[350]' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/6166275/4e59f9a04eee4773b6eeb191b6bd4009/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/20.png?token-hash=lw-8iZuwBTv_ev8vwCjw-g-1yzGYEt_jrPrkWQRW6_4%3D&token-time=1759536000" alt="" />
        <div className='absolute -bottom-9 right-[46%] border-2 border-white rounded-full '>
          <img className='rounded-full' width={100} height={100} src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/5668769/e513b3f0b24348cea4e0939f551aa2d4/eyJoIjozNjAsInciOjM2MH0%3D/1.jpg?token-hash=tROHugSqpi5rPBHPoWVqiMLEqnikktqT1isNV7xTwkQ%3D&token-time=1760313600" alt="" />
        </div>
      </div>
      <div className="info flex flex-col items-center   gap-2 text-white mb-32 my-12">
        <div className='font-bold text-lg'>

          @{params.username}
        </div>
        <div className='text-slate-400'>
          creating the next fantasy short ⚔️
        </div>
        <div className='text-slate-400'>

          254 paid members . 93 .  Posts
        </div>

        <div className="payment flex gap-3 mt-11  w-[80%] ">

          <div className="supporter w-1/2 bg-slate-900 p-7 rounded-lg ">
            <h2 className="supporters text-2xl  font-bold my-5">Supporters
            </h2>
            <ul className='mx-5 text-lg'>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="/avatar.gif" alt="user gif" />
                <span>
                Shubam donated <span className='font-bold'> $30</span> with a messsage "I support you bro.Lots of ❤️"
                </span>
                </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="/avatar.gif" alt="user gif" />
                <span>
                Shubam donated <span className='font-bold'> $30</span> with a messsage "I support you bro.Lots of ❤️"
                </span>
                </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="/avatar.gif" alt="user gif" />
                <span>
                Shubam donated <span className='font-bold '> $30</span> with a messsage "I support you bro.Lots of ❤️"
                </span>
                </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="/avatar.gif" alt="user gif" />
                <span>
                Shubam donated <span className='font-bold'> $30</span> with a messsage "I support you bro.Lots of ❤️"
                </span>
                </li>
       

            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 p-10 rounded-lg ">
            <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
            <div className='flex flex-col gap-2'>
              <input className='bg-slate-800 w-full p-3 rounded-lg' placeholder='Enter Name' type="text" />
              <input className='bg-slate-800 w-full p-3 rounded-lg' placeholder='Enter Message' type="text" />
           
              <input className='bg-slate-800 w-full p-3 rounded-lg' placeholder='Enter Amount' type="text" />
           

  <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>     
              
         </div>
              <div className='gap-2 mt-5 flex '>
                <button className='bg-slate-800 p-3 rounded-lg hover:cursor-pointer'>Pay $10</button>
                <button className='bg-slate-800 p-3 rounded-lg hover:cursor-pointer'>Pay $20</button>
                <button className='bg-slate-800 p-3 rounded-lg hover:cursor-pointer'>Pay $30</button>

              </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Username
