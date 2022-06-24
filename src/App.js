import { useEffect, useState } from "react";

function App() {
  const [windowWidth1, setWindowWidth1] = useState(undefined);
  const [windowWidth2, setWindowWidth2] = useState(undefined);
  const [windowWidth3, setWindowWidth3] = useState(undefined);
  const [windowScale, setWindowScale] = useState(1);
  const using = "innerWidth";
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowScale(window.visualViewport.scale);
      setWindowWidth1(`${window.innerWidth}px`);
      setWindowWidth2(`${window.visualViewport.width}px`);
      setWindowWidth3(`${window.screen.width}px`);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        minWidth: windowWidth1,
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
          minWidth: windowWidth1,
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
        <table>
          <tbody>
            <tr>
              <td style={{ width: 250 }}>innerWidth</td>
              <td>{windowWidth1}</td>
            </tr>
            <tr>
              <td>visualViewport.width</td>
              <td>{windowWidth2}</td>
            </tr>
            <tr>
              <td>screen.width</td>
              <td>{windowWidth3}</td>
            </tr>
            <tr>
              <td>visualViewport.scale</td>
              <td>{windowScale}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
