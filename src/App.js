import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Home from './pages/home/Home';
import HelpTable from './pages/helpTable/HelpTable';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/helptable' element={<HelpTable/>}/>
                {/*<Route path='/hotels/:id' element={<Hotel/>}/>*/}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
