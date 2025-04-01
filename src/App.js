import logo from "./logo.svg";
import "./App.css";
function OptionOne() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -1,
        }}
      >
        <source src="test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fullscreen Text */}
      <div
        style={{
          fontFamily: '"League Spartan", sans-serif',
          fontOpticalSizing: "auto",
          fontWeight: 900,
          fontStyle: "normal",
          fontSize: "20vw", // Makes text scale with viewport width
          color: "white",
          textAlign: "center",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mixBlendMode: "difference", // Helps the text stand out on bright/dark videos
        }}
      >
        RQ
      </div>
    </div>
  );
}
const OptionTwo = () => {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
          height: "100%",
          objectFit: "cover",
        }}
        autoPlay
        muted
        loop
      >
        <source src="test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <div
          style={{
            top: "50%",
            left: "50%",
            position: "absolute",
            height: "100%",
            width: "100%",
            zIndex: 20,
            background: "url(testremy.png) no-repeat center center",
            backgroundSize: "cover",
            transform: "translate(-50%, -50%)", // Centers the div both horizontally and vertically
          }}
        ></div>
      </div>
    </div>
  );
};
function OptionThree() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          width: "70%",
          height: "50%",
          borderRadius: "50%",
          overflow: "hidden",
          position: "relative",
          background: "radial-gradient(circle at top left, rgba(255,255,255,0.2), transparent 70%)",
          boxShadow: "inset 5px 5px 10px rgba(255, 255, 255, 0.1), 0px 15px 40px rgba(0, 0, 0, 0.6)",
          transform: "rotateX(15deg) rotateY(-10deg)",
        }}
      >
        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the video covers the circular area
          }}
          autoPlay
          muted
          loop
        >
          <source src="test.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

function App() {
  return <OptionThree></OptionThree>;
}

export default App;
