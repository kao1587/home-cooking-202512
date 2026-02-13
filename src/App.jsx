import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Jitanrecipe from './pages/Jitanrecipe';
import JitanrecipeSubmit from './pages/JitanrecipeSubmit';
import Home from './pages/Home';
import Recipe from './pages/Recipe.jsx';
import FooterLink from './components/FooterLink';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollToHash from './components/ScrollToHash';


function App() {
    return (
        <BrowserRouter basename="/home-cooking-202512">
            <ScrollToHash />
            <ScrollToTop />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/jitanrecipe" element={<Jitanrecipe />} />
                    <Route path="/jitanrecipeSubmit" element={<JitanrecipeSubmit />} />
                    <Route path="/jitanrecipe/recipe" element={<Recipe />} />
                    <Route path="/jitanrecipeSubmit/recipe" element={<Recipe />} />
                </Routes>
            </main>
            <FooterLink />
            <Footer />
        </BrowserRouter>
    );
}

export default App;