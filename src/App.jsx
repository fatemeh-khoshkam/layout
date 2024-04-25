import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyles from "./styles/Global.styled";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
        <GlobalStyles />
      </div>
      <Footer />
    </>
  );
}

export default App;
