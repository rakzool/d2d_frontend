import "./styles/App.scss";
import NavBar from "./components/navBar/navBar.component";
// import MenuBar from "./components/menuBar/menuBar.component";

function App() {
  return (
    <div>
      <NavBar />
      {/* <MenuBar /> */}
      <div className="content">
        <h1>Hello world</h1>
      </div>
    </div>
  );
}

export default App;
