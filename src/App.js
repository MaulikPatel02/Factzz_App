import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Terms_Of_User from "./components/Terms_Of_User";
import Video_Call from "./components/Video_Call";
import Wallet from "./components/Wallet";
import Your_Carts from "./components/Your_Carts";
import toggle from "../src/images/F-logo.png";
import { useState } from "react";
import Bookmark from "./components/Bookmark";
import Inbox from "./components/Inbox";

function App() {
  const [show, setShow] = useState(false);

  const open = () => {
    setShow(!show);
    console.log("hellooo");
  };

  return (
    <div>
      <BrowserRouter>
        <div className="A">
          <div className="A-1">
            {/* <SideBar />  */}
            {show && (
              <div id="sideBarHIde">
                <SideBar closeBar={open} />
              </div>
            )}
            <div id="extra">
              <SideBar />
            </div>
          </div>
          &nbsp;&nbsp;
          <div className="A-2">
            <svg
              onClick={open}
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              class="bi bi-justify"
              viewBox="0 0 16 16"
              id="togggggg"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            <Header />
            <hr id="hr3" />
            <Routes>
            <Route path="/"  element={ <Terms_Of_User />} />
              <Route index path="/Terms_of_Use"  element={ <Terms_Of_User />} />
              <Route path="/Your_Cards"  element={  <Your_Carts />}/>
              <Route path="/Video_Call"  element={ <Video_Call />} />
              <Route path="/Wallet"  element={  <Wallet />} />
              {/* <Route path="/Bookmark"  element={  <Bookmark/>} /> */}
              {/* <Route path="/Inbox"  element={  <Inbox/>} /> */}
            </Routes>
          </div>
        </div>
        <hr id="hr" />
        <div className="A-3">
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
