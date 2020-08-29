import React from 'react';
import Layout from './hocs/layout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './containers/home'
import About from './containers/about'
import Contact from './containers/contact'
import Listings from './containers/listings'
import ListingDetail from './containers/listingDetail'
import Signup from './containers/signup'
import Signin from './containers/signin'
import Notfound from './components/notfound';

import {Provider} from 'react-redux'
import store from './store'

import './sass/main.scss';




const App = () =>(
  <Provider store={store}>
    <Router>
      <Layout>      
        {/* the props.children in layout.js in anything under the layout tag */}
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/listings' component={Listings} />
          <Route exact path='/listing/:id' component={ListingDetail} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Signin} />
          <Route component={Notfound} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
  
)

export default App;
