import { Navbar } from "../components/navbar"
export const Home = () =>{
    return (
        <>
        <div className="w-full">
            <Navbar></Navbar>
            <div className="w-full flex flex-col sm:flex-row px-16 py-20">
                <div className="flex flex-col w-1/2">
                    <div className="w-full">
                        <p className="text-deepblue leading-x font-semibold text-[64px]">
                            Pay, Invest, Save your Cash with a single bank
                        </p>
                    </div>
                    <div className="w-full"></div>
                    <div className="w-full"></div>
                </div>
            </div>
        </div>
        </>
    )
}