import { formatDistanceToNow } from 'date-fns';
import React from 'react'
import { FaCalendarAlt, FaCar} from 'react-icons/fa';
import { WiTime3 } from 'react-icons/wi';
import { Link } from 'react-router-dom';

const RecentListingsCard = ({ recentCar }) => {
    const { carModel, carImage, location, dailyRentalPrice, bookingCount, availability } = recentCar;


    return (
        <div data-aos="zoom-in-up" className="relative flex flex-col my-6 bg-black text-white shadow-md border border-gray-700 rounded-lg overflow-hidden">
            {/* Car Image with Price Tag */}
            <div className="relative h-52 overflow-hidden">
                <img
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                    src={recentCar.carImage}
                    alt={recentCar.carImage}
                />
                <div className="absolute top-2 left-2 bg-[#FF3600] text-white font-bold text-sm px-3 py-1 rounded-lg shadow-md">
                    ${recentCar.dailyRentalPrice}/Day
                </div>
            </div>

            {/* Car Details */}
            <div className="p-5 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-red-500">
                    {recentCar.carModel}
                </h3>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <FaCalendarAlt className="text-red-500" />
                    <span> {recentCar.availability}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                <WiTime3 className="text-red-500 w-4 h-4" />
                    <span>
                        Added {formatDistanceToNow(new Date(recentCar.addedDate), { addSuffix: true })}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <FaCar className="text-red-500" />
                    <span>{recentCar.bookingCount} bookings</span>
                </div>
            </div>
            <Link to={`/cars/${recentCar._id}`} className="px-5 pb-5">
                <button className="w-full py-2 cursor-pointer font-semibold bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] text-white hover:bg-gradient-to-l transition-all duration-300 border-none rounded-lg hover:scale-105">
                    Book Now
                </button>
            </Link>
        </div>
    )
}

export default RecentListingsCard