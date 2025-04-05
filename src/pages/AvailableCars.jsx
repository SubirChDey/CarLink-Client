import axios from "axios"
import { useEffect, useState } from "react"
import AvailableCarsCard from "../components/AvailableCarsCard"

const AvailableCars = () => {
  const [cars, setCars] = useState([])
  useEffect(() => {
    fetchAllCars()

  }, [])

  const fetchAllCars = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/cars`)
    setCars(data)
  }

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <h3>All Cars</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {
          cars.map(car => <AvailableCarsCard key={car._id} car={car} > </AvailableCarsCard>)
        }
      </div>
    </div>
  )
}

export default AvailableCars