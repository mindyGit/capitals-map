import { HashRouter, Routes, Route } from "react-router-dom";
import CapitalsMap from "./CapitalsMap";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<CapitalsMap />} />
       
      </Routes>
    </HashRouter>
  );
}

export default App;
