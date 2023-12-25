import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SkylineMeri from './Components/SkylineMeri';
import Entry from './Components/Entry';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SkylineMeri />} />
          <Route path="/entry" element={<Entry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
