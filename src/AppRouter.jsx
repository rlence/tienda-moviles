import {BrowserRouter, Routes, Route} from "react-router-dom";

//LAYOUT
import Layout from "./layout/layout";

//VIES
import Home from "./views/home/home";

function AppRouter() {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;
