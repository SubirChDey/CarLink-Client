import Banner from "../components/Banner"
import CustomersReview from "../components/CustomersReview"
import ExperiencedDrivers from "../components/ExperienceDrivers"
import Newsletter from "../components/Newsletter"
import RecentListings from "../components/RecentListings"
import SpecialOffers from "../components/SpecialOffers"
import WhyChooseUs from "../components/WhyChooseUs"

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <WhyChooseUs></WhyChooseUs>
        <RecentListings></RecentListings>
        <ExperiencedDrivers></ExperiencedDrivers>
        <SpecialOffers></SpecialOffers>
        <CustomersReview></CustomersReview>
        <Newsletter></Newsletter>
    </div>
  )
}

export default Home