import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Nav from './routes/nav/Nav';
import Home from './routes/home/Home';
import Shop from './routes/shop/Shop';
import Gyms from './routes/gyms/Gyms';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/find-a-gym" element={<Gyms />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
