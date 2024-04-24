import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyles from "./styles/Global.styled";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <GlobalStyles />
    </>
  );
}

export default App;
