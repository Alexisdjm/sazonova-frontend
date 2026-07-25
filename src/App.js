import "./fonts.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  Homepage,
  RecipesPage,
  RecipeDetailPage,
  ProductPage,
  NotFound,
} from "./components";
import PageTransition from "./components/PageTransition";
import { RecipesProvider } from "./context/RecipesContext";
import { ProductsProvider } from "./context/ProductsContext";

function App() {
  return (
    <RecipesProvider>
      <ProductsProvider>
        <Router>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/recipes" element={<RecipesPage />} />
              <Route path="/recipes/:slug" element={<RecipeDetailPage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </PageTransition>
        </Router>
      </ProductsProvider>
    </RecipesProvider>
  );
}

export default App;
