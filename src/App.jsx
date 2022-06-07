/*  COMPONENT NOTES
    - The App component wraps everything and should primarily be used for
      routing.
*/

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';
import { ThemeContextProvider } from './contexts/ThemeContext';
import { Home, NotFound, About, Welcome, Template } from './pages';

function App() {
  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Template>
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Template>
        </BrowserRouter>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
