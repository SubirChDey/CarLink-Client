import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AddCars = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="bg-[#191919] pb-20">
      <div
        data-aos="flip-down"
        className="w-11/12 md:w-1/2 mx-auto py-6 md:py-10 space-y-4"
      >
        <h1 className="text-4xl font-bold text-center text-[#ff3700d7]">
          List Your Vehicle
        </h1>
        <p className="text-center text-base-300 font-medium pb-5">
          Effortlessly list your car, connect with more renters, and maximize your earnings by joining our trusted car-sharing platform today!
        </p>
      </div>
      <div className="w-full md:w-3/5 mx-auto bg-[#060b17] p-8 space-y-3 rounded-xl">
        <form className="space-y-6">

          <div className="space-y-1 text-sm">
            <label
              htmlFor="carModel"
              className="block text-white font-bold mb-2"
            >
              Car Model
            </label>
            <input
              type="text"
              name="carModel"
              id="carModel"
              placeholder="Enter car model"
              className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label
              htmlFor="dailyRentalPrice"
              className="block text-white font-bold mb-2"
            >
              Daily Rental Price
            </label>
            <input
              type="number"
              name="dailyRentalPrice"
              id="dailyRentalPrice"
              placeholder="Enter daily rental price"
              className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
            />

          </div>

          <div className="space-y-1 text-sm">
            <label
              htmlFor="availabilityDate"
              className="block text-white font-bold mb-2"
            >
              Availability Date
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="bg-[#1F2937] text-white px-4 py-2 rounded-md w-full"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label
              htmlFor="vehicleRegistrationNumber"
              className="block text-white font-bold mb-2"
            >
              Vehicle Registration Number
            </label>
            <input
              type="text"
              name="vehicleRegistrationNumber"
              id="vehicleRegistrationNumber"
              placeholder="Enter vehicle registration number"
              className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label
              htmlFor="features"
              className="block text-white font-bold mb-2"
            >
              Features
            </label>
            <input
              type="text"
              name="features"
              id="features"
              placeholder="Enter features (comma-separated)"
              className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label
              htmlFor="description"
              className="block text-white font-bold mb-2"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Enter description"
              className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
            ></textarea>

          </div>

          <div className="space-y-1 text-sm">
            <label
              htmlFor="bookingCount"
              className="block text-white font-bold mb-2"
            >
              Booking Count
            </label>
            <input
              type="text"
              name="features"
              id="features"
              placeholder="0"
              readOnly
              className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label
              htmlFor="image"
              className="block text-white font-bold mb-2"
            >
              Image
            </label>
            <input
              type="url"
              name="image"
              id="image"
              placeholder="Enter Image URL"
              className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label
              htmlFor="location"
              className="block text-white font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter location"
              className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
            />
          </div>

          <button className="block w-full p-2 cursor-pointer text-center rounded-sm bg-gray-500 text-white hover:font-bold hover:bg-gradient-to-l transition-all duration-300 border-none"> Add Car</button>
        </form>
      </div>
    </div>
  );
};

export default AddCars;