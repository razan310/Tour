import Destinantions from "@/components/Destinantions/Destinantions";
import HomeHero from "@/components/HomeHero/HomeHero";
import { aboutData } from "./data/aboutData";
import Welcome from "@/components/Welcome/Welcome";
import Services from "@/components/Services/Services";
import ContactUs from "@/components/ContactUs/ContactUs";
import Packages from "@/components/Packages/Packages";
import Customers from "@/components/Customers/Customers";
import Footer from "@/components/Footer/Footer";
import { footerData } from "./data/footerData";
import Book from "@/components/Book/Book";


export default function Home() {
  
  return (
    <>
    <HomeHero/>
    <Destinantions/>
    <Welcome imgSrc={aboutData[1].img} title={aboutData[1].title} disc={aboutData[1].disc} stats={aboutData[1].stats}/>
    <ContactUs/>
    <Services/>
    <Book/>
    <Packages/>
    <Customers/>
    </>
  );
}
