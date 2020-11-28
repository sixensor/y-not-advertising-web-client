/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {Button, Collapse, Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });


  let session = JSON.parse(localStorage.getItem("Session"));
  let navItems = ''
  if (session) {
    navItems = (
      <>
        <NavItem>
          <NavLink
            className="header-text"
            data-placement="bottom"
            href="https://www.facebook.com/Y-not-Advertising-523968557626926"
            target="_blank"
            title="Like us on Facebook"
          >
            Facebook
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="header-text"
            data-placement="bottom"
            href="/dashboard"
            target="_blank"
            title="Go to dashboard"
          >
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="header-text"
            data-placement="bottom"
            href="/services"
            target=""
            title=""
          >
            Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="header-text"
            data-placement="bottom"
            href="/about-us"
            target=""
            title=""
          >
            About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="header-text"
            data-placement="bottom"
            href="/contact-us"
            target=""
            title=""
          >
            Contact Us
          </NavLink>
        </NavItem>
      </>
    )
  } else {
    navItems = (
      <>
        <NavItem>
          <NavLink
            className="header-text"
            data-placement="bottom"
            href="https://www.facebook.com/Y-not-Advertising-523968557626926"
            target="_blank"
            title="Like us on Facebook"
          >
            Facebook
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="header-text"
            data-placement="bottom"
            href="/login"
            target="_blank"
            title="Login to platform"
          >
            Login
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="header-text"
            data-placement="bottom"
            href="/register"
            target="_blank"
            title="Register to platform"
          >
            Register
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="header-text"
            data-placement="bottom"
            href="/services"
            target=""
            title=""
          >
            Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="content-text"
            data-placement="bottom"
            href="/about-us"
            target=""
            title=""
          >
            About Us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="header-text"
            data-placement="bottom"
            href="/contact-us"
            target=""
            title=""
          >
            Contact Us
          </NavLink>
        </NavItem>
      </>
    )
  }


  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/home"
            title="Coded by Creative Tim"
          >
            <img alt="Y-Not Advertising" className="img-fluid"
                 src={require("../../assets/img/ynot/logo-home-dark.png")}/>
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1"/>
            <span className="navbar-toggler-bar bar2"/>
            <span className="navbar-toggler-bar bar3"/>
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            {navItems}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
