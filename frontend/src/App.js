import { useSelector } from "react-redux";
import AllRoute from "./routes/AllRoute";
import Navbar from "./components/UserComponents/UserNavbar";



function App() {
  const userStore = useSelector((store)=>store.UserReducer);
  return (
    <div className="App">
    {userStore?.role === "admin" || userStore?.role==='teacher' ? <Navbar/> : null}
      <AllRoute />
    </div>
  );
}

export default App;
