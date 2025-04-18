import Aos from "aos";
import { useEffect } from "react";
import { FcCustomerSupport } from "react-icons/fc";
import 'aos/dist/aos.css';

const WhyChooseUs = () => {

        useEffect(() => {
                Aos.init({
                  duration: 1000,
                  once: true,
                });
              }, []);

    return (
        <div data-aos='zoon-in-up' className="my-4 md:my-6 lg:my-20 container mx-auto bg-[#191919] text-white py-10">
            <div data-aos="zoom-in-up" className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5">
                <h1 className="text-2xl lg:text-5xl font-bold text-white">Why Choose Us</h1>
                <p className="font-medium px-4 text-gray-300">
                    CarLink offers reliable, quality, standout service you can depend on, <br /> backed by a team committed to your satisfaction.
                </p>
            </div>

            {/* cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-1 w-11/12 mx-auto text-center">
                <div data-aos="zoom-in-up" className="card card-compact bg-neutral shadow-xl border transition hover:scale-105 text-white">
                    <figure className="pt-3">
                        <img
                            width="100"
                            height="100"
                            src="https://img.icons8.com/bubbles/100/traffic-jam.png"
                            alt="traffic-jam"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold">Wide Variety of Cars</h2>
                        <p className="text-gray-300">
                            Explore a wide variety of cars, from luxury to budget-friendly, with advanced features and stylish designs.
                        </p>
                    </div>
                </div>

                <div data-aos="zoom-in-up" className="card card-compact bg-neutral shadow-xl border transition hover:scale-105 text-white">
                    <figure className="pt-3">
                        <img
                            width="100"
                            height="100"
                            src="https://img.icons8.com/bubbles/100/price-tag.png"
                            alt="price-tag"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold">Affordable Prices</h2>
                        <p className="text-gray-300">
                            Get the best value with affordable prices on high-quality products, ensuring great savings without compromising quality.
                        </p>
                    </div>
                </div>

                <div data-aos="zoom-in-up" className="card card-compact bg-neutral shadow-xl border transition hover:scale-105 text-white">
                    <figure className="pt-3">
                        <img
                            width="100"
                            height="100"
                            src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-booking-app-vacation-planning-guys-trip-flaticons-lineal-color-flat-icons.png"
                            alt="booking"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold">Easy Booking Process</h2>
                        <p className="text-gray-300">
                            Enjoy a seamless and hassle-free booking process with quick, simple steps for a smooth and convenient experience.
                        </p>
                    </div>
                </div>

                <div data-aos="zoom-in-up" className="card card-compact bg-neutral shadow-xl border transition hover:scale-105 text-white">
                    <figure className="pt-3">
                        <FcCustomerSupport className="w-16 h-16" />
                    </figure>
                    <div className="card-body">
                        <h2 className="font-bold">Customer Support</h2>
                        <p className="text-gray-300">
                            Reliable customer support available 24/7 to assist you with any questions, concerns, or issues promptly and efficiently.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
