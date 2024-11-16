import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Error from '../pages/Error/Error';
import Location from '../pages/Location/Location';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<Error />} />
            <Route path="/location/:id" element={<Location />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default AppRouter;

