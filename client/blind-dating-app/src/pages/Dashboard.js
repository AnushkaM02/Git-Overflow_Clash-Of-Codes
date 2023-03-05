// import React, { useState } from "react";
// import MatchCard from "./MatchCard";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const [showMatchCard, setShowMatchCard] = useState(false);
//   const [isMatchingStarted, setIsMatchingStarted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleStartMatching = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setShowMatchCard(true);
//       setIsMatchingStarted(true);
//       setIsLoading(false);
//     }, 2000); // Replace with your loading time in milliseconds
//   };

//   return (
//     <>
//       <div className="start-matching-button-container">
//         <button
//           className={`start-matching-button${showMatchCard ? " card-open" : ""}`}
//           onClick={handleStartMatching}
//           disabled={isMatchingStarted}
//         >
//           {isLoading ? "Loading..." : isMatchingStarted ? "Matching Started" : "Start Matching"}
//         </button>
//         {showMatchCard && (
//           <div className="match-card-overlay">
//             <MatchCard
//               name="John Doe"
//               age="24"
//               interests="Hiking, reading, cooking"
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Dashboard;

// Perfectly working basic UI

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import MatchCard from "./MatchCard";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const [showMatchCard, setShowMatchCard] = useState(false);
//   const [isMatchingStarted, setIsMatchingStarted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleStartMatching = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setShowMatchCard(true);
//       setIsMatchingStarted(true);
//       setIsLoading(false);
//       setTimeout(() => {
//         navigate("/chat");
//       }, 2000); // Redirect after 2 seconds
//     }, 2000); // Replace with your loading time in milliseconds
//   };

//   return (
//     <>
//       <div className="start-matching-button-container">
//         <button
//           className={`start-matching-button${showMatchCard ? " card-open" : ""}`}
//           onClick={handleStartMatching}
//           disabled={isMatchingStarted}
//         >
//           {isLoading ? "Loading..." : isMatchingStarted ? "Matching Started" : "Start Matching"}
//         </button>
//         {showMatchCard && (
//           <div className="match-card-overlay">
//             <MatchCard
//               name="John Doe"
//               age="24"
//               interests="Hiking, reading, cooking"
//             />
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Dashboard;

// backgroundImage

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MatchCard from "./MatchCard";
import "./Dashboard.css";

const backgroundImage =
  "https://imgs.search.brave.com/ljxCqHFnBwXcfQwlQsUL2DztfP6qY2j4uPRkBcUf1E0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuaW5kZXBlbmRl/bnQuY28udWsvczNm/cy1wdWJsaWMvdGh1/bWJuYWlscy9pbWFn/ZS8yMDE2LzAzLzE5/LzE4L3dlYi1kYXRp/bmctbWF0Y2gtcmV4/LmpwZw";

const Dashboard = () => {
  const [showMatchCard, setShowMatchCard] = useState(false);
  const [isMatchingStarted, setIsMatchingStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleStartMatching = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowMatchCard(true);
      setIsMatchingStarted(true);
      setIsLoading(false);
      setTimeout(() => {
        navigate("/chat");
      }, 2000); // Redirect after 2 seconds
    }, 2000); // Replace with your loading time in milliseconds
  };

  return (
    <>
      <div
        className="dashboard-container"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="start-matching-button-container">
          <button
            className={`start-matching-button${
              showMatchCard ? " card-open" : ""
            }`}
            onClick={handleStartMatching}
            disabled={isMatchingStarted}
          >
            {isLoading
              ? "Loading..."
              : isMatchingStarted
              ? "Matching Started"
              : "Start Matching"}
          </button>
          {showMatchCard && (
            <div className="match-card-overlay">
              <MatchCard
                name="Georgia Matthews"
                age="24"
                interests="Hiking, Reading, Cooking"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
