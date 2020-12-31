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
      notification_count: ''
    }
  }

  componentDidMount() {
    let session = JSON.parse(localStorage.getItem("Session"));
    if (!session) {
      this.props.push("/login");
    }
    let imageUrl = Env.getStaticURL("/file?name=" + session.user.profile_image);
    if (session.user.profile_image === '') {
      imageUrl = Env.getStaticURL("/file?name=default_profile_pic.png");
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
    this.sleep(5000);
    let session = JSON.parse(localStorage.getItem("Session"));
    if (!session) {
      this.props.push("/login");
    }
    const notificationUrl = Env.getURL('/api/v1.0/common/notifications');
    axios.get(notificationUrl, {
      headers: {
        Authorization: 'Bearer ' + session.token,
      }
    }).then(resp => {
      this.setState(
        {
          notification_list: resp.data.map(x => x),
          notification_count: resp.data.length
        }
      )
    }).catch(err => {

    });
  }

  // Get current session bearer token
  getBearerToken() {
    let session = JSON.parse(localStorage.getItem('Session'));
    if (!session) {
      this.props.history.push('/login');
    }
    return 'Bearer ' + session.token
  }

  processRegistrationPayment(e) {
    e.preventDefault();
    const registrationProcessUrl = Env.getURL("/api/v1.0/user/payment/process-registration");
    axios.post(registrationProcessUrl, {}, {
      headers: {
        Authorization: this.getBearerToken(),
      }
    }).then(resp => {
      console.log(resp.data);
      localStorage.setItem("RegistrationPayment", JSON.stringify(resp.data));
      this.props.processRegPayment(e)
    }).catch(err => {
    });
  }


  processCallerIDPayment(e,id) {
    e.preventDefault();
    const registrationProcessUrl = Env.getURL("/api/v1.0/user/payment/caller-id/"+id);
    axios.post(registrationProcessUrl, {}, {
      headers: {
        Authorization: this.getBearerToken(),
      }
    }).then(resp => {
      console.log(resp.data);
      localStorage.setItem("CallerIdProcessedData", JSON.stringify(resp.data));
      this.props.processCallerIDPayment(e)
    }).catch(err => {
    });
  }
  //[{"id":1,"description":"Please register your account, Go to Profile","type":"user_registration"},{"id":9,"description":"Your requested caller ID (Sigzag) has been approved, Please process your payment to activate !","type":"caller_id_activation"},{"id":10,"description":"Your requested caller ID (Test) has been approved, Please process your payment to activate !","type":"caller_id_activation"},{"id":11,"description":"Your requested caller ID (Test) has been approved, Please process your payment to activate !","type":"caller_id_activation"},{"id":12,"description":"Your requested caller ID () has been approved, Please process your payment to activate !","type":"caller_id_activation"},{"id":13,"description":"Your requested caller ID (My Shop) has been approved, Please process your payment to activate !","type":"caller_id_activation"},{"id":14,"description":"Your requested caller ID (Test) has been approved, Please process your payment to activate !","type":"caller_id_activation"},{"id":15,"description":"Your requested caller ID (Test) has been approved, Please process your payment to activate !","type":"caller_id_activation"}]
  notification(data) {
    if (data.type === "user_registration") {
      return (
        <DropdownItem onClick={e => this.processRegistrationPayment(e)}>
          Click Here to register user
        </DropdownItem>
      )
    } else if (data.type === "caller_id_activation") {
      return (
        <DropdownItem onClick={e => this.processCallerIDPayment(e,data.id)}>
          Click Here to activate <b>{data.description}</b>
        </DropdownItem>
      )
    } else {
      return (<span/>)
    }
  }

  render() {
    const {children, ...attributes} = this.props;

    let dropDownNotifications = (
      <DropdownItem disabled>
        No notifications
      </DropdownItem>
    );
    if (this.state.notification_list !== undefined && this.state.notification_list !== null) {
      dropDownNotifications = this.state.notification_list.map(item =>
        <section>{this.notification(item)}</section>
      );
    }

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none " display="md" mobile/>
        <AppNavbarBrand>
          <Link to="/home">
            <img alt="..." height="30" className="img-details"
                 src={require("../../assets/img/ynot/logo-home-dark.png")}/>
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
            <DropdownMenu flip={true} right>
              {dropDownNotifications}
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <i className="cui-settings"/>
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem onClick={e => this.props.openProfile(e)}>
                <i className="fa fa-user"/> Profile</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"/> Logout</DropdownItem>
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
