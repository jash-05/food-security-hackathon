import "./App.css";
import Footer from "./Footer";
import LeftPanel from "./LeftPanel";
import Navbar from "./Navbar";
import Stage from "./Stage";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Dnd from "./Dnd";
import SankeyChart from "./SankeyChart";

function App() {
  return (
    // <DndProvider backend={HTML5Backend}>
    <div className="App">
      <Navbar />

      <div className="body-wrapper">
        <LeftPanel />
        <Stage />
      </div>
      <SankeyChart />
      <Footer />
    </div>
    // </DndProvider>
  );
}

export default App;
