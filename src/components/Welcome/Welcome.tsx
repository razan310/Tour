import Image from "next/image";
import Counter from "../Counter/Counter";

interface Stat {
    number: number;
    label: string;
}

interface WelcomeProps {
    imgSrc: string;
    title: string;
    disc: string;
    stats: Stat[];
}

const Welcome: React.FC<WelcomeProps> = ({ imgSrc, title, disc, stats }) => {
    return (
        <div className="flex flex-col lg:flex-row items-center mt-20 md:px-7 lg:px-16 xl:px-40 2xl:px-60 p-5 space-y-8 lg:space-y-0 lg:space-x-8">
            {/* صورة */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                <Image 
                    src={imgSrc} 
                    alt={title} 
                    width={600} 
                    height={515} 
                    className=""
                />
            </div>
            
            {/* المحتوى النصي */}
            <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left mx-auto flex flex-col items-center lg:items-start">
                <p className="text-sm uppercase font-semibold text-gray-500">WELCOME TO OUR SITE!</p>
                <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
                <p className="text-gray-700">{disc}</p>
                
                {/* الإحصاءات */}
                <div className="flex justify-center gap-4 mt-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col ">
                            <span className="flex flex-row font-bold text-3xl text-orange-500">
                                <Counter endNumber={stat.number} duration={2000} /> +
                            </span> 
                            <p className="text-sm text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Welcome;
