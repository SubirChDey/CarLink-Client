import React, { useContext, useEffect, useState } from 'react';
import { Modal as ResponsiveModal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
import axios from 'axios';
import { AuthContext } from '../provider/AuthProvider';

const CarUpdateModal = ({ open, onClose, car, handleSaveChanges, myRef }) => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        carModel: '',
        dailyRentalPrice: '',
        availability: '',
        vehicleRegistrationNumber: '',
        features: '',
        description: '',
        location: '',
        carImage: '',
    });

    useEffect(() => {
        if (car) {
            setFormData({
                carModel: car.carModel || '',
                dailyRentalPrice: car.dailyRentalPrice || '',
                availability: car.availability || '',
                vehicleRegistrationNumber: car.vehicleRegistrationNumber || '',
                features: car.features ? car.features.join(', ') : '',
                description: car.description || '',
                location: car.location || '',
                carImage: car.carImage || '',

            });
        }
    }, [car]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const handleUpdateCarForm = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const carData = {
                carModel: formData.carModel,
                dailyRentalPrice: parseFloat(formData.dailyRentalPrice),
                availability: formData.availability,
                vehicleRegistrationNumber: formData.vehicleRegistrationNumber,
                features: formData.features.split(",").map(feature => feature.trim()),
                description: formData.description,
                bookingCount: car.bookingCount || 0,
                location: formData.location,
                carImage: formData.carImage,
                saveUserDetails: {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                },
                bookingStatus: car.bookingStatus || "Available"
            };

            const response = await axios.put(`${import.meta.env.VITE_API_URL}/cars/${car._id}`, carData);

            if (response.data.modifiedCount > 0) {
                Swal.fire({
                    title: "Success!",
                    text: "Car details updated successfully",
                    icon: "success",
                    draggable: true
                });
                handleSaveChanges();
            }
        } catch (error) {
            console.error('Update error:', error);
            Swal.fire({
                icon: "error",
                title: "Update Failed",
                text: "Failed to update car details. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <ResponsiveModal
            open={open}
            onClose={onClose}
            center
            container={myRef.current}
            classNames={{
                modal: 'customModal',
                overlay: 'customOverlay',
            }}
            styles={{
                modal: {
                    width: '60%',
                    maxWidth: '80%',
                    padding: '0',
                }
            }}
        >
            {car && (
                <div className="w-full bg-[#060b17] p-8 space-y-3 rounded-xl">
                    <h1 className="text-3xl font-bold text-center text-[#ff3700d7] mb-6">Update Car Details</h1>
                    <form onSubmit={handleUpdateCarForm} className="space-y-6">
                        {/* Car Model */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="carModel" className="block text-white font-bold mb-2">Car Model</label>
                            <input
                                type="text"
                                name="carModel"
                                id="carModel"
                                placeholder="Enter car model"
                                value={formData.carModel}
                                onChange={handleInputChange}
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
                                required
                            />
                        </div>

                        {/* Daily Rental Price */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="dailyRentalPrice" className="block text-white font-bold mb-2">Daily Rental Price ($)</label>
                            <input
                                type="number"
                                name="dailyRentalPrice"
                                id="dailyRentalPrice"
                                placeholder="Enter daily rental price"
                                value={formData.dailyRentalPrice}
                                onChange={handleInputChange}
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
                                required
                                min="0"
                                step="0.01"
                            />
                        </div>

                        {/* Availability */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="vehicleRegistrationNumber" className="block text-white font-bold mb-2">Vehicle Registration Number</label>
                            <select
                                type="text"
                                name="availability"
                                id="availability"
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
                            >
                                <option disabled value="">
                                    Select Availability
                                </option>
                                <option value="Available">Available</option>
                                <option value="Not Available">Not Available</option>
                            </select>

                        </div>

                        {/* Vehicle Registration Number */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="vehicleRegistrationNumber" className="block text-white font-bold mb-2">Vehicle Registration Number</label>
                            <input
                                type="text"
                                name="vehicleRegistrationNumber"
                                id="vehicleRegistrationNumber"
                                placeholder="Enter vehicle registration number"
                                value={formData.vehicleRegistrationNumber}
                                onChange={handleInputChange}
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
                                required
                            />
                        </div>

                        {/* Features */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="features" className="block text-white font-bold mb-2">Features (comma-separated)</label>
                            <input
                                type="text"
                                name="features"
                                id="features"
                                placeholder="Enter features (e.g., AC, GPS, Bluetooth)"
                                value={formData.features}
                                onChange={handleInputChange}
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="description" className="block text-white font-bold mb-2">Description</label>
                            <textarea
                                name="description"
                                id="description"
                                placeholder="Enter car description"
                                value={formData.description}
                                onChange={handleInputChange}
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600 min-h-[100px]"
                                required
                            />
                        </div>

                        <div className="space-y-1 text-sm">
                            <label
                                htmlFor="carImage"
                                className="block text-white font-bold mb-2"
                            >
                                Image
                            </label>
                            <input
                                type="url"
                                name="carImage"
                                id="carImage"
                                value={formData.carImage}
                                placeholder="Enter Image URL"
                                onChange={handleInputChange}
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
                            />
                        </div>

                        {/* Location */}
                        <div className="space-y-1 text-sm">
                            <label htmlFor="location" className="block text-white font-bold mb-2">Location</label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                placeholder="Enter location"
                                value={formData.location}
                                onChange={handleInputChange}
                                className="w-full bg-[#1F2937] text-white px-4 py-2 rounded-md focus:border-red-600"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full p-3 text-center rounded-md bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] text-white font-bold hover:bg-gradient-to-l transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Updating...' : 'Update Car'}
                        </button>
                    </form>
                </div>
            )}
        </ResponsiveModal>
    );
};

export default CarUpdateModal;