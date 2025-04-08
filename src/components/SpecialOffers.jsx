import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SpecialOffers = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 50,
        });
    }, []);

    return (
        <div className="my-4 md:my-6 lg:my-20 container mx-auto px-4">
            <div data-aos="zoom-in-up" className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-10">
                <h1 className="text-2xl lg:text-5xl font-bold text-white">
                    Special Offers Just for You
                </h1>
                <p className="font-medium px-4 text-gray-300">
                    Drive Your Dream Ride for Less — Exclusive Offers Ending Soon. Book Now and Save Big!
                </p>
            </div>

            <div className="w-11/12 mx-auto space-y-10">
                {/* Card 1 */}
                <div data-aos="zoom-in-up"
                    className="card bg-black w-full grid grid-cols-1 md:grid-cols-2
          gap-6 shadow-xl p-6 hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-2xl"
                >
                    <figure>
                        <img
                            src="https://i.ibb.co.com/zVxvPXYM/multy-story-car-parking-1172561-93.jpg"
                            alt="Weekend Escape"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center text-white">
                        <div className="relative">
                            <span className="absolute top-0 left-0 bg-red-600 text-white text-xl font-semibold px-5 py-2 rounded-full z-10">
                                20% OFF
                            </span>
                            <h2 className="card-title lg:text-4xl mb-3 mt-10">
                                Weekend Escape Discount
                            </h2>
                        </div>
                        <p className="text-gray-300 mb-6">
                            Enjoy an exclusive 20% discount on all SUV rentals every weekend. Perfect for your weekend getaways, family vacations, or road trips with friends. Don’t miss out on the adventure—book now and save!
                        </p>
                        <div className="card-actions w-full">
                            <button className="btn btn-outline w-full border-white text-white hover:bg-white hover:text-black transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                </div>

                {/* Card 2 */}
                <div data-aos="zoom-in-up"
                    className="card bg-black w-full flex-col-reverse md:grid md:grid-cols-2
          gap-6 shadow-xl p-6 hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-2xl"
                >
                    <div className="card-body items-center text-center text-white">
                        <div className="relative">
                            <span className="absolute top-0 left-0 bg-red-600 text-white text-xl font-semibold px-5 py-2 rounded-full z-10">
                                30% OFF
                            </span>
                            <h2 className="card-title lg:text-4xl mb-3 mt-10">
                                Holiday Specials
                            </h2>
                        </div>
                        <p className="text-gray-300 mb-6">
                            Celebrate the season with up to 30% off on luxury car rentals. Elevate your holiday experience with an unforgettable ride—perfect for making lasting memories with loved ones!
                        </p>
                        <div className="card-actions w-full">
                            <button className="btn btn-outline w-full border-white text-white hover:bg-white hover:text-black transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                    <figure>
                        <img
                            src="https://i.ibb.co.com/r14V397/cars-parked-underground-parking-lot-598320-4133.jpg"
                            alt="Holiday Specials"
                            className="rounded-xl"
                        />
                    </figure>
                </div>

                {/* Card 3 */}
                <div data-aos="zoom-in-up"
                    className="card bg-black w-full grid grid-cols-1 md:grid-cols-2
          gap-6 shadow-xl p-6 hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-2xl"
                >
                    <figure>
                        <img
                            src="https://i.ibb.co.com/5Xf57Jzb/car-driving-on-beautiful-road-600nw-2473243119.webp"
                            alt="Early Bird"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center text-white">
                        <div className="relative">
                            <span className="absolute top-0 left-0 bg-red-600 text-white text-xl font-semibold px-5 py-2 rounded-full z-10">
                                15% OFF
                            </span>
                            <h2 className="card-title lg:text-4xl mb-3 mt-10">
                                Early Bird Saver
                            </h2>
                        </div>
                        <p className="text-gray-300 mb-6">
                            Plan ahead and save! Book your car 7 days in advance and enjoy a 15% discount. Secure your ride today and make your trip even more affordable!
                        </p>
                        <div className="card-actions w-full">
                            <button className="btn btn-outline w-full border-white text-white hover:bg-white hover:text-black transition">
                                Learn More
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;
