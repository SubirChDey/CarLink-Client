import axios from "axios"
import { useEffect, useState } from "react"
import AvailableCarsCard from "../components/AvailableCarsCard"
import AvailableCarsListCard from "../components/AvailableCarsListCard"

const AvailableCars = () => {
  const [cars, setCars] = useState([])
  const [sortOption, setSortOption] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [view, setView] = useState("grid");
  // const [filteredCars, setFilteredCars] =useState('')

  useEffect(() => {
    fetchAllCars()

  }, [])

  const fetchAllCars = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/cars`)
    setCars(data)
  }

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCars = cars.filter(car =>
    car.carModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // useEffect(() => {
  //   const filteredCars = cars.filter(car =>
  //     car.carModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     car.location.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  //   setFilteredCars(filteredCars);
  // }, [searchTerm, cars]);

  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortOption) {
      case "priceLowToHigh":
        return a.dailyRentalPrice - b.dailyRentalPrice;
      case "priceHighToLow":
        return b.dailyRentalPrice - a.dailyRentalPrice;
      case "dateNewest":
        return new Date(b.addedDate) - new Date(a.addedDate);
      case "dateOldest":
        return new Date(a.addedDate) - new Date(b.addedDate);
      default:
        return 0;
    }
  });


  return (
    <div className="bg-[#191919]">
      <div className="w-11/12 mx-auto">
        <div className="text-white text-center mb-10">
          <h3 className="text-3xl font-bold py-6">Available Cars</h3>
          <p>Explore our extensive selection of rental cars, available at competitive <br /> rates with convenient pickup locations and flexible availability.</p>
        </div>


        <div className="w-11/12 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-x-4 space-y-4 my-10">
            <select
              className="px-4 py-2 rounded-lg w-full md:w-auto bg-gray-950 text-white font-semibold border border-slate-200"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="default">Sort By</option>
              <option value="priceLowToHigh">Low to High</option>
              <option value="priceHighToLow">High to Low</option>
              <option value="dateNewest">Latest Added</option>
              <option value="dateOldest">Oldest Added</option>
            </select>

            <div className="flex-shrink-0 w-full md:w-32">
              <button
                className="btn btn-sm mr-2 bg-gradient-to-r from-[#FF3600] to-[#ff3700d7] w-full text-white font-bold hover:bg-gradient-to-l transition-all duration-300 border-none"
                onClick={() => setView(view === "grid" ? "list" : "grid")}
              >
                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" className="" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M80 368H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 64v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16zm0 160H16a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16zm416 176H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z"></path></svg>
                {view === "grid" ? "List View" : "Grid View"}
              </button>
            </div>

            <label className="input">
              <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
              <input type="search" required placeholder="Search" value={searchTerm} onChange={handleSearch} />
            </label>
          </div>
        </div>
        
        <div className={`${view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "grid grid-cols-1 gap-4 mx-4"}`}>
          {
            sortedCars.map(car => view === "grid" ? <AvailableCarsCard key={car._id} car={car} > </AvailableCarsCard> : <AvailableCarsListCard key={car._id} car={car} > </AvailableCarsListCard>)
          }
        </div>
      </div>
    </div >
  )
}

export default AvailableCars