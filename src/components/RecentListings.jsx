import axios from 'axios';
import React, { useEffect, useState } from 'react'
import RecentListingsCard from './RecentListingsCard';

const RecentListings = () => {
    const [recentCars, setRecentCars] = useState([])

    useEffect(() => {
        fetchRecentCars()
    }, [])

    const fetchRecentCars = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/recentListings`);
        setRecentCars(data)

    };

    return (
        <div>
            <div className='text-center'>
                <h3 className='text-2xl lg:text-5xl font-bold text-white'>Recent Listings</h3>
                <p className='font-medium px-4 text-white'>New beginnings are just a click away — explore the latest listings made for you.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-3'>
                {
                    recentCars.map(recentCar => <RecentListingsCard key={recentCar._id} recentCar={recentCar}> </RecentListingsCard>)
                }
            </div>
        </div>
    )
}

export default RecentListings