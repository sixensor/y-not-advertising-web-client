import React, {Component} from 'react';
import IndexNavbar from "../../views/Navbars/IndexNavbar";
import IndexHeader from "../../views/Headers/IndexHeader";
import DemoFooter from "../../views/Footers/DemoFooter";
// styles
import "../../assets/css/bootstrap.min.css";
import "../../assets/scss/paper-kit.scss";
import "../../assets/demo/demo.css";

class Index extends Component {
  render() {
    return (
      <>
        <IndexNavbar/>
        <IndexHeader/>
        <div className="main">

          <DemoFooter/>
        </div>
      </>
    );
  }
}

export default Index;
