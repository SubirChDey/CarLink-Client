import { useLoaderData } from "react-router-dom"

const CarDetails = () => {
    const carDetailsInfo = useLoaderData()
    const {carModel } = carDetailsInfo;
  return (
    <div>car detail: {carModel}</div>
  )
}

export default CarDetails