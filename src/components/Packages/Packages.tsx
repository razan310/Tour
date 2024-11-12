import { packagesData } from "@/app/data/packagesData"
import PackagesCard from "./PackagesCard"


function Packages() {
    return (
        <div className="font-extrabold text-3xl text-gray-800 mt-20 md:px-7 lg:px-16 xl:px-40 2xl:px-60 p-5">
            <div className='flex flex-col gap-5 align-middle justify-between text-center md:text-start'>
                <h1>Happy Customers Says</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                    {packagesData.map((data, index) => (
                        <PackagesCard key={index} data={data} />
                    ))}
                </div>
            </div>
        
        </div>
    )
}

export default Packages
