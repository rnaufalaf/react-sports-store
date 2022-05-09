import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@popperjs/core";
import "bootstrap";

import { NavBar, MainContent } from "./components";

function App() {
  return (
    <div className="container">
      <div className="header-container bg-dark">
        <h2 align="center" className="header" style={{ color: "gold" }}>
          Sports Store App
        </h2>
      </div>
      <div>
        <NavBar />
      </div>
      <div>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
