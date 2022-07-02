import React from "react";
import { Routes, Route } from "react-router-dom";

import AccountAcess from "./pages/AccountAcess";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<AccountAcess />} />
        <Route path="/homepage" replace={true} element={<Homepage />}>
        <Route index path=":dashboard" element={<Homepage />} />
        {/* <Route path=":ratings" element={<Dashboard />} />
        <Route path=":ativities" element={<Dashboard />} /> */}
      </Route>
      </Routes>
    </>
  );
}

export default App;
