import Aos from "aos";

const drivers = [
    {
        name: "Rick Carney",
        title: "Senior Chauffeur",
        image: "https://img.freepik.com/premium-photo/young-pretty-man-sitting-car_264277-1334.jpg?w=996",
        aos: "fade-right",
        delay: 300
    },
    {
        name: "Raymond Fudge",
        title: "City Tour Guide",
        image: "https://img.freepik.com/free-photo/man-car-driving_23-2148889981.jpg?t=st=1744109602~exp=1744113202~hmac=ef2e9a542c2281b090d59a6623fdd1b8ba0bc6c080d3334450385b82f1b5f4a1&w=996",
        aos: "fade-up",
        delay: 100
    },
    {
        name: "Timothy May",
        title: "Distance Driver",
        image: "https://img.freepik.com/premium-photo/man-car-with-beard-yellow-jacket_950347-26663.jpg?ga=GA1.1.2045710595.1744109536&semt=ais_country_boost&w=740",
        aos: "fade-up",
        delay: 200
    },
    {
        name: "Lewis Grammer",
        title: "Travel Specialist",
        image: "https://img.freepik.com/premium-photo/man-car-with-smile-his-face_748076-3006.jpg?w=996",
        aos: "fade-left",
        delay: 300
    },
    {
        name: "Michael Ferraro",
        title: "Shuttle Driver",
        image: "https://img.freepik.com/free-photo/young-woman-testing-car-car-showroom_1303-17732.jpg?t=st=1744109618~exp=1744113218~hmac=e5d04d960c9970285739829f2b80d125bd76fd65a846a4a619c91fed83d2755e&w=996",
        aos: "fade-right",
        delay: 300
    },
    {
        name: "Walter Best",
        title: "Airport Transfer",
        image: "https://img.freepik.com/free-photo/modern-businessman-trying-his-new-car-automobile-salon_146671-16037.jpg?t=st=1744109622~exp=1744113222~hmac=1c1e382c14bf1c4fc52f99f59d9d0abca8ba8fa42051c5f8bc154f44875e204e&w=996",
        aos: "fade-up",
        delay: 300
    },
    {
        name: "Robert Bergman",
        title: "Executive Chauffeur",
        image: "https://img.freepik.com/free-photo/happy-satisfied-customer-just-bought-brand-new-car-vehicle-dealership_342744-720.jpg?t=st=1744109623~exp=1744113223~hmac=19ce679247d82d012a74a7b1c39fb307207b7a21adcbbfcbb61340a52422707e&w=996",
        aos: "fade-up",
        delay: 300
    },
    {
        name: "John Velazquez",
        title: "Travel Consultant",
        image: "https://img.freepik.com/free-photo/that-s-awesome-modern-businessman-trying-his-new-car-automobile-salon_146671-16704.jpg?t=st=1744109771~exp=1744113371~hmac=6c3fc5a277ed01edc799ec2d03cd383450f1cf4e346bdfe83f0da5c60a7edacc&w=996",
        aos: "fade-left",
        delay: 300
    }
];

const ExperiencedDrivers = () => {

    return (
        <div className="bg-[#191919] text-white pb-20 px-4 text-center">
            <h3 className="text-2xl lg:text-5xl font-bold text-white m-4"> Our Experienced Drivers </h3>
            <p className="font-medium px-4 text-gray-300 py-2 mb-4">Ensuring your safety and comfort on every journey</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer w-4/5 mx-auto">
                {drivers.map((driver, index) => (
                    <div key={index} className="rounded-lg p-4 border-1 border-gray-500" data-aos={driver.aos} data-aos-delay={driver.delay}>
                        <img src={driver.image} alt={driver.name} className="rounded-lg w-full mb-4 hover:scale-105 transition-transform" />
                        <h3 className="text-lg font-semibold">{driver.name}</h3>
                        <p className="text-sm text-gray-400">{driver.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExperiencedDrivers;