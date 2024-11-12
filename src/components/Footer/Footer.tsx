import Image from "next/image";
import logo from './../../app/assets/images/logo.png';
import { FooterSection } from './../../app/data/footerData';

interface FooterProps {
    footerData: FooterSection[];
}

const Footer = ({ footerData }: FooterProps) => {
  return (
    <div className="font-open_Sans bg-footer-bg mt-20 md:px-7 lg:px-16 xl:px-40 2xl:px-60 p-5">
        <div className="w-full border-b border-white-20 pb-2">
            <Image src={logo} alt="logo" height={130} width={133} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-4">
            {footerData.slice(0, 3).map((section, index) => (
                <div key={index}>
                    <h1 className="font-bold text-xl text-white mb-3">{section.title}</h1>
                    {Array.isArray(section.items) ? (
                        section.items.map((item, itemIndex) => (
                            <p key={itemIndex} className=" font-semibold text-sm 2xl:text-lg text-gray-100 my-2">{item}</p>
                        ))
                    ) : (
                        <p className="font-semibold text-lg text-gray-100 my-2">{section.items}</p>
                    )}
                </div>
            ))}

            {/* قسم Contacts */}
            {footerData.slice(3, 4).map((section, index) => (
                <div key={index}>
                    <h1 className="font-bold text-xl text-white mb-3">{section.title}</h1>
                    {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2 text-gray-400 ">
                            <Image src={item} alt="icon" width={20} height={20} />
                            <p className="font-semibold text-sm 2xl:text-lg text-gray-100 my-2">{section.disc[itemIndex]}</p>
                        </div>
                    ))}
                </div>
            ))}

            {/* قسم Social */}
            {footerData.slice(4, 5).map((section, index) => (
                <div key={index}>
                    <h1 className="font-bold text-xl text-white mb-3">{section.title}</h1>
                    <div className="flex gap-2 mt-2">
                        {section.items.map((item, itemIndex) => (
                            <Image key={itemIndex} src={item} alt="social-icon" width={24} height={24} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Footer;
