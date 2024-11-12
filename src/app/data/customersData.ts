import img1 from './../assets/images/Ellipse.png';
import img2 from './../assets/images/Ellipse.png';
import img3 from './../assets/images/Ellipse.png';
import { StaticImageData } from 'next/image';

export interface TeamMember {
    img: string;
    full_name: string;
    disc: string;
}

export const customersData: TeamMember[] = [
    {
        img: img1,
        full_name: "Lyod Gomez",
        disc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
    },
    {
        img: img2,
        full_name: "Lyod Gomez",
        disc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
    },
    {
        img: img3,
        full_name: "Michael Johnson",
        disc: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
    },
    // أضف المزيد من الأعضاء حسب الحاجة
];
