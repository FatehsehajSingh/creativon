import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex gap-4 justify-center flex-col items-center text-white h-[44vh]">
        <div className=" flex gap-3  justify-center items-center font-bold text-5xl">Buy me a snack <span><img width={80} src="/snack.gif" alt="a snack gif" /></span></div>
        <p>
          A crowdfunding platform where creators get financial support directly from their fans.
        </p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className=" text-3xl font-bold text-center mb-14">Your Fans can buy you some snacks</h2>
        <div className="flex justify-around text-center">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={80} src="/man.gif" alt="man on a desk gif" />
            <p className="font-bold">Fans want to help</p>
            <p className=" text-center">Your fans are availaible to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={80} src="/coin.gif" alt="coin gif" />
            <p className="font-bold">Fans want to help</p>
            <p className=" text-center">Your fans are availaible to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={80} src="/group.gif" alt="man on a desk gif" />
            <p className="font-bold">Fans want to help</p>
            <p className=" text-center">Your fans are availaible to help you</p>
          </div>
        </div>
      </div>

            <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white container mx-auto flex flex-col text-center justify-center pb-32 pt-14">
                <h2 className=" text-3xl font-bold text-center mb-14">Learn More About Us</h2>

              {/* <iframe className="h-screen w-10/12" src="https://www.youtube.com/embed/CF52N-w4anI?si=G_JINVwYOnOa-jTt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

      
      </div>
    </>
  );
}
