import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, UncontrolledDropdown} from 'reactstrap';
import PropTypes from 'prop-types';

import {AppNavbarBrand, AppSidebarToggler} from '@coreui/react';
import axios from "axios";
import Env from "../../views/Env/env";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};


class DefaultHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image_url: '',
      first_name: '',
      last_name: '',
      notification_list: undefined,
      notification_count:''
    }
  }

  componentDidMount() {
    let session = JSON.parse(localStorage.getItem("Session"));
    if (!session) {
      this.props.push("/login");
    }
    let imageUrl = "http://localhost:8003/file?name=" + session.user.profile_image;
    if (session.user.profile_image === '') {
      imageUrl = "http://localhost:8003/file?name=default_profile_pic.png";
    }

    this.setState(
      {
        image_url: imageUrl,
        first_name: session.user.first_name,
        last_name: session.user.last_name,
      }
    );
    this.notificationList();
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // Notifications view on bell icon and set notification list
  // to dropdown menu.
  notificationList() {
    this.sleep(5000)
    let session = JSON.parse(localStorage.getItem("Session"));
    if (!session) {
      this.props.push("/login");
    }
    const notificationUrl = Env.getURL('/api/v1.0/user/notifications');
    axios.get(notificationUrl, {
      headers: {
        Authorization: 'Bearer ' + session.token,
      }
    }).then(resp => {
      this.setState(
        {
          notification_list: resp.data.map(x => x),
          notification_count:resp.data.length
        }
      )
    }).catch(err => {

    });
  }


  render() {
    const {children, ...attributes} = this.props;

    let dropDownNotifications = '';
    if (this.state.notification_list !== undefined && this.state.notification_list !== null) {
      dropDownNotifications = this.state.notification_list.map(item =>
        <DropdownItem tag="div" className="text-center">{item.description}</DropdownItem>
      );
    }

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none " display="md" mobile/>
        <AppNavbarBrand>
          <Link to="/home">
            <img alt="..." height="30" className="img-details" src={require("../../assets/img/ynot/logo-home-dark.png")}/>
          </Link>
        </AppNavbarBrand>
        <AppSidebarToggler className="d-md-down-none" display="lg"/>

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <Link to="/profile" className="nav-link">{"Hi " + this.state.first_name + " " + this.state.last_name}</Link>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <i className="icon-bell"></i><Badge pill color="danger">{this.state.notification_count}</Badge>
            </DropdownToggle>
            <DropdownMenu right>
              {dropDownNotifications}
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={this.state.image_url} className="img-avatar"
                   alt="profile image"/>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem onClick={e => this.props.openProfile(e)}>
                <i className="fa fa-user"/> Profile</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock" /> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
