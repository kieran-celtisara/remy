import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import { useRef, useEffect } from 'react';

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
        backgroundColor: "white",
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

function OptionFour() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#0a0a0a",
        perspective: "2500px",
      }}
    >
      <div
        style={{
          width: "70%",
          height: "70%",
          borderRadius: "50%",
          overflow: "hidden",
          position: "relative",
          transformStyle: "preserve-3d",
          background: "#0a0a0a",
          boxShadow: `
            0px 30px 60px rgba(0, 0, 0, 0.7),
            inset 0 0 3px rgba(255, 255, 255, 0.3)
          `,
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Gradient border overlay */}
        <div
          style={{
            position: "absolute",
            inset: -2,
            background: `
              radial-gradient(
                circle at 50% 0%,
                rgba(255,255,255,0.3) 0%,
                rgba(255,255,255,0.15) 50%,
                transparent 70%
              ),
              radial-gradient(
                circle at 50% 100%,
                rgba(255,255,255,0.1) 0%,
                transparent 50%
              ),
              radial-gradient(
                circle at 50% 50%,
                rgba(255,255,255,0.1) 0%,
                transparent 70%
              )
            `,
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        <video
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "0.9",
            filter: "contrast(1.3) brightness(0.9)",
          }}
          autoPlay
          muted
          loop
        >
          <source src="test.mp4" type="video/mp4" />
        </video>
        
        {/* Main sphere shading */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(
                circle at 50% 50%,
                transparent 0%,
                rgba(0,0,0,0.4) 100%
              )
            `,
            pointerEvents: "none",
            mixBlendMode: "multiply",
          }}
        />
        
        {/* Primary top highlight */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(
                circle at 50% 25%,
                rgba(255,255,255,0.4) 0%,
                transparent 45%
              )
            `,
            pointerEvents: "none",
            mixBlendMode: "soft-light",
          }}
        />
        
        {/* Secondary highlight */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(
                circle at 50% 20%,
                rgba(255,255,255,0.5) 0%,
                transparent 30%
              )
            `,
            pointerEvents: "none",
            mixBlendMode: "overlay",
          }}
        />
        
        {/* Edge highlights */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(
                circle at 30% 30%,
                rgba(255,255,255,0.2) 0%,
                transparent 25%
              ),
              radial-gradient(
                circle at 70% 30%,
                rgba(255,255,255,0.2) 0%,
                transparent 25%
              )
            `,
            pointerEvents: "none",
            mixBlendMode: "screen",
          }}
        />
        
        {/* Bottom shadow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(
                circle at 50% 100%,
                rgba(0,0,0,0.8) 0%,
                transparent 60%
              )
            `,
            pointerEvents: "none",
            mixBlendMode: "multiply",
          }}
        />
      </div>
    </div>
  );
}

function OptionFive() {
  const container = useRef(null)
  const stickyMask = useRef(null)

  const initialMaskSize = 0.8
  const targetMaskSize = 50

  const easing = 0.15
  let easedScrollProgress = 0

  useEffect(() => {
    requestAnimationFrame(animate)
  },[])

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress()
    stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + '%'
    requestAnimationFrame(animate)
  }

  const getScrollProgress = () => {
    const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
    const delta = scrollProgress - easedScrollProgress
    easedScrollProgress += delta * easing
    return easedScrollProgress
    
  }

  return(
    <main className="main">
    <div ref={container} className="container">
      <div ref={stickyMask} className="stickyMask">
        <video autoPlay muted loop>
          <source src="test.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    </main>
  );
}

function App() {
  return <OptionFive></OptionFive>;
}

export default App;
