import { Navbar } from "../components/navbar.jsx";
import  Woman  from "../assets/img/Woman-image.png";
import Payments from "../assets/img/send.png";
import Invest from "../assets/img/Invest.png";
import Piggy from "../assets/img/Piggy.png";
import { BsApple } from "react-icons/bs";
import {SiGoogleplay} from "react-icons/si";
import Bloomberg from "../assets/img/Bloomberg logo.png";
import CNBC from "../assets/img/CNBC logo.png";
import Forbes from "../assets/img/Forbes logo.png";
import Stripe from "../assets/img/Stripe logo.png";
import Quartz from "../assets/img/Quartz logo.png";
import Investment from "../assets/img/Investment.png";
import Savings from "../assets/img/Savings.png";
import Bro  from "../assets/img/Bro.png";
import Phone from "../assets/img/Phone.png";
import Illustration from "../assets/img/Illustration.png";

import { AiFillStar } from "react-icons/ai";
import { IconContext } from "react-icons";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai"
export const Home = () =>{
    return (
        <>
        <div className="w-full">
            <Navbar></Navbar>
            <div className="w-full text-here flex flex-col sm:flex-row sm:items-center px-4 sm:px-16 py-20">
                <div className="flex flex-col justify-center w-full sm:w-1/2">
                    <div className="w-full sm:w-4/5">
                        <p className="w-full text-deepblue text-center sm:leading-x font-medium text-3xl sm:text-[64px]">
                            Pay, Invest, Save your Cash with a single bank
                        </p>
                    </div>
                    <div className="w-full my-4">
                        <p className="font-tdark text-center font-light sm:w-4/5 sm:leading-10 text-xl sm:text-2xl">
                            Fintekk is the bank that does it all. Manage everything directly and easy with fintekk.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-center sm:flex-col justify-center">
                        <button className="button rounded-xl p-3 px-4 w-fit b-blue text-lg text-white border-blue-700 border-1 ">Sign up for free</button>
                        <div className="flex flex-col my-6 w-full sm:flex-row">
                            <button className="px-4 flex items-center justify-center p-3 my-4 mx-4 sm:mr-2 w-auto sm:w-48 border-1 rounded-xl border-gray-600"> <SiGoogleplay></SiGoogleplay> <span className="ml-2">Get on Android</span></button>
                            <button className="px-4 flex items-center justify-center p-3 my-4 mx-4 sm:mx-2 w-auto sm:w-48 border-1 rounded-xl border-gray-600"><BsApple></BsApple> <span className="ml-2">Get on iPhone</span></button>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2">
                    <div className="rounded-full w-7 sm:w-10 absolute sm:top-[19%] top-[82%] sm:right-[51%] right-[88%] h-7 sm:h-10 bg-dgraysc"></div>
                    <div className="rounded-full  w-5 sm:w-7 absolute sm:top-[24%] top-[86%] sm:right-[6%] right-[0.01%] h-5 sm:h-7 bg-dgraysc"></div>
                    <div className="rounded-full w-2 sm:w-3 absolute sm:top-[28%] top-[89%] right-[8%] h-2 sm:h-3 bg-blue-600"></div>
                    <div className="rounded-full w-3 sm:w-5 absolute sm:top-[52%] top-[112%] sm:right-[52%] right-[0.01%] h-3 sm:h-5 bg-dgraysc"></div>
                    <div className="rounded-full sm:w-4 w-7 absolute sm:top-[68%] top-[112%] right-[6%] sm:h-4 h-7 bg-dgraysc"></div>
                    <div className="w-fit h-fit px-4 bg-dgraysc rounded-[4rem]">
                        <img className="w-auto" src={Woman} alt="" />
                        <div className="sm:w-52 w-44 h-[4rem] sm:h-[5rem] flex items-center bg-white p-4 absolute drop-shadow-lg sm:top-[59%] top-[110%] sm:right-[40%] right-[55%] rounded-xl">
                            <div className="flex items-center justify-center rounded-md bg-dgraysc w-2/6 h-full p-2">
                                <img src={Payments} alt="" />
                            </div>
                            <div className="mx-2 w-full h-full">
                                <h2 className="text-deepblue font-normal text-md px-1">Payments</h2>
                                <div className="h-[0.35rem] mx-1 mt-1 w-[100%] bg-dgraysc rounded-xl">
                                    <div className="h-[0.35rem] w-[60%] bg-blue-400 rounded-xl">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-52 w-40 h-[4rem]sm:h-[5rem] flex items-center bg-white p-4 absolute drop-shadow-lg sm:top-[42%] top-[100%] right-[4%] rounded-xl">
                            <div className="flex items-center justify-center rounded-md bg-dgraysc w-2/6 h-full p-2">
                                <img src={Invest} alt="" />
                            </div>
                            <div className="mx-2 w-full h-full">
                                <h2 className="text-deepblue font-normal text-md px-1">Invest</h2>
                                <div className="h-[0.35rem] mx-1 mt-1 w-[100%] bg-dgraysc rounded-xl">
                                    <div className="h-[0.35rem] w-[60%] bg-blue-400 rounded-xl">

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:w-52 w-40 h-[4rem] sm:h-[5rem] flex items-center bg-white p-4 absolute drop-shadow-lg sm:top-[97%] top-[125%] sm:right-[3%] right-[16%] rounded-xl">
                            <div className="flex items-center justify-center rounded-md bg-dgraysc w-2/6 h-full p-2">
                                <img src={Piggy} alt="" />
                            </div>
                            <div className="mx-2 w-full h-full">
                                <h2 className="text-deepblue font-medium text-md px-1">Savings</h2>
                                <div className="h-[0.35rem] mx-1 mt-1 w-[100%] bg-dgraysc rounded-xl">
                                    <div className="h-[0.35rem] w-[60%] bg-blue-400 rounded-xl">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-scroll sm:overflow-auto px-16 my-8 flex items-center justify-between h-40 bg-dgraysc">
                <img className="mx-4 sm:mx-1" src={Bloomberg} alt="" />
                <img className="mx-4 sm:mx-1" src={CNBC} alt="" />
                <img className="mx-4 sm:mx-1" src={Forbes} alt="" />
                <img className="mx-4 sm:mx-1" src={Stripe} alt="" />
                <img className="mx-4 sm:mx-1" src={Quartz} alt="" />
            </div>
            <div className="w-full py-16 my-16 text-here h-60 flex flex-col items-center justify-center">
                <span className="block text-[42px] text-center tracking-wide font-semibold text-deepblue">
                    More than <span className="inline text-blue font-semibold"> 10,000</span> active users.
                </span>
                <span className="block text-here text-[42px] font-semibold text-deepblue">
                    Trust Fintekk.
                </span>
            </div>
            <div className="text-here bg-dgraysc py-10 sm:py-20 w-full flex flex-col my-8 px-4 sm:px-16 items-center justify-center">
                <span className="block text-xl">
                    OUR SERVICES
                </span>
                <span className="block text-deepblue font-semibold tracking-wide text-3xl sm:text-[40px]">
                    What we offer
                </span>
                <span className="block w-full sm:w-[50%] text-center tracking-wide text-dpgray font-light text-lg sm:text-[20px]">
                    We help individuals become more flexible and responsible with their finances and handle  payments smooth and easy. 
                </span>
                <div className="w-full flex flex-col sm:flex-row items-center gap-10">
                    <div className="rounded-3xl w-auto mx-2 bg-lgraysc p-4 py-8">
                        <h2 className="text-deepblue font-medium text-3xl my-4">
                            Easy Payment
                        </h2>
                        <p className="text-gray-500 font-light text-lg w-5/6">
                            Stress-free payment for all transactions that you do at any time.
                        </p>
                        <span className="text-blue font-medium">
                            Read more
                        </span>
                        <div className="w-full py-10 flex items-center justify-center object-contain">
                            <img src={Bro} alt="" />
                        </div>
                    </div>
                    <div className="rounded-3xl p-4 py-8 bg-lgraysc">
                    <h2 className="text-deepblue font-medium text-3xl my-4">
                            Investments
                        </h2>
                        <p className="text-gray-500 font-light text-lg w-5/6">
                            Grow your money by investing in pre-vetted investment opportunities.
                        </p>
                        <span className="text-blue font-medium">
                            Read more
                        </span>
                        <div className="w-full py-10 flex items-center justify-center object-contain">
                            <img src={Savings} alt="" />
                        </div>
                    </div>
                    <div className="rounded-3xl p-4 py-8 bg-lgraysc">
                    <h2 className="text-deepblue font-medium text-3xl my-4">
                            Fixed Savings
                        </h2>
                        <p className="text-gray-500 font-light text-lg w-5/6">
                            Build a dedicated savings faster on your terms automatically or manually.
                        </p>
                        <span className="text-blue font-medium">
                            Read more
                        </span>
                        <div className="w-full py-10 flex items-center justify-center object-contain">
                            <img src={Investment} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full items-center px-4 sm:px-16 gap-0 py-16 mt-8 text-here sm:flex-row">
                    <div className="w-1/2 ml-10">
                        <img className="w-80" src={Phone} alt="" />
                    </div>
                    <div className="w-full p-2 text-center sm:w-1/2 sm:mr-10">
                        <h2 className="text-deepblue font-medium tracking-wide w-full text-[42px]">
                            Start the journey to reach your financial goals today.
                        </h2>
                        <div className="flex flex-col my-10">
                            <div className="w-full">
                                <div className="w-full block">
                                    <div className="flex">
                                        <span className="inline text-blue font-semibold text-lg mr-8">01</span>
                                        <span className="inline text-deepblue text-xl font-semibold">
                                            Download the mobile app
                                        </span>
                                    </div>
                                    <div className="block tracking-wide ml-2 mt-3 h-28 text-gray-400 text-xl pl-[2.5rem] border-l-1 border-blue-600">
                                        Sign up for an account with your name, email  and phone number.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                            <div className="w-full block">
                                    <div className="flex">
                                        <span className="inline text-blue font-semibold text-lg mr-8 mb-2">02</span>
                                        <span className="inline  text-deepblue text-xl font-semibold">
                                           Create a free account
                                        </span>
                                    </div>
                                    <div className="block ml-2 tracking-wide h-28 text-gray-400 text-xl pl-[2.5rem] border-l-1 border-blue-600">
                                        Sign up for an account with your name, email  and phone number.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                            <div className="w-full block">
                                    <div className="flex mt-2">
                                        <span className="inline text-blue font-semibold text-lg mr-8 ">03</span>
                                        <span className="inline text-deepblue text-xl font-semibold">
                                            Add a Payment Method
                                        </span>
                                    </div>
                                    <div className="block ml-2 tracking-wide mt-2 h-28 text-gray-400 text-xl pl-[2.5rem]">
                                        Using your debit card, bank account, QR code, perform your first transaction.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="button sm:hidden rounded-xl p-2 mx-3 w-fit b-blue text-white border-blue-700 border-1 ">Try Fintekk now</button>
                    </div>
            </div>
            <div className="w-full my-16 flex flex-col sm:flex-row bg-blue-600">
                <div className="flex flex-col justify-center w-full py-4 sm:py-0 px-2 sm:pl-16 sm:w-1/2 bg-blue-600">
                    <div className="w-full text-left">
                        <h2 className="text-white text-[40px] text-here">
                            FAQs
                        </h2>
                    </div>
                    <div className="w-[80%] text-here">
                            <select name="cars" className="cars border-white my-2 border-1 p-4 py-4 rounded-md focus:outline-none text-white w-full bg-transparent">
                                <option className="text-blue p-4" value="volvo">Is fintekk’s security guaranteed?</option>
                                <option className="text-blue">Saab</option>
                                <option className="text-blue">Opel</option>
                                <option className="text-blue">Audi</option>
                            </select>
                            <select name="cars" className="cars border-white my-2 border-1 p-4 py-4 rounded-md focus:outline-none text-white w-full bg-transparent">
                                <option className="text-blue p-4" value="volvo">How to activate Fintekk account</option>
                                <option className="text-blue">Saab</option>
                                <option className="text-blue">Opel</option>
                                <option className="text-blue">Audi</option>
                            </select>
                            <select name="cars" className="cars border-white my-2 border-1 p-4 py-4 rounded-md focus:outline-none text-white w-full bg-transparent">
                                <option className="text-blue p-4" value="volvo">What should i do if i forget my pin</option>
                                <option className="text-blue">Saab</option>
                                <option className="text-blue">Opel</option>
                                <option className="text-blue">Audi</option>
                            </select>
                            
                    </div>
                </div>
                <div className="w-auto mt-4 sm:mt-0 sm:ml-4">
                    <img className="w-full object-cover" src={Illustration} alt="" />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row my-28 px-4 lg:px-16 py-16 items-center text-here bg-lgraysc ">
                <div className="w-fit mx-2">
                    <h3 className="text-gray-600 font-light text-3xl">Testimonials</h3>
                    <p className="text-[40px] text-deepblue font-medium">
                        What Our Customers Say About Us
                    </p>
                </div>
                <div className=" rounded-3xl h-fit sm:h-40 bg-white p-4">
                    <p className="text-gray-600 text-xl">
                        Dealt with enquiry and subsequent order efficiently and quickly. So pleased with price and service I ordered a second one.
                    </p>
                    <h2 className="block my-2 text-deepblue text-xl font-medium">
                        Maryam Adegoke
                    </h2>

                    <span className="flex h-fit">
                        <IconContext.Provider value={{color: "yellow"}}>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </IconContext.Provider>
                    </span>
                </div>
                <div className="px-4 flex my-3 flex-row sm:flex-col justify-center items-center">
                    <IconContext.Provider value={{color:"blue"}}>
                        <AiOutlineArrowUp/>
                        <span className="flex flex-row sm:flex-col items-center">
                            <span className="no my-2 mx-2 inline-block text-center text-white w-6 h-6 rounded-full bg-deepblue">1</span>
                            <span className="my-2 mx-2 text-deepblue no">2</span>
                            <span className="my-2 mx-2 text-deepblue no">3</span>
                        </span>
                        <AiOutlineArrowDown/>
                    </IconContext.Provider>
                </div>
            </div>
            <div className="w-auto h-fit text-here flex flex-col items-center mx-4 sm:mx-32 my-20 rounded-3xl bg-blue py-2 sm:py-10">
                <h1 className="text-[40px] text-center font-semibold tracking-wide w-[90%] sm:w-[30%] text-white">Start growing your wealth today</h1>
                <div className="w-full flex flex-col md:flex-row sm:justify-center items-center">
                    <input className="bg-transparent text-white placeholder-inherit my-3 p-2 py-3 px-4 border-1 rounded-3xl w-[60%]" type="text" placeholder="Enter your email address" />
                    <button className="text-gray-600 p-2 py-[0.6rem] px-4 rounded-3xl lg:-ml-[8%]  bg-white">Sign Up</button>
                </div>
            </div>
            <div className="w-full h-fit bg-dgraysc sm:flex-col px-20 my-10 py-20">
                <div className="w-full flex flex-col sm:flex-row justify-between">
                    <div className="w-auto mx-2 text-here">
                        <h1 className="text-[40px] text-blue font-semibold">Fintekk</h1>
                        <p className="text-xl mt-4 w-[1/6] text-gray-400">
                             Fintekk is the bank that does it all. Manage everything  <br></br> directly and easy with fintekk.
                        </p>
                    </div>
                    <div className="w-auto my-4 sm:my-0 sm:mx-4 text-here">
                        <span className="text-xl block text-deepblue font-medium">Company</span>
                        <span className="text-xl my-2 block text-blue">
                            Careers
                        </span>
                        <span className="text-xl my-2 block text-blue">
                            About Us
                        </span>
                        <span className="text-xl my-2 block text-blue">
                            Privacy
                        </span>
                        <span className="text-xl my-2 block text-blue">
                            Terms
                        </span>
                    </div>
                    <div className="w-auto my-4 sm:my-0 sm:mx-4 text-here">
                        <span className="text-xl block text-deepblue font-medium">Services</span>
                        <span className="text-xl my-2 block text-blue">
                            Payments
                        </span>
                        <span className="text-xl my-2 block text-blue">
                            Investments
                        </span>
                        <span className="text-xl my-2 block text-blue">
                            Savings Plans
                        </span>
                    </div>
                    <div className="w-auto my-4 sm:my-0  sm:mx-4 text-here">
                        <span className="text-xl block text-deepblue font-medium">Resources</span>
                        <span className="text-xl my-2 block text-blue">
                            Media
                        </span>
                        <span className="text-xl my-2 block text-blue">
                            FAQs
                        </span>
                        <span className="text-xl my-2 block text-blue">
                            Help Center
                        </span>
                        <span className="text-xl my-2 block text-blue">
                            Security
                        </span>
                    </div>
                    <div className="w-auto my-4 sm:my-0 sm:mx-4 text-here">
                        <span className="text-xl block text-deepblue font-medium">Resources</span>
                        <span className="text-xl my-2 block text-blue">
                            www.fintekk.com
                        </span>
                    </div>
                </div>
                <div className="w-full flex flex-col sm:flex-row justify-between text-here py-2">
                    <span className="block my-4 sm:my-0 text-deepblue font-semibold text-lg">Copyright 2022 Fintekk. All Rights Reserved</span>
                    <span className="text-lg font-semibold text-deepblue block">
                        Terms and Conditions. Privacy Policy
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}
