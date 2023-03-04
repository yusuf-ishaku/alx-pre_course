import { Navbar } from "../components/navbar";
import  Woman  from "../assets/img/woman image.png";
import Payments from "../assets/img/send.png";
import Invest from "../assets/img/invest.png";
import Piggy from "../assets/img/piggy.png";
import { BsApple } from "react-icons/bs";
import {SiGoogleplay} from "react-icons/si";
import Bloomberg from "../assets/img/bloomberg logo.png";
import CNBC from "../assets/img/CNBC logo.png";
import Forbes from "../assets/img/Forbes logo.png";
import Stripe from "../assets/img/stripe logo.png";
import Quartz from "../assets/img/Quartz logo.png";
import Investment from "../assets/img/investment.png";
import Savings from "../assets/img/savings.png";
import Bro  from "../assets/img/bro.png";
import Phone from "../assets/img/phone.png";
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
                    <div className="rounded-full w-7 sm:w-10 absolute top-[82%] right-[88%] h-7 sm:h-10 bg-dgraysc"></div>
                    <div className="rounded-full  w-5 sm:w-7 absolute top-[86%] right-[0.01%] h-5 sm:h-7 bg-dgraysc"></div>
                    <div className="rounded-full w-2 sm:w-3 absolute top-[89%] right-[5%] h-2 sm:h-3 bg-blue-600"></div>
                    <div className="rounded-full w-3 sm:w-5 absolute top-[112%] right-[0.01%] h-3 sm:h-5 bg-dgraysc"></div>
                    <div className="rounded-full w-7 absolute top-[112%] right-[5%] h-7 bg-dgraysc"></div>
                    <div className="w-fit h-fit px-4 bg-dgraysc rounded-[4rem]">
                        <img className="w-auto" src={Woman} alt="" />
                        <div className="w-52 h-[5rem] flex items-center bg-white p-4 absolute drop-shadow-lg top-[88%] right-[43%] rounded-xl">
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
                        <div className="w-52 h-[5rem] flex items-center bg-white p-4 sm:absolute drop-shadow-lg top-[88%] right-[8%] rounded-xl">
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
                        <div className="w-52 h-[5rem] flex items-center bg-white p-4 sm:absolute drop-shadow-lg top-[40%] right-[3%] rounded-xl">
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
            <div className="w-full px-16 my-8 flex items-center justify-between h-40 bg-dgraysc">
                <img src={Bloomberg} alt="" />
                <img src={CNBC} alt="" />
                <img src={Forbes} alt="" />
                <img src={Stripe} alt="" />
                <img src={Quartz} alt="" />
            </div>
            <div className="w-full py-16 my-16 text-here h-60 flex flex-col items-center justify-center">
                <span className="block sm:text-[42px] tracking-wide font-semibold text-deepblue">
                    More than <span className="inline text-blue font-semibold"> 10,000</span> active users.
                </span>
                <span className="block text-here text-[42px] font-semibold text-deepblue">
                    Trust Fintekk.
                </span>
            </div>
            <div className="text-here bg-dgraysc py-20 w-full flex flex-col my-8 px-16 items-center justify-center">
                <span className="block text-xl">
                    OUR SERVICES
                </span>
                <span className="block text-deepblue font-semibold tracking-wide sm:text-[40px]">
                    What we offer
                </span>
                <span className="block w-[50%] text-center tracking-wide text-dpgray font-light text-[20px]">
                    We help individuals become more flexible and responsible with their finances and handle  payments smooth and easy. 
                </span>
                <div className="w-full flex flex-row items-center gap-10">
                    <div className="rounded-3xl bg-lgraysc p-4 py-8">
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
            <div className="flex w-full items-center px-16 gap-0 py-16 mt-8 text-here flex-row">
                    <div className="w-1/2 ml-10">
                        <img className="w-80" src={Phone} alt="" />
                    </div>
                    <div className="w-1/2 mr-10">
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
                    </div>
            </div>
            <div className="w-full my-16 flex flex-row bg-blue-600">
                <div className="flex flex-col justify-center pl-16 w-1/2 bg-blue-600">
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
                <div className="w-auto ml-4">
                    <img className="w-full object-cover" src={Illustration} alt="" />
                </div>
            </div>
            <div className="flex flex-row my-28 px-16 py-16 items-center text-here bg-lgraysc ">
                <div className="w-fit mx-2">
                    <h3 className="text-gray-600 font-light text-3xl">Testimonials</h3>
                    <p className="text-[40px] text-deepblue font-medium">
                        What Our Customers Say About Us
                    </p>
                </div>
                <div className=" rounded-3xl h-40 bg-white p-4">
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
                <div className="px-4 flex flex-col justify-center items-center">
                    <IconContext.Provider value={{color:"blue"}}>
                        <AiOutlineArrowUp/>
                        <span className="flex flex-col items-center">
                            <span className="no my-2 inline-block text-center text-white w-6 h-6 rounded-full bg-deepblue">1</span>
                            <span className="my-2 text-deepblue no">2</span>
                            <span className="my-2 text-deepblue no">3</span>
                        </span>
                        <AiOutlineArrowDown/>
                    </IconContext.Provider>
                </div>
            </div>
            <div className="w-auto h-fit text-here flex flex-col items-center mx-32 my-20 rounded-3xl bg-blue py-10">
                <h1 className="text-[40px] text-center font-semibold tracking-wide w-[30%] text-white">Start growing your wealth today</h1>
                <div className="w-full flex flex-row justify-center items-center">
                    <input className="bg-transparent text-white placeholder-inherit my-3 p-2 py-3 px-4 border-1 rounded-3xl w-[60%]" type="text" placeholder="Enter your email address" />
                    <button className="text-gray-600 p-2 py-[0.6rem] px-4 rounded-3xl -ml-[8%]  bg-white">Sign Up</button>
                </div>
            </div>
            <div className="w-full h-fit bg-dgraysc flex-col px-20 my-10 py-20">
                <div className="w-full flex flex-row justify-between">
                    <div className="w-auto mx-2 text-here">
                        <h1 className="text-[40px] text-blue font-semibold">Fintekk</h1>
                        <p className="text-xl mt-4 w-[1/6] text-gray-400">
                             Fintekk is the bank that does it all. Manage everything  <br></br> directly and easy with fintekk.
                        </p>
                    </div>
                    <div className="w-auto mx-4 text-here">
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
                    <div className="w-auto mx-4 text-here">
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
                    <div className="w-auto mx-4 text-here">
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
                    <div className="w-auto mx-4 text-here">
                        <span className="text-xl block text-deepblue font-medium">Resources</span>
                        <span className="text-xl my-2 block text-blue">
                            www.fintekk.com
                        </span>
                    </div>
                </div>
                <div className="w-full flex justify-between text-here py-2">
                    <span className="block text-deepblue font-semibold text-lg">Copyright 2022 Fintekk. All Rights Reserved</span>
                    <span className="text-lg font-semibold text-deepblue block">
                        Terms and Conditions. Privacy Policy
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}
