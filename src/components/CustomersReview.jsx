import { useEffect } from "react";

const CustomersReview = () => {
  return (
    <div className="my-6 lg:my-20 container mx-auto px-4">
      <div data-aos="zoom-in-up" className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-10">
        <h1 className="text-2xl lg:text-5xl font-bold text-white">
          What Our Customers Say
        </h1>
        <p className="font-medium px-4 text-gray-300">
          Hear from our satisfied customers about their amazing experiences with our car rental services.
        </p>
      </div>

      <div className="w-11/12 mx-auto space-y-10">
        {/* Review Card 1 */}
        <div data-aos="zoom-in-up"
          className="card bg-black w-full grid grid-cols-1 md:grid-cols-2 gap-6 shadow-xl p-6 hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-2xl"
        >
          <figure>
            <img
              src="https://img.freepik.com/free-photo/brunette-girl-walking-through-park-autumn_1157-17764.jpg?t=st=1744111449~exp=1744115049~hmac=94033c30141e1b046f75f98ac4e7c52f5aaa8e4f1f224cb9d1ac67676e484a60&w=740"
              alt="Customer 1"
              className="rounded-full object-cover h-52 w-52"
            />
          </figure>
          <div className="card-body items-center text-center text-white">
            <h2 className="card-title lg:text-2xl mb-3">Marsha Miller</h2>
            <p className="text-gray-300 mb-6">"The best car rental service I’ve ever used! The car was clean, and the customer service was exceptional. I’ll definitely rent again!"</p>
            <div className="card-actions w-full">
              <button className="btn btn-outline w-full border-white text-white hover:bg-white hover:text-black transition">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>

        {/* Review Card 2 */}
        <div data-aos="zoom-in-up"
          className="card bg-black w-full flex-col-reverse md:grid md:grid-cols-2 gap-6 shadow-xl p-6 hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-2xl"
        >
          <div className="card-body items-center text-center text-white">
            <h2 className="card-title lg:text-2xl mb-3">James Higuera</h2>
            <p className="text-gray-300 mb-6">"Smooth booking process and the car was fantastic. We enjoyed our road trip without any hassle. Highly recommend!"</p>
            <div className="card-actions w-full">
              <button className="btn btn-outline w-full border-white text-white hover:bg-white hover:text-black transition">
                Read More Reviews
              </button>
            </div>
          </div>
          <figure>
            <img
              src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?t=st=1744111771~exp=1744115371~hmac=aa7cfb147a9239208e64ca03491784c6229cb9a3c75390c3266e4bf9866909f0&w=740"
              alt="Customer 2"
              className="rounded-full object-cover h-52 w-52"
            />
          </figure>
        </div>

        {/* Review Card 3 */}
        <div data-aos="zoom-in-up"
          className="card bg-black w-full grid grid-cols-1 md:grid-cols-2 gap-6 shadow-xl p-6 hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-2xl"
        >
          <figure>
            <img
              src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1744111836~exp=1744115436~hmac=218d99d88b47a966474e2dd675d9ddd38bb18f0e171074783356be9958e36b8b&w=996"
              alt="Customer 3"
              className="rounded-full object-cover h-52 w-52"
            />
          </figure>
          <div className="card-body items-center text-center text-white">
            <h2 className="card-title lg:text-2xl mb-3">Delphia Shaw</h2>
            <p className="text-gray-300 mb-6">"Excellent experience! I rented a luxury car for my anniversary trip, and it was perfect. The team went above and beyond to make everything seamless."</p>
            <div className="card-actions w-full">
              <button className="btn btn-outline w-full border-white text-white hover:bg-white hover:text-black transition">
                Read More Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersReview;
