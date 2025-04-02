// import logo from "../../src/assets/signup.png";


const Footer = () => {
    return (
        <div className="mt-20 mx-auto mb-8 ">
            <footer className="footer sm:footer-horizontal w-11/12 mx-auto  pt-10">
                <div className="flex flex-col text-center items-center">
                    <img className="w-32" src='logo.webp' alt="" />
                    <h3 className=" text-center mb-4">All rights reserved by &copy; CarLink</h3>
                </div>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Cars</a>
                    <a className="link link-hover">Reviews</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Popular Cars</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy Policy</a>
                </nav>
                <nav className="items-center text-center">
                    <h6 className="footer-title">Social</h6>
                    <a href="https://www.facebook.com/SubirChDey" target="_blank" className="link link-hover"> <img className="w-6" src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000" alt="" /> </a>
                    <a href="https://www.twitter.com/SubirChDey" target="_blank" className="link link-hover"> <img className="w-6" src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="" /> </a>
                    <a href="https://www.instagram.com/SubirChDey" target="_blank" className="link link-hover mb-4"><img className="w-6" src="https://img.icons8.com/?size=100&id=119026&format=png&color=000000" alt="" /> </a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;