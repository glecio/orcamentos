import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Print from "./pages/Print";

export default function App(){
  return(
    <BrowserRouter basename={window.location.pathname || ''}>
      <Routes>
          <Route index element={<Home />} />
          <Route path="print" element={<Print />} />
      </Routes>
    </BrowserRouter>
  )
}