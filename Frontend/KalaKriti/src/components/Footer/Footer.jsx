import { Link } from "react-router"
import "./Footer.css"

function Footer () {
    return(
        <>
            <div className="main-container sitcky bottom-0 pt-5 pl-10 pr-10 lg:pt-10 lg:pl-15 lg:pr-15 flex flex-wrap justify-between align-center bg-[#332e2b] text-white">
                <div className="content About">
                    <h1>ABOUT</h1>
                    <Link to={"https://www.instagram.com/_a.b.h.i.s.h.e.k_001_official/"}>Contact Us</Link>
                    <Link to={"https://www.instagram.com/_a.b.h.i.s.h.e.k_001_official/"}>About Us</Link>
                    <Link to={"https://www.instagram.com/_a.b.h.i.s.h.e.k_001_official/"}>Careers</Link>
                    <Link to={"/"}>KalaKriti Stories</Link>
                </div>
                <div className="content Help">
                    <h1>HELP</h1>
                    <Link>Payments</Link>
                    <Link>Shipping</Link>
                    <Link to={"https://www.instagram.com/_a.b.h.i.s.h.e.k_001_official/"}>Cancellation & Returns</Link>
                    <Link to={"https://www.instagram.com/_a.b.h.i.s.h.e.k_001_official/"}>FAQ</Link>
                </div>
                <div className="content Consumer-Policy">
                    <h1>CONSUMER POLICY</h1>
                    <Link to={"https://www.instagram.com/_a.b.h.i.s.h.e.k_001_official/"}>Terms Of Use</Link>
                    <Link to={"https://www.instagram.com/_a.b.h.i.s.h.e.k_001_official/"}>Security</Link>
                    <Link to={"https://www.instagram.com/_a.b.h.i.s.h.e.k_001_official/"}>Privacy</Link>
                </div>
                <div className="content Mail-Us">
                    <h1>MAIL US</h1>
                    <p>KalaKriti Private Limited, Bilaspur, 495001, Chhattisgarh, India</p>
                    <h1>SOCIALS</h1>
                    <div className="Socials">
                        <Link to={"https://www.facebook.com/abhishek.kesharwani.1213986/"}><i class="fa-brands fa-facebook"></i></Link>
                        <Link to={"https://www.instagram.com/_a.b.h.i.s.h.e.k_001_official/"}><i class="fa-brands fa-instagram"></i></Link>
                        <Link to={"https://x.com/Abhishe64111743"}><i class="fa-brands fa-x-twitter"></i></Link>
                        <Link to={"https://www.youtube.com/@abhishekkesharwani9084"}><i class="fa-brands fa-youtube"></i></Link>
                    </div>
                </div>
            </div>
            <div className="copy-right sitcky bottom-0 pt-5 pl-10 pr-10 pb-5 lg:pt-10 lg:pl-15 lg:pr-15 lg:pb-10 flex flex-col justify-center align-center bg-[#332e2b] text-white">
                    <p className="text-center">KalaKriti Private Limited</p>
                    <p className="text-center">&#169; Copyright 2025. All rights reserved.</p>
                    <p className="text-center">Design, Develop & Managed by <strong className="text-[#d26c3d]">Abhishek Kesharwani</strong></p>
            </div>
        </>
    )
}

export default Footer