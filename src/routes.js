import React from 'react';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Error404 from './Components/Error/404';
import Notes from './Components/Notes/Notes';
import App from './Components/App';
import {Route, Routes} from 'react-router-dom';

const AppRoutes = () => (
    <App>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/notes" element={<Notes />}/>
            <Route path="/notes/:noteId" element={<Notes />}/>
            <Route path="*" element={<Error404 />}/>
        </Routes>
    </App>
)

export default AppRoutes;