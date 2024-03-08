import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';

import Dashboard from './Components/Dashboard/Dashboard';
import Footer from './Components/Footer/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Expance from './Components/Expance/Expance';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import EmployeeData from './Components/EmployeeData/EmployeeData';
import CompanyData from './Components/CompanyData/CompanyData';
function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div>
      <Switch >
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/expance">
            <Expance />
          </Route>
          <Route path="/forgot">
            <ForgotPassword />
          </Route>
          <Route path="/emp">
            <EmployeeData />
          </Route>
          <Route path="/company">
            <CompanyData />
          </Route>
          <Route path = "*">
            <PageNotFound />
          </Route>
      </Switch>
    </div>
    <div className="footer">
      <Footer />
    </div>
    </>
  );
}

export default App;
