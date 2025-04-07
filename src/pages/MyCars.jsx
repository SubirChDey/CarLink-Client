import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from 'date-fns';
import Swal from "sweetalert2";
import CarUpdateModal from "../components/CarUpdateModal";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin4Fill } from "react-icons/ri";

const MyCars = () => {

  const { user } = useContext(AuthContext);
  console.log(user);

  const [addedCars, setAddedCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const myRef = useRef(null);

  const fetchCars = () => {
    setLoading(true);
    axios.get(`${import.meta.env.VITE_API_URL}/my-cars?email=${user.email}`)
    // axios.get(`${import.meta.env.VITE_API_URL}/my-cars/${user.email}`)
      .then(response => {
        setAddedCars(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
        // ErrorToaster("Failed to fetch your added cars");
      });
  };

  useEffect(() => {
    if (user?.email) {
      fetchCars();
    }
  }, [user?.email]);


  const handleDeleteCar = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_API_URL}/cars/${id}`)
          .then(response => {
            if (response.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Car has been deleted successfully.",
                icon: "success"
              });
              setAddedCars(prevCars => prevCars.filter(car => car._id !== id));
            }
          })
          .catch(error => {
            console.error(error);
            Swal.fire({
              icon: "error",
              title: "Delete Failed",
              text: "Failed to delete the car. Please try again."
            });
          });
      }
    });
  };

  const handleUpdateCar = (car) => {
    setSelectedCar(car);
    setOpen(true);
  };

  const handleSaveChanges = () => {
    fetchCars();
    setOpen(false);
    setSelectedCar(null);
  };

  return (
    <div>
      <CarUpdateModal
        open={open}
        onClose={() => {
          setOpen(false);
          setSelectedCar(null);
        }}
        car={selectedCar}
        handleSaveChanges={handleSaveChanges}
        myRef={myRef}
      />

      {addedCars.length === 0 ?
        <div>
          <div className="text-center text-gray-400 text-xl">
            You haven&apos;t added any cars yet.
          </div>
          <Link to={'/add-cars'} className="flex justify-center">
            <button className="mt-6 px-6 py-3 font-semibold bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] text-white hover:bg-gradient-to-l  duration-300 border-none rounded-lg hover:scale-105 transition-transform text-sm md:text-base lg:text-lg">Add Car</button>
          </Link>
        </div>
        :

        <div className="overflow-x-auto mt-6 w-11/12 mx-auto">
          <table className="table-auto w-full bg-black border border-gray-700 rounded-lg shadow-lg animate__animated animate__fadeInUp">
            <thead className="bg-black">
              <tr>
                <th className="px-4 py-4 text-white text-center text-xl">Car Image</th>
                <th className="px-4 py-4 text-white text-center text-xl">Car Model</th>
                <th className="px-4 py-4 text-white text-center text-xl">Daily Rental Price</th>
                <th className="px-4 py-4 text-white text-center text-xl">Location</th>
                <th className="px-4 py-4 text-white text-center text-xl">Booking Count</th>
                <th className="px-4 py-4 text-white text-center text-xl">Date Added</th>
                <th className="px-4 py-4 text-white text-center text-xl">Status</th>
                <th className="px-4 py-4 text-white text-center text-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {addedCars.map((car) => (
                <tr key={car._id} className="border-t border-gray-700 hover:bg-[#2C2C2C] transition-colors duration-200">
                  <td className="px-4 py-4">
                    <img
                      src={car.carImage}
                      alt={car.carModel}
                      className="w-28 h-20 object-cover rounded mx-auto"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/placeholder-car.png";
                      }}
                    />
                  </td>
                  <td className="px-4 py-4 text-gray-300 text-center font-semibold">
                    {car.carModel}
                  </td>
                  <td className="px-4 py-4 text-gray-300 text-center font-semibold">
                    ${car.dailyRentalPrice}
                  </td>
                  <td className="px-4 py-4 text-gray-300 text-center font-semibold">
                    {car.location}
                  </td>
                  <td className="px-4 py-4 text-gray-300 text-center font-semibold">
                    {car.bookingCount || 0}
                  </td>
                  <td className="px-4 py-4 text-gray-300 text-center font-semibold">
                    {format(new Date(car.addedDate), 'MM, dd, yyyy')}
                  </td>
                  <td className="px-4 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${car.bookingStatus === "Booked"
                      ? "bg-red-200 text-red-800"
                      : "bg-green-200 text-green-800"
                      }`}>
                      {car.bookingStatus || "Available"}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center">
                    <button
                      onClick={() => handleUpdateCar(car)}
                      className="flex items-center font-semibold text-blue-400 hover:text-blue-600 mx-auto transition-colors duration-200"
                    >
                      <BiEdit className="mr-2 w-5 h-5"></BiEdit>
                      Update
                    </button>
                    <button
                      onClick={() => handleDeleteCar(car._id)}
                      className="flex items-center font-semibold text-red-400 hover:text-red-600 mt-2 mx-auto transition-colors duration-200"
                    >                      
                      <RiDeleteBin4Fill className="mr-2 w-5 h-5"></RiDeleteBin4Fill>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }


    </div>
  )
}

export default MyCars