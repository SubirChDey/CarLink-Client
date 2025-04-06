import { FaCalendarAlt, FaCar, FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "react-router-dom";

const AvailableCarsCard = ({ car }) => {
    const { carModel } = car || {}
    console.log(car);

    return (

        <div data-aos="zoom-in-up" className="relative flex flex-col my-6 bg-black text-white shadow-md border border-gray-700 rounded-lg overflow-hidden">
            {/* Car Image with Price Tag */}
            <div className="relative h-52 overflow-hidden">
                <img
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                    src={car.carImage}
                    alt={car.carImage}
                />
                <div className="absolute top-2 left-2 bg-[#FF3600] text-white font-bold text-sm px-3 py-1 rounded-lg shadow-md">
                    ${car.dailyRentalPrice}/Day
                </div>
            </div>

            {/* Car Details */}
            <div className="p-5 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-red-500">
                    {car.carModel}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <FaCalendarAlt className="text-red-500" />
                    <span>Available {car.availabilityDate}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <FaMapMarkerAlt className="text-red-500" />
                    <span>{car.location}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <FaCar className="text-red-500" />
                    <span>{car.bookingCount} bookings</span>
                </div>
            </div>
            <Link to={`/cars/${car._id}`} className="px-5 pb-5">
                <button className="w-full py-2 font-semibold bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] text-white hover:bg-gradient-to-l transition-all duration-300 border-none rounded-lg hover:scale-105">
                    Book Now
                </button>
            </Link>
        </div>

    )
}

export default AvailableCarsCard