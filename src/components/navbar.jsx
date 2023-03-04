import { GiHamburgerMenu } from "react-icons/gi"
export const Navbar = () =>{
    return (
        <>
        <div className="w-full text-here sm:px-8 sm:py-10 flex px-4  flex-row items-center justify-between sm:justify-around h-10 border-gray-300 border-b-1">
          <span className="block text-blue text-md sm:text-2xl font-semibold">
            Fintekk
          </span>
          <span className=" block sm:hidden">
            <GiHamburgerMenu></GiHamburgerMenu>
          </span>
          <div className="w-auto hidden sm:flex flex-row items-center">
            <span className="block text-lg font-nor mx-7 font-tdark ">Home</span>
            <span className="block text-lg font-normal mx-7 font-tdark">About</span>
            <span className="block text-lg font-normal mx-7 font-tdark">FAQs</span>
            <span className="block text-lg font-normal mx-7 font-tdark">Contact Us</span>
          </div>
          <div className="w-auto hidden  sm:flex flex-row items-center">
            <button className="button rounded-xl  p-2 mx-3 text-blue w-20 border-blue-700 border-1 ">Login</button>
            <button className="button rounded-xl p-2 mx-3 w-fit b-blue text-white border-blue-700 border-1 ">Sign up for free</button>
          </div>
        </div>
        </>
    )
}