import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
// import {Test,Test1, Test2, Test3, Test4, Test5,Test6,Test7,Test8} from './mini_projects/test1';
import { Login, Register, Homepage } from './pages/pages.js';
import {UseEffectTimeout} from './mini_projects/test2.js';
const App = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/homepage' element={<Homepage/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login'element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );

    };

export default App;
