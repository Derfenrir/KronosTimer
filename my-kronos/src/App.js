import React, { Component } from 'react';
import Header from './componentes/Inicio/Header';
import Footer from './componentes/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Xbox36 from './componentes/Formulario/formXbox360';


class App extends Component {
  render() {
    return (
      <Router>
        <Header />
          <Footer />
        <div className="container-fluid">
         
          <Route path='/xbox36' exact component={Xbox36}/>
          
          
        </div>
      </Router>

    );
  }
}
export default App;


