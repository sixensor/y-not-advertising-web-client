import React, {Component} from 'react';
import {AppSidebarNav2 as AppSidebarNav} from "@coreui/react";
import userNavigation from "../../_usernav";
import * as router from "react-router-dom";
import adminNavigation from "../../_adminnav";


class SideBarNavItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: 1,
    }
  }
  componentDidMount() {
    let session = JSON.parse(localStorage.getItem('Session'))
    if (!session) {
      this.props.history.push('/login')
    }
    this.setState({
      role: session.user.role,
    })
  };

  render() {
    if (this.state.role === 2) {
      return (
        <section>
          <AppSidebarNav navConfig={adminNavigation} {...this.props} router={router}/>
        </section>
      )
    }
    return (
      <section><AppSidebarNav navConfig={userNavigation} {...this.props} router={router}/></section>
    )
  }
}

export default SideBarNavItems;
