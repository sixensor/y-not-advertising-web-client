import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, UncontrolledDropdown} from 'reactstrap';
import PropTypes from 'prop-types';

import {AppNavbarBrand, AppSidebarToggler} from '@coreui/react';

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
    }
  }

  componentDidMount() {
    let session = JSON.parse(localStorage.getItem("Session"));
    if (!session) {
      this.props.push("/login");
    }

    let imageUrl = '';
    this.setState(
      {
        image_url: imageUrl,
        first_name: session.user.first_name,
        last_name: session.user.last_name,
      }
    )
  }


  render() {

    // eslint-disable-next-line
    const {children, ...attributes} = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile/>
        {/*<AppNavbarBrand*/}
        {/*  full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}*/}
        {/*  minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}*/}
        {/*/>*/}
        <AppNavbarBrand>
          Y - Not Advertising
        </AppNavbarBrand>
        <AppSidebarToggler className="d-md-down-none" display="lg"/>

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <Link to="/users" className="nav-link">{"Hi " + this.state.first_name + " " + this.state.last_name}</Link>
            {/*<NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>*/}
            {/*<NavLink to="/campaign/create" className="nav-link" >Dashboard</NavLink>*/}
          </NavItem>
          {/*<NavItem className="px-3">*/}
          {/*  <Link to="/users" className="nav-link">{this.state.first_name+ " "+this.state.last_name}</Link>*/}
          {/*</NavItem>*/}
          {/*<NavItem className="px-3">*/}
          {/*  <NavLink to="#" className="nav-link">Settings</NavLink>*/}
          {/*</NavItem>*/}
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill
                                                                                     color="danger">5</Badge></NavLink>
          </NavItem>
          {/*<NavItem className="d-md-down-none">*/}
          {/*  <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>*/}
          {/*</NavItem>*/}
          {/*<NavItem className="d-md-down-none">*/}
          {/*  <NavLink to="#" className="nav-link">{this.state.first_name+ " "+this.state.last_name}</NavLink>*/}
          {/*</NavItem>*/}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src="http://167.99.174.148:8003/file?name=default_profile_pic.png" className="img-avatar"
                   alt="profile image"/>
            </DropdownToggle>
            <DropdownMenu right>
              {/*<DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>*/}
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem onClick={e => this.props.openProfile(e)}><i
                className="fa fa-user"></i> Profile</DropdownItem>
              {/*<DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>*/}
              {/*<DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>*/}
              {/*<DropdownItem divider />*/}
              {/*<DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>*/}
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/*<AppAsideToggler className="d-md-down-none" />*/}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
