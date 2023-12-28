import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SkylineMeri from './Components/SkylineMeri';
import Entry from './Components/Entry';
import { CountdownProvider } from './Components/CountdownProvider';

function App() {
  return (
    <Router>
      <CountdownProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<SkylineMeri />} />
          <Route path="/entry" element={<Entry />} />
        </Routes>
      </div>
      </CountdownProvider>
    </Router>
  );
}

export default App;