import { Header } from "components/Header";
import { Favorite } from "modules/Favorite";
import { Initial } from "modules/Initial";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "components/Footer/footer";
import { FavoriteProvider } from "context/favoriteContext";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <FavoriteProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/:id" element={<h1>area de um video</h1>} />
        </Routes>
        <Footer />
      </FavoriteProvider>
    </BrowserRouter>
  );
};
