import Home from './pages/Home';
import Shop from './pages/Shop';
import {Route, Routes, BrowserRouter} from 'react-router-dom';


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/shop" element={<Shop/>} />
            </Routes>
        </BrowserRouter>
    );
}