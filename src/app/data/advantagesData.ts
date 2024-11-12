import icon1 from './../assets/images/map.svg'; 
import icon2 from './../assets/images/award.svg'; 
import icon3 from './../assets/images/icon_best_price.svg'; 
import icon4 from './../assets/images/icon_guide.svg'; 
import { StaticImageData } from 'next/image';

// تعريف واجهة البيانات
export interface IconDataItem {
    icon: StaticImageData;  // استخدم StaticImageData للصور الثابتة
    title: string;
}

// البيانات
export const advantagesData: IconDataItem[] = [
    {
        icon: icon1,  
        title: "Complete Packages For All Your Wishes",
    },
    {
        icon: icon2,  
        title: "Over 30 Years Of Experience",
    },
    {
        icon: icon3,  
        title: "Expert Guides For You",
    },
    {
        icon: icon4,  
        title: "Guaranteed fun at the best price!",
    },
];
