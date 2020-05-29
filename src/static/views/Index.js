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

// reactstrap components

// core components
import IndexNavbar from "../../static/components/Navbars/IndexNavbar.js";
import IndexHeader from "../../static/components/Headers/IndexHeader.js";
import DemoFooter from "../../static/components/Footers/DemoFooter.js";

// index sections
import SectionButtons from "../../static/views/index-sections/SectionButtons.js";
import SectionNavbars from "../../static/views/index-sections/SectionNavbars.js";
import SectionNavigation from "../../static/views/index-sections/SectionNavigation.js";
import SectionProgress from "../../static/views/index-sections/SectionProgress.js";
import SectionNotifications from "../../static/views/index-sections/SectionNotifications.js";
import SectionTypography from "../../static/views/index-sections/SectionTypography.js";
import SectionJavaScript from "../../static/views/index-sections/SectionJavaScript.js";
import SectionCarousel from "../../static/views/index-sections/SectionCarousel.js";
import SectionNucleoIcons from "../../static/views/index-sections/SectionNucleoIcons.js";
import SectionDark from "../../static/views/index-sections/SectionDark.js";
import SectionLogin from "../../static/views/index-sections/SectionLogin.js";
import SectionExamples from "../../static/views/index-sections/SectionExamples.js";
import SectionDownload from "../../static/views/index-sections/SectionDownload.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main">
        <SectionButtons />
        <SectionNavbars />
        <SectionNavigation />
        <SectionProgress />
        <SectionNotifications />
        <SectionTypography />
        <SectionJavaScript />
        <SectionCarousel />
        <SectionNucleoIcons />
        <SectionDark />
        <SectionLogin />
        <SectionExamples />
        <SectionDownload />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
