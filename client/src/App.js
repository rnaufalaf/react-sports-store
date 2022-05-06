import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "@popperjs/core";
import "bootstrap";

import { NavBar, MainContent } from "./components";

function App() {
  return (
    <div className="container">
      <div className="header-container">
        <h2 align="center" className="header">
          Sports Store App
        </h2>
      </div>
      <NavBar />
      <body className="body">
        <MainContent />
      </body>
    </div>
  );
}

export default App;
