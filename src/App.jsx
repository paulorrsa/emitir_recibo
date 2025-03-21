import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/index.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
             <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
