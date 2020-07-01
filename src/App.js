import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Search from './pages/Search';

function App() {
  document.title = "Employee Directory";
  return (
    <div className="App">   
      <Navbar />
        <Wrapper>
          <Search />
        </Wrapper>
      <Footer />
    </div>
  );
}

export default App;
