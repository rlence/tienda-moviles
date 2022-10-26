import { useState } from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom";

//LAYOUT
import Layout from "./layout/layout";

//VIES
import Home from "./views/home/home";
import Detail from "./views/detail/detail";

//Context
import { HeaderContext } from "./context/headerContext";

function AppRouter() {

  const [value, setValue] = useState({breadcrumbs: ["Products"], cart: 0 });

  return (
    <BrowserRouter>
      <HeaderContext.Provider value={{value, setValue}}>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
            </Routes>
        </Layout>
      </HeaderContext.Provider>
    </BrowserRouter>
  );
}

export default AppRouter;
