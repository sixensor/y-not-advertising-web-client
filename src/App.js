import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const Index = React.lazy(() => import('./containers/Index'));
const About = React.lazy(() => import('./containers/About'));
const Contact = React.lazy(() => import('./containers/ContactUs'));
const Services = React.lazy(() => import('./containers/Services'));
const TermsAndConditions = React.lazy(() => import('./containers/TermsAndConditions'));
const PrivacyPolicy = React.lazy(() => import('./containers/PrivacyPolicy'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));
const Auth = React.lazy(() => import('./auth/Auth'));




class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>}/>
            <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>}/>
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>}/>
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>}/>
            <Route path="/home" name="Home" render={props => <Index {...props}/>}/>
            <Route path="/about-us" name="About" render={props => <About {...props}/>}/>
            <Route path="/contact-us" name="Contact" render={props => <Contact {...props}/>}/>
            <Route path="/services" name="Services" render={props => <Services {...props}/>}/>
            <Route path="/terms-conditions" name="Terms And Conditions"
                   render={props => <TermsAndConditions {...props}/>}/>
            <Route path="/privacy-policy" name="Privacy Policy" render={props => <PrivacyPolicy {...props}/>}/>
            <Auth>
              <Route path="/" name="Dashboard" render={props => <DefaultLayout {...props}/>}/>
            </Auth>
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
