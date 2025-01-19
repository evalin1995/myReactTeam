import { Link } from "react-router-dom";
import MemberCenter from "../page/MemberCenter";
import Login from "../page/Login";
import AboutUs from "../page/AboutsUs";

export default function Navbar() {
    return (
        // <header id="topbar">
        //     <h1 className="logo">
        //         <a href="https://yesexia1206.github.io/HappyWork1/">
        //             <img src="./images/logo.svg" alt="HappyWork快樂工作共享辦公室" title="HappyWork快樂工作共享辦公室" />
        //             快樂工作共享辦公室
        //         </a>
        //     </h1>
        //     <nav className="topbar-nav">
        //         <ul className="menu">
        //             <li><a href="https://yesexia1206.github.io/HappyWork1/KF/page-location.html">服務據點</a></li>
        //             <li><a href="https://yesexia1206.github.io/HappyWork1/KF/location.html">共享方案</a></li>
        //             <li><Link to=''>關於我們</Link></li>
        //             <li><Link to='/memberCenter'>會員中心</Link></li>
        //         </ul>
        //     </nav>
        // </header>
        
        <header id="topbar">
            <nav className="navigation">
                <h1 className="logo">
                    <a href="https://yesexia1206.github.io/HappyWork1/">
                        <img src="./images/member/logo.png" alt="快樂共享辦公室LOGO" title="快樂共享辦公室"/>
                    </a>
                </h1>
                <h2>快樂工作共享辦公室</h2>
            </nav>
            <div className="navbar">
                <button className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <nav className="navigation">
                    <ul className="menu">
                        <li><a href="https://yesexia1206.github.io/HappyWork1/KF/page-location.html">服務據點</a></li>
                        <li><a href="https://yesexia1206.github.io/HappyWork1/KF/location.html">共享方案</a></li>
                        {/* <li><a href="https://yesexia1206.github.io/LIN16/aboutUs">關於我們</a></li> */}
                        <li><Link to='/aboutus'>關於我們</Link></li>
                        <li><Link to='/login'>會員中心</Link></li>
                    </ul>
        
                    <button>
                        {/* <a href="https://yesexia1206.github.io/LIN16/reservationForm">
                            <img src="./images/member/reservation-button.svg" alt=""/>
                        </a> */}
                        <Link to='/ReservationForm'>
                        <img src="./images/member/reservation-button.svg" alt=""/>
                
                        </Link>
                    </button>
                </nav>
            </div>
        </header>
    )
}