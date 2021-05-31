import React from 'react';
import {withRouter, Route, Switch} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import "./App.css";
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import LoginPage from './pages/LoginPage';
import SecuredRoute from './components/SecuredRoute'

class App extends React.Component{
  state={
    token:null
  }
  updateToken  =(token)=>{
    this.setState({token});
  }
  render(){
    
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={(props)=><HomePage {...props}/>}/>
        <SecuredRoute  path="/products" component={ProductsPage} token={this.state.token}/>
        <SecuredRoute  path="/productdetail/:id" token={this.state.token} component={ProductDetailsPage}/>
        <Route  path="/login" render={(props=><LoginPage updateToken={this.updateToken}/>)}/>
      </Switch>

      <Footer />
    </>
  );
  }
}

export default withRouter(App);
