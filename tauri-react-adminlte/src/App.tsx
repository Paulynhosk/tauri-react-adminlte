import { Routes, Route } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";

function Apps () {
    return (
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
        </Routes>
    )
}

export default Apps