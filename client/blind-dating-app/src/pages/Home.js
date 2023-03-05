// console.log("Home");
import Nav from "../components/Nav";
import AuthModal from "../components/AuthModal";
import { useState } from "react";
import videoBg from "../images/video.mp4";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

  const authToken = false;

  const handleClick = () => {
    console.log("clicked");
    setShowModal(true);
    setIsSignUp(true);
  };

  return (
    <div>
      <div className="overlay">
        {/* <video src={videoBg} autoPlay loop muted/> */}
        <video autoPlay loop muted>
          <source src={videoBg} type="video/mp4" />
        </video>
        <Nav
          minimal={false}
          setShowModal={setShowModal}
          showModal={showModal}
          setIsSignUp={setIsSignUp}
        />

        <div className="home">
          <h1 className="primary-title">truelink</h1>
          <div className="center-btn">
            <button className="primary-button" onClick={handleClick}>
              {authToken ? "Signout" : "Create Account"}
            </button>
          </div>

          {showModal && (
            <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
