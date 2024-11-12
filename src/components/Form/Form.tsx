import React from 'react'

const Form = () => {
  return (
    <div>
      <h1 className='font-bold text-center text-3xl my-8 text-gray-800'>Book Now Bike</h1>
      {/* النموذج الخاص بالاختيارات */}
      <div className="bg-white-20 bg-opacity-20 my-3 p-6 rounded-3xl shadow-lg w-full max-w-xl">
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
              {/* اختيار عدد الأشخاص */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-semibold mb-1">Name and Surname</label>
                <input 
                  type="name" 
                  id="name" 
                  placeholder="Enter your name and surname" 
                  className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              {/* اختيار التاريخ */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder='Enter your email address'
                  className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* اختيار الوقت */}
              <div className="flex flex-col">
                <label htmlFor="number" className="text-sm font-semibold mb-1">Telephone Number</label>
                <input 
                  type="number" 
                  id="number" 
                  name="number" 
                  placeholder='Enter your telephone number'
                  className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* اختيار الرحلة */}
              <div className="flex flex-col">
                <label htmlFor="Service" className="text-sm font-semibold mb-1">Service Type</label>
                <select 
                  id="Service" 
                  name="Service" 
                  className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="cityTour">Bike and rickshaw rental</option>
                  <option value="mountainTour">Guided tour of the countryside</option>
                  <option value="beachTour">Taxi and NCC service</option>
                  <option value="beachTour">Bus Package</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="Date" className="text-sm font-semibold mb-1">Date</label>
                <input 
                  type="Date" 
                  id="Date" 
                  name="Date" 
                  className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="Time" className="text-sm font-semibold mb-1">Time</label>
                <input 
                  type="Time" 
                  id="Time" 
                  name="Time" 
                  className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              {/* زر إرسال */}
              <div className="flex justify-center w-full md:col-span-2 mt-4">
                <button type="submit" className="w-[164px]  bg-orange-500 text-white py-2 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500">Book Now</button>
              </div>
            </form>
          </div>
    </div>
  )
}

export default Form
