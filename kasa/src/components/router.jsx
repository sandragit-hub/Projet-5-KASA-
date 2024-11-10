import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import Habitation from '../pages/Habitation';

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<Error />} />
            <Route path="/habitation/:id" element={<Habitation />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
}

export default AppRouter;

