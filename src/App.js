import './fonts.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Homepage, RecipesPage, RecipeDetailPage, NotFound } from './components';
import PageTransition from './components/PageTransition';
import { RecipesProvider } from './context/RecipesContext';

function App() {
  return (
    <RecipesProvider>
      <Router>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/recipes/:slug" element={<RecipeDetailPage />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </PageTransition>
      </Router>
    </RecipesProvider>
  );
}

export default App;
