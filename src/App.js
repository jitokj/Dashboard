import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="app_container">
      {/* sidebar */}
      <div className="app_container--Sidebar">
        <Sidebar />
      </div>

      {/* navbar */}
      <div className="app_container--Navbar">
        <Navbar />
      </div>
      {/* main area */}
      <div className="app_container--Main">
        <Main />
      </div>
    </div>
  );
}

export default App;
