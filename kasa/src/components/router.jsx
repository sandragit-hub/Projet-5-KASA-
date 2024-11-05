import { Route, Routes } from 'react-router-dom';
import Home from '../assets/pages/Home';
import About from '../assets/pages/About';
import Error from '../assets/pages/Error';
import Habitations from '../assets/pages/Habitations';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<Error />} />
            <Route path="/habitations/*" element={<Habitations />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default AppRouter;

