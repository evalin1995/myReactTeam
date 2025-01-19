import { Link, Route, Routes } from "react-router-dom";
// import AboutUs from "./page/AboutsUs";
// import Privacy from "./components/privacy";
// import QASection from "./components/QASection";
// import ReservationForm from "./components/ReservationForm";
// import Chatbot from "./components/Chatbot";
// import Footer from "./components/Footer";
import "./assets/css/member.min.css";
import Login from "./page/Login";
import MemberCenter from "./page/MemberCenter";
import MemberItem from "./page/MemberItem";
import MemberHistory from "./page/MemberHistory";
import SignUp from "./page/SignUp";
import AboutUs from "./page/AboutsUs";
import Privacy from "./components/privacy";
import QASection from "./components/QASection";
import ReservationForm from "./page/ReservationForm";
import Chatbot from "./components/Chatbot";

// import "./App.css";

export default function App() {
  return (
    <>
    {/* <Link to="/aboutUs">關於我們</Link>
    <Link to="/privacy">隱私權政策</Link>
    <Link to="/qaSection">QA</Link>
    <Link to="/reservationForm">預約參觀</Link> */}
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route index element={<AboutUs />}></Route>
        <Route path="/aboutUs" element={<AboutUs />}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
        <Route path="/qaSection" element={<QASection />}></Route>
        <Route path="/reservationForm" element={<ReservationForm />}></Route>
        {/* 會員頁面路由開始 */}
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/memberCenter" element={<MemberCenter />}></Route>
        <Route path="/memberItem" element={<MemberItem />}></Route>
        <Route path="/memberHistory" element={<MemberHistory />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
     
      </Routes>
      {/* <Chatbot/> */}
    </>
  )
}
