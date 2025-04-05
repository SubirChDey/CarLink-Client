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
    <div>
      <div>
        <h3>All Cars</h3>
      </div>
      <div>
        {
          cars.map(car => <AvailableCarsCard car={car} > </AvailableCarsCard>)
        }
      </div>
    </div>
  )
}

export default AvailableCars