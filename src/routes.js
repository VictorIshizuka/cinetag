import { Header } from "components/Header";
import { Favorite } from "modules/Favorite";
import { Initial } from "modules/Initial";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "components/Footer/footer";
import { FavoriteProvider } from "context/favoriteContext";
import { FavoriteId } from "modules/FavoriteId";
import { NotFound } from "modules/NotFound";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <FavoriteProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Initial />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/:id" element={<FavoriteId />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </FavoriteProvider>
    </BrowserRouter>
  );
};
