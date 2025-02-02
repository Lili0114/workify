import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from './views/Home';
import { About } from './views/About';
import { CreateIssue } from './views/CreateIssue';
import { NotFound } from './views/NotFound';
import NavScroll from './components/NavScroll';
import MyIssues from './views/MyIssues';
import Issues from './views/Issues';

function App() {

  return (
    <React.Fragment>
      <Router>
        <NavScroll/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/createIssue" element={<CreateIssue />} />
          <Route path="/myIssues" element={<MyIssues />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
