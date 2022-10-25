import {BrowserRouter, Routes, Route} from "react-router-dom";

//LAYOUT
import Layout from "./layout/layout";

//VIES
import Home from "./views/home/home";
import Detail from "./views/detail/detail";

function AppRouter() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Detail />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;
