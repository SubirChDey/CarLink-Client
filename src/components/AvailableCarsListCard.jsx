import Aos from "aos";
import { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';

const AvailableCarsListCard = ({ car }) => {
    const { carModel, carImage, location, dailyRentalPrice, bookingCount, availability } = car;

    useEffect(() => {
            Aos.init({
              duration: 1000,
              once: true,
            });
          }, []);
    
    return (
        <div data-aos='zoon-in-up' className="text-white bg-black border-2 border-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 rounded-xl">
            <div className="block md:flex justify-between p-6 items-center rounded-xl shadow-xl">
                <div className="flex gap-4 items-center">
                    <div className='flex flex-col justify-center items-center mb-2 h-24'>
                        <img className="w-40 h-full object-center" src={carImage} alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl text-red-500 font-semibold"> {carModel}</h3>
                        <p className="flex items-center gap-1"> <FaMapMarkerAlt></FaMapMarkerAlt> {location}</p>
                        <p className="flex items-center gap-1"> <IoMdPricetags></IoMdPricetags> ${dailyRentalPrice} / day</p>
                        <p className="flex items-center gap-1"> <TbBrandBooking /> {bookingCount} Booking</p>
                    </div>
                </div>
                             
                <div className="flex flex-col gap-4 mt-4">

                    <Link to={`/cars/${car._id}`} className="btn btn-success">Book Now</Link>
                </div>
            </div>

        </div>
    )
}

export default AvailableCarsListCard