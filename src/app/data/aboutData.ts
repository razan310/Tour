import img1 from './../assets/images/Rectangle.png'
import img2 from './../assets/images/about_picture.png'

export interface DataItem {
    img: string;
    title: string;
    disc: string;
    stats: {
        number: number;
        label: string;
    }[];
}

export const aboutData: DataItem[] = [
    {
        img: img1,
        title: "We Are The Center Of Lucca To Offer You The Best",
        disc: `We are right in the center of Lucca to offer you the real
                city life! With years of experience in practically every 
                tourism sector, with us you can find complete packages at 
                the lowest price, to travel and learn and have fun all without 
                worries and without stress. What are you waiting for, book a bright 
                evening, a trip to beautiful Tuscany or a personal tour for you!`,
        stats: [
            { number: 20, label: "Years Experience" },
            { number: 100, label: "Happy Customer" },
            { number: 15, label: "Choice of Services" },
            { number: 10, label: "Professional Guides" },
        ],
    },
    {
        img: img2,
        title: "We are the best company for your visit",
        disc: `After decades of experience, and a whole life in Lucca, 
                we offer you the most complete tourism service in the city. 
                In addition to having bikes and rickshaws to have as much fun as
                you want, you have the choice of tour guides with whom to tour and
                jdrivers for your every need! We offer packages in the way that you 
                get the most at the lowest price.
                Book with us and we will always be available for you!`,
        stats: [
            { number: 20, label: "Years Experience" },
            { number: 100, label: "Happy Customer" },
            { number: 15, label: "Choice of Services" },
            { number: 10, label: "Professional Guides" },
        ],
    },
    
   
];
