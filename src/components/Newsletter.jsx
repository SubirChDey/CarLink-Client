import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Handle the subscription logic here
      setMessage("Thank you for subscribing!");
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="my-6 lg:my-20 container mx-auto px-4">
      <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-10">
        <h1 className="text-2xl lg:text-5xl font-bold text-white">
          Stay Updated with Our Latest Offers
        </h1>
        <p className="font-medium px-4 text-gray-300">
          Subscribe to our newsletter and never miss out on the latest deals, updates, and special offers!
        </p>
      </div>

      <div className="w-11/12 mx-auto flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex items-center space-x-4 w-full max-w-md mx-auto bg-black p-6 rounded-xl shadow-xl"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg text-gray-300 bg-[#191919]"
            value={email}

            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>

      {message && (
        <div className="mt-6 text-center text-white">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
