import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const MainLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <NavBar></NavBar>
        <main className="flex-grow"><Outlet></Outlet></main>
        <Footer></Footer>
    </div>
  )
}

export default MainLayouts