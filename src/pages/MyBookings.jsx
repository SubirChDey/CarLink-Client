import { format } from "date-fns";
import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import Swal from "sweetalert2";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [myBookings, setMyBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const startDateRef = useRef(null);
  const endDateRef = useRef(null);
  const COLORS = ['#FACC15', '#22C55E', '#EF4444'];


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

  const handleModifyBooking = (booking) => {
    setSelectedBooking(booking);
    setIsModalOpen(true);
  };

  const handleSaveDateChange = () => {
    const startInput = document.querySelector("#startDateInput");
    const endInput = document.querySelector("#endDateInput");

    const newStartDate = startInput?.value;
    const newEndDate = endInput?.value;

    if (!newStartDate || !newEndDate || !selectedBooking?._id) {
      return toast.error("Please select valid dates.");
    }

    axios.put(`${import.meta.env.VITE_API_URL}/carBooking/${selectedBooking._id}`, {
      startDateTime: newStartDate,
      endDateTime: newEndDate
    })
      .then(res => {
        if (res.data.modifiedCount > 0) {
          setMyBookings(prev =>
            prev.map(booking =>
              booking._id === selectedBooking._id
                ? { ...booking, startDateTime: newStartDate, endDateTime: newEndDate }
                : booking
            )
          );
          setIsModalOpen(false);
          Swal.fire("Success", "Booking date updated!", "success");
        } else {
          Swal.fire("No Change", "No updates were made.", "info");
        }
      })
      .catch(err => {
        console.error(err);
        Swal.fire("Error", "Something went wrong!", "error");
      });
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
                text: "Booking has been cancelled",
                icon: "success"
              });
              setMyBookings(prevBookings => prevBookings.filter(book => book._id !== id));
            }
          })
          .catch(error => {
            console.error(error);
            Swal.fire({
              icon: "error",
              title: "Delete Failed",
              text: "Failed to cancel booking. Please try again."
            });
          });
      }
    });
  };

  const bookingStatusData = [
    { name: 'Pending', value: myBookings.filter(b => b.bookingStatus === 'Pending').length },
    { name: 'Confirmed', value: myBookings.filter(b => b.bookingStatus === 'Confirmed').length },
    { name: 'Cancelled', value: myBookings.filter(b => b.bookingStatus === 'Cancelled').length },
  ];



  return (
    <div>
      <div className="p-4 min-h-screen bg-[#191919] text-white">
        <div className="text-center my-8">
          <h2 className="text-3xl font-bold mb-4">My Bookings</h2>
          <p className="text-gray-300">Each booking is not just a ride — it's a step toward your next adventure. Keep moving forward.</p>
        </div>

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
                    <td className="flex flex-col gap-4 px-4 py-2 border border-gray-700 space-x-2">
                      <button onClick={() => handleModifyBooking(booking)}
                        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm cursor-pointer">
                        <IoCalendarNumberSharp /> Modify Date
                      </button>
                      <button onClick={() => handleDeleteBooking(booking._id)} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm cursor-pointer">
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="my-10 bg-black p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Booking Status Summary</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={bookingStatusData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {bookingStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

          </div>
        )}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white text-black p-6 rounded shadow-lg w-[90%] max-w-md">
            <h3 className="text-xl font-semibold mb-4">Modify Booking Date</h3>

            <label className="block mb-2">
              Start Date:
              <input
                id="startDateInput"
                type="datetime-local"
                defaultValue={selectedBooking?.startDateTime?.slice(0, 16)}
                className="w-full p-2 border rounded mt-1"
              />
            </label>

            <label className="block mb-4">
              End Date:
              <input
                id="endDateInput"
                type="datetime-local"
                defaultValue={selectedBooking?.endDateTime?.slice(0, 16)}
                ref={endDateRef}
                className="w-full p-2 border rounded mt-1"
              />
            </label>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button onClick={handleSaveDateChange}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}



    </div>
  )
}

export default MyBookings