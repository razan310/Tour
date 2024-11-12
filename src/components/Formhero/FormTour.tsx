'use client';
import b_people from './../../app/assets/images/people.svg';
import w_people from './../../app/assets/images/w_people.svg';
import car from './../../app/assets/images/car.svg';
import tour from './../../app/assets/images/icon_tour.svg';
import search from './../../app/assets/images/search.svg';
import calendar from './../../app/assets/images/system-uicons_calendar-month.svg';
import clock from './../../app/assets/images/system-uicons_clock.svg';
import world from './../../app/assets/images/public.svg';
import Image from 'next/image';
import { ButtonValue } from '@/app/data/FormHeroData';




interface FormTourProps {
  buttonValue: ButtonValue[];
}

const FormTour: React.FC<FormTourProps> = ({ buttonValue }) => {
  return (
    <div className="p-3 rounded-lg bg-white bg-opacity-20">
      <div className="flex px-3">
        {buttonValue?.map((e, i) => (
          <button key={i} className={e.class}>
            <Image src={e.icon} alt="icon" height={24} width={24} />
            {e.title}
          </button>
        ))}
      </div>

      {/* النموذج الخاص بالاختيارات */}
      <div className="px-3 shadow-lg w-full max-w-6xl">
        <form className="flex flex-wrap  bg-white rounded-bl-lg rounded-r-lg text-black w-full">
          
          {/* اختيار عدد الأشخاص */}
          <div className="flex flex-col border-l p-2 w-[212px] flex-grow">
            <label htmlFor="numPeople" className="flex align-middle gap-1 text-sm font-semibold mb-1">
              <Image src={b_people} alt="world" height={24} width={24} />
              Number of People
            </label>
            <input
              type="number"
              id="numPeople"
              name="numPeople"
              min="1"
              placeholder="Choose number"
              className="px-4 py-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* اختيار التاريخ */}
          <div className="flex flex-col p-2 w-[212px] flex-grow">
            <label htmlFor="date" className="flex align-middle gap-1 text-sm font-semibold mb-1">
              <Image src={calendar} alt="world" height={24} width={24} />
              Date
            </label>
            <input
              type="date"
              id="date"
              placeholder="Choose Date"
              className="px-4 py-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              onFocus={(e) => (e.target.type = 'date')}
              onBlur={(e) => (e.target.type = 'text')}            />
          </div>

          {/* اختيار الوقت */}
          <div className="flex flex-col p-2 w-[212px] flex-grow">
            <label htmlFor="time" className="flex align-middle gap-1 text-sm font-semibold mb-1">
              <Image src={clock} alt="world" height={24} width={24} />
              Time
            </label>
            <input
              type="time"
              id="time"
              placeholder="Choose Time"
              className="px-4 py-2 rounded placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              onFocus={(e) => (e.target.type = 'time')}
              onBlur={(e) => (e.target.type = 'text')}            />
          </div>

          {/* اختيار الرحلة */}
          <div className="flex flex-col p-2 w-[212px] flex-grow">
            <label htmlFor="tour" className="flex align-middle gap-1 text-sm font-semibold mb-1">
              <Image src={tour} alt="world" height={24} width={24} />
              Tour
            </label>
            <select
              id="tour"
              name="Select Tour"
              className="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="cityTour">City Tour</option>
              <option value="mountainTour">Mountain Tour</option>
              <option value="beachTour">Beach Tour</option>
            </select>
          </div>

          {/* اختيار وسيلة النقل */}
          <div className="flex flex-col p-2 w-[212px] flex-grow">
            <label htmlFor="transportation" className="flex align-middle gap-1 text-sm font-semibold mb-1">
              <Image src={car} alt="world" height={24} width={24} />
              Transportation
            </label>
            <select
              id="transportation"
              name="Select Transportation"
              className="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="bus">Bus</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
            </select>
          </div>

          {/* زر إرسال */}
          <div className="flex justify-center p-3 h-auto ">
            <button type="submit" className="w-full p-2 px-3 bg-orange-500 text-white rounded-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500">
              <Image src={search} alt="search" height={24} width={24} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTour;
