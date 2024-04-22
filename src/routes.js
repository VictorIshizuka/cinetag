import { Banner } from "components/Banner/banner";
import { Header } from "components/Header";
import { Favorite } from "modules/Favorite";
import home from "../src/assets/Rectangle-1.png";
import { Initial } from "modules/Initial";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "components/Footer/footer";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Banner image={home} />
      <Routes>
        <Route path="/" element={<Initial />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/favorite/:id" element={<h1>area de um video</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
