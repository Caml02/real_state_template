import Main from './components/Main/Main';
import ContactUs from './components/Contact/ContactUs';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import Blog from './components/Blog/Blog';
import Adds from './components/Adds/Adds';
import Add from './components/Adds/Add';
import BlogReview from './components/Blog/BlogReview';

const AppRouter = () => {
    return (
        <Routes>
            <Route  path="/" element={<Main />} />
            <Route  path="/ContactUs" element={<ContactUs />} />
            <Route  path="/AboutUs" element={<AboutUs />} />
            <Route  path="/Blog" element={<Blog />} />
            <Route  path="/BlogReview" element={<BlogReview />} />            
            <Route  path="/Adds" element={<Adds />} />
            <Route  path="/Add" element={<Add />} />
         </Routes>
      );
}

export default AppRouter;
