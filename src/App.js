import { useEffect, useState } from "react";

function App() {
  const [windowWidth, setWindowWidth] = useState("100vw");
  const [windowScale, setWindowScale] = useState(1);
  const using = "innerWidth";
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowScale(window.visualViewport.scale);
      setWindowWidth(`${width}px`);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        minWidth: windowWidth,
        minHeight: "100vh",
        backgroundColor: "teal",
        fontSize: "1.4em",
      }}
    >
      <div
        style={{
          backgroundColor: "#1976d2",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          color: "white",
          minWidth: windowWidth,
          minHeight: "64px",
        }}
      >
        header inside the container with dynamically set width
        <div
          style={{
            minWidth: 400,
            color: "black",
            backgroundColor: "cyan",
            textAlign: "center",
          }}
        >
          my min-width is 400px
        </div>
      </div>
      <div
        style={{
          color: "cyan",
          padding: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        the container wrapping everything has a dynamic width
        <div
          style={{
            color: "black",
            width: "100%",
            maxWidth: 700,
            height: 300,
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          my width is 100% and my max-width is 700px
        </div>
        <p style={{ margin: 6 }}>Using {using}</p>
        <p style={{ margin: 6 }}>Width</p>
        <p style={{ margin: 6 }}>{windowWidth}</p>
        <p style={{ margin: 6 }}>Viewport scale</p>
        <p style={{ margin: 6 }}>{windowScale}</p>
      </div>
    </div>
  );
}

export default App;
