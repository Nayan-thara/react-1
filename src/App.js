import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurentlist from './components/Restaurentlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ViewRest from './components/ViewRest';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes> 

            {/* path for restaurentlist */}
            <Route path='/' element={<Restaurentlist />}/>
            {/* path for ViewRest */}
            <Route path='/view-restaurant/:id' element={<ViewRest/>}/>

        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
