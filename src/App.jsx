import ImagesGrid from "./components/ImagesGrid";
import OverLay from "./components/OverLay";
import Nav from "./components/Nav";
import Titles from "./components/Titles";

function App() {
  return (
    <main
      id="app"
      className="w-screen min-h-dvh grid place-content-center bg-black relative"
    >
      <Nav />
      <OverLay />
      <ImagesGrid />
      <Titles />
    </main>
  );
}

export default App;
