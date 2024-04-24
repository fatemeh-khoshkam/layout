import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyles from "./styles/Global.styled";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
        <GlobalStyles />
      </div>
    </>
  );
}

export default App;
