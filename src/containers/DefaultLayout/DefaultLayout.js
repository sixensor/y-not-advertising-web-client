import React, {Component, Suspense} from 'react';
import * as router from 'react-router-dom';
import {Redirect, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';

import {
  AppBreadcrumb2 as AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import adminNavigation from '../../_adminnav'
import userNavigation from '../../_usernav'
// routes config
import routes from '../../routes';
import SideBarNavItems from "./SideBarNavItems";

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));
const Page404 = React.lazy(() => import('../../views/Pages/Page404'));

class DefaultLayout extends Component {

  constructor(props) {
    super(props);
  }


  componentDidMount() {
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    localStorage.clear();
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)}/>
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader/>
            <AppSidebarForm/>
            <Suspense>
              <SideBarNavItems/>
            </Suspense>
            <AppSidebarFooter/>
            <AppSidebarMinimizer/>
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router}/>
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    // let session = JSON.parse(localStorage.getItem('Session'))
                    // console.log(session.user.role)
                    // console.log(route.role)
                    // if (session.user.role !== route.role) {
                    //   return (null);
                    // }
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )}/>
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard"/>
                </Switch>
              </Suspense>
            </Container>
          </main>
          {/*<AppAside fixed>*/}
          {/*  <Suspense fallback={this.loading()}>*/}
          {/*    <DefaultAside/>*/}
          {/*  </Suspense>*/}
          {/*</AppAside>*/}
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter/>
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
