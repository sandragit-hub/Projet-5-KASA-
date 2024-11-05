import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Error from '../../pages/Error';
import Habitations from '../../pages/Habitations';

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

