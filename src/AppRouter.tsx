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
            <Route  path="/real_state_template/" element={<Main />} />
            <Route  path="real_state_template/ContactUs" element={<ContactUs />} />
            <Route  path="/real_state_template/AboutUs" element={<AboutUs />} />
            <Route  path="/real_state_template/Blog" element={<Blog />} />
            <Route  path="/real_state_template/BlogReview" element={<BlogReview />} />            
            <Route  path="/real_state_template/Adds" element={<Adds />} />
            <Route  path="/real_state_template/Add" element={<Add />} />
         </Routes>
      );
}

export default AppRouter;
