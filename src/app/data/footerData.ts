import { FaFacebook } from 'react-icons/fa';
import { StaticImageData } from 'next/image';
import insta from './../assets/images/insta.svg'
import twiter from './../assets/images/Twiter.svg'
import facebook from './../assets/images/facebook.svg'
import location from './../assets/images/location.svg'
import phone from './../assets/images/phone.svg'
import mail from './../assets/images/mail.svg'
export interface FooterSection {
    title: string;
    items: string|StaticImageData;
    disc: string; 
}

export const footerData: FooterSection[] = [
    {
        title: 'Services',
        items: ['Bike and Rickshaw rental', 'Guided Tours of Lucca', 'Guided Bike Tour of Lucca', 'Trip In The Tuscan Hills', 'Transportation With Luxury Cars', 'Wine Tours By Bus With Guide'],
    },
    {
        title: 'Home',
        items: ['Home', 'About Us', 'Tour Packages'],
    },
    {
        title: 'Help',
        items: ['Terms of Use', 'Privacy Policy'],
    },
    {
        title: 'Contacts',
        items: [location, phone, mail],
        disc:['Piazza Napoleone, Lucca, Tuscany','+39 346 368 5708','italiainlimo@gmail.com']
    },
    {
        title: 'Social',
        items: [insta, twiter, facebook],
    }
];
