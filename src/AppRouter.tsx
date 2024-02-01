import Main from './components/Main';
import ContactUs from './components/Contact/ContactUs';
import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
    return (
        <Routes>
            <Route  path="/" element={<Main />} />
            <Route  path="/ContactUs" element={<ContactUs />} />
         </Routes>
      );
}

export default AppRouter;
