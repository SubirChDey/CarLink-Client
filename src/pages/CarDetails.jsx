import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { MdAlternateEmail, MdEventAvailable, MdOutlineLocationOn } from "react-icons/md";
import { PiCurrencyDollarFill } from "react-icons/pi";
import { SiBigcartel } from "react-icons/si";
import { VscOpenPreview } from "react-icons/vsc";
import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { AuthContext } from "../provider/AuthProvider";
import LoadingSpinner from "../components/LoadingSpinner";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const CarDetails = () => {
  const carDetailsInfo = useLoaderData('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    return <LoadingSpinner />
  }

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const today = new Date().toISOString().slice(0, 16);
  const { _id, carModel, carImage, vehicleRegistrationNumber, addedDate, dailyRentalPrice, availability, features, description, location, userEmail, userName } = carDetailsInfo;
  console.log(carDetailsInfo);


  useEffect(() => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const diffInDays = 1 + (end - start) / (1000 * 60 * 60 * 24);
      const total = Math.ceil(diffInDays * dailyRentalPrice);
      setTotalPrice(total);
    }
  }, [dailyRentalPrice, endDate, startDate]);


  const renderFeatures = (featuresArray) => {
    if (!Array.isArray(featuresArray)) return null;

    return (
      <ul className="list-disc pl-5 text-white">
        {featuresArray.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    );
  };


  const handleBooking = (e) => {
    e.preventDefault();
    console.log({ startDate, endDate, totalPrice });
  };

  const handleBookNow = (e) => {
    e.preventDefault();

    const form = e.target;
    const startDateTime = new Date(startDate);
    const endDateTime = new Date(endDate);
    const subTotal = totalPrice;
    const car_id = _id;
    const bookingStatus = "Pending";
    const bookedBy = user?.email;
    const newCarBooking = {
      startDateTime,
      endDateTime,
      subTotal,
      car_id,
      carImage,
      carModel,
      bookedBy,
      dailyRentalPrice,
      bookingStatus,
    };

    if (user?.email === userEmail)
      return toast.error("It is your car. You do not have to book this.");
    Swal.fire({
      title: "Your Booking Summary",
      html: `Car: ${carModel} <br> 
      Location: ${location} <br>
      Car Registration Number: ${vehicleRegistrationNumber} <br>
      Start Date: ${moment(startDate).format("lll")}  <br>
      End Date: ${moment(endDate).format("lll")} <br>
      <strong>Total Bill: $${totalPrice}</strong>
      `,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Confirm Booking",
      background: "#191919",
      color: "white"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/carBooking`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newCarBooking),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success",
                text: "Car Booking is Successful",
                icon: "success",
                confirmButtonText: "Cool",
              });
              navigate(`/my-bookings`);
              form.reset();
            }
          });
      }
    });
  };



  return (
    <div className="bg-[#191919] py-10">
      <div className="mt-4 md:mt-6 lg:mt-8 mb-12 ">
        <div className="md:w-8/12 mx-auto flex flex-col justify-center items-center text-center gap-4 mb-5">
          <h1 className={`text-2xl lg:text-5xl font-bold text-white`}>{carModel}</h1>
        </div>
        <div className="card p-6 w-11/12 mx-auto lg:max-w-screen-md shrink-0 shadow-2xl border bg-black text-white">
          
          <div className="flex flex-col-reverse md:grid md:grid-cols-1 gap-6">
            <div className="w-full h-80 md:h-96 lg:h-[30rem]">
              <img
                alt={carModel}
                src={carImage}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-xl lg:text-2xl font-extrabold">{carModel}</h1>
              <div>
                <div className="overflow-x-auto">
                  <table className="table md:text-xl md:w-8/12 mx-auto border-collapse border border-gray-600">
                    <tbody>
                      {/* row 1 */}
                      <tr className="border-b border-gray-600">
                        <td className="text-primary text-xl p-2">
                          <IoMdPricetags />
                        </td>
                        <td className="font-bold p-2">Reg No :</td>
                        <td className="p-2">{vehicleRegistrationNumber}</td>
                      </tr>
                      {/* row 2 */}
                      <tr className="border-b border-gray-600">
                        <td className="text-primary text-xl p-2">
                          <FaRegClock />
                        </td>
                        <td className="font-bold p-2">Date Posted:</td>
                        <td className="p-2">{moment(addedDate).format("MMM Do YY")}</td>
                      </tr>
                      {/* row 3 */}
                      <tr className="border-b border-gray-600">
                        <td className="text-primary text-xl p-2">
                          <PiCurrencyDollarFill />
                        </td>
                        <td className="font-bold p-2">Price :</td>
                        <td className="p-2">${dailyRentalPrice}/day</td>
                      </tr>
                      {/* row 4 */}
                      <tr className="border-b border-gray-600">
                        <td className="text-primary text-xl p-2">
                          <MdEventAvailable />
                        </td>
                        <td className="font-bold p-2">Availability :</td>
                        <td className="p-2">
                          {availability === true ? "Available" : "Unavailable"}
                        </td>
                      </tr>
                      {/* row 5 */}
                      <tr>
                        <td className="text-primary text-xl p-2">
                          <MdOutlineLocationOn />
                        </td>
                        <td className="font-bold p-2">Location :</td>
                        <td className="p-2">{location}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <h1 className="text-xl lg:text-2xl font-extrabold text-white">{carModel} Details:</h1>
            <div className="">
              <div className="flex items-center gap-2">
                <span className="text-primary text-xl">
                  <VscOpenPreview />
                </span>
                <span>Owner :</span>
                <span>{userName}</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-primary text-xl">
                  <MdAlternateEmail />
                </span>
                <span>Contact Owner :</span>
                <span>{userEmail}</span>
              </div>
            </div>
         
            <div>
              <p className="text-lg text-white">Features:</p>
              {renderFeatures(features)}
            </div>

            <p className="text-white">Description : {description}</p>
          </div>

          {user ? (
            <div>
              <form onSubmit={handleBooking}>
                {availability ? (
                  <div className="flex justify-end items-center gap-4">
                    <p className="text-center my-5 text-sm text-white">
                      Please Fill the Form below before Confirming Booking
                    </p>
                    <button type="submit" onClick={handleBookNow} className="btn bg-primary">
                      <SiBigcartel />
                      Book Now
                    </button>
                  </div>
                ) : (
                  <p className="my-5 text-end text-red-700">Sorry, This car is not available for Booking</p>
                )}
                <div>
                  <div>
                    <div className="grid lg:grid-cols-2 gap-4">
                      <div className="">
                        <label className="label">
                          <span className="label-text text-xl font-normal text-white">Pick Start Date</span>
                        </label>
                        <input
                          name="startDate"
                          type="datetime-local"
                          value={startDate}
                          onChange={(e) => {
                            setStartDate(e.target.value);
                          }}
                          min={today}
                          max={endDate || ""}
                          placeholder="Pick a start date"
                          className="input input-bordered w-full bg-[#191919] text-white"
                          required
                        />
                      </div>
                      <div className="">
                        <label className="label">
                          <span className="label-text text-xl font-normal text-white">Pick End Date</span>
                        </label>
                        <input
                          name="endDate"
                          type="datetime-local"
                          value={endDate}
                          onChange={(e) => {
                            setEndDate(e.target.value);
                          }}
                          min={startDate || today}
                          placeholder="Pick an end date"
                          className="input input-bordered w-full bg-[#191919] text-white"
                          required
                        />
                      </div>
                      <div className="">
                        <label className="label">
                          <span className="label-text text-xl font-normal text-white">Total Price: ${totalPrice}</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            <div className="flex justify-end items-center gap-4">
              <p className="text-center my-5 text-sm text-white">
                Please Login to Book Your Ride
              </p>
              <Link to="/login">
                <button className="btn bg-primary">Login</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

export default CarDetails