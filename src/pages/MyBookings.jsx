import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);
  

  if (!user) {
    return <LoadingSpinner></LoadingSpinner>
  }

  useEffect(() => {
    if (user?.email) {
      axios.get(`${import.meta.env.VITE_API_URL}/carBooking?email=${user.email}`)
        .then((res) => {
          setMyBookings(res.data);
        })
        .catch((err) => {
          console.error("Error fetching bookings", err);
        });
    }
  }, [user]);


  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500";
      case "Confirmed":
        return "bg-green-500";
      case "Cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };


  const handleDeleteBooking = id => {
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
        axios.delete(`${import.meta.env.VITE_API_URL}/carBooking/${id}`)
          .then(response => {
            console.log(response.data);
            
            if (response.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Car has been deleted successfully.",
                icon: "success"
              });
              setMyBookings(prevCars => prevCars.filter(car => car._id !== id));
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


  return (
    <div>
      <div className="p-4 min-h-screen bg-[#191919] text-white">
        <h2 className="text-2xl font-bold mb-4">My Bookings</h2>

        {myBookings.length === 0 ? (
          <p className="text-gray-400">You haven't booked any car yet.</p>
        ) : (
          <div className="overflow-x-auto bg-black rounded-lg shadow-lg">
            <table className="min-w-full table-auto border border-gray-700 bg-black">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2 border border-gray-700">#</th>
                  <th className="px-4 py-2 border border-gray-700">Car</th>
                  <th className="px-4 py-2 border border-gray-700">Model</th>
                  <th className="px-4 py-2 border border-gray-700">Booking Date</th>
                  <th className="px-4 py-2 border border-gray-700">Total</th>
                  <th className="px-4 py-2 border border-gray-700">Status</th>
                  <th className="px-4 py-2 border border-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myBookings.map((booking, index) => (
                  <tr
                    key={booking._id}
                    className="text-center hover:bg-gray-900 transition duration-200"
                  >
                    <td className="px-4 py-2 border border-gray-700">{index + 1}</td>
                    <td className="px-4 py-2 border border-gray-700">
                      <img
                        src={booking.carImage}
                        alt="car"
                        className="w-20 h-12 object-cover mx-auto rounded"
                      />
                    </td>
                    <td className="px-4 py-2 border border-gray-700">{booking.carModel}</td>
                    <td className="px-4 py-2 border border-gray-700">
                      {new Date(booking.startDateTime).toLocaleString()} <br />
                      <span className="text-sm text-gray-400">to</span> <br />
                      {new Date(booking.endDateTime).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 border border-gray-700">${booking.subTotal}</td>
                    <td className="px-4 py-2 border border-gray-700">
                      <span
                        className={`text-sm px-3 py-1 rounded-full font-medium ${getStatusBadgeColor(
                          booking.bookingStatus
                        )}`}
                      >
                        {booking.bookingStatus}
                      </span>
                    </td>
                    <td className="px-4 py-2 border border-gray-700 space-x-2">
                      <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm">
                        Modify
                      </button>
                      <button onClick={() => handleDeleteBooking(booking._id)} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm">
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyBookings