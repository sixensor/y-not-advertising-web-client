import React, {Component} from 'react';
import IndexNavbar from "../../views/Navbars/IndexNavbar";
import DemoFooter from "../../views/Footers/DemoFooter";
import "../../assets/css/bootstrap.min.css";
import "../../assets/scss/paper-kit.scss";
import "../../assets/demo/demo.css";
import {Col, Row} from "reactstrap";
import Container from "reactstrap/es/Container";

// styles
let pageHeader = React.createRef();

class TermsAndConditions extends Component {
  render() {
    return (
      <>
        {/*<LandingPage/>*/}
        <IndexNavbar/>
        <br/>
        <div className="main">
          <div
            style={{
              backgroundImage:
                "url(" + require("../../assets/img/ynot/about-us.png") + ")"
            }}
            className="page-header page-header-xs"
            data-parallax={true}
            ref={pageHeader}
          >
            <div className="filter"/>
          </div>
          <div className="section">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-justify" md="8">
                  <h2 className="page-header-text">Terms & Conditions</h2>
                  <br/>
                  <p className="description content-text">
                    <h6>VALIDITY OF AGREEMENT</h6>
                    This Agreement shall come into force from the Effective Date and shall be valid till
                    termination by either party as provided in this Agreement.
                    <br/>
                    <br/>
                    <h6>SCOPE OF THE AGREEMENT</h6>
                    The scope of this Agreement shall be for Y-not Advertising to provide a SMS based solution for the
                    Customer in order to enable the End Users to receive information sent by the Customer
                    via a Short Code using SMS as a carrier for the period stated in this Agreement.
                    <br/>
                    <br/>
                    <h6>OBLIGATIONS OF THE CUSTOMER</h6>
                    The Customer shall:
                    <br/>

                    <ol>
                      <li>undertake to send messages via the web page assigned to the Customer by Y-not Advertising for
                        the purposes of this Agreement
                      </li>
                      <li>be solely responsible for the content and accuracy of the messages sent with the aid of the
                        said Service
                      </li>
                      <li>understand that the SMSC cannot forward more than five (5) messages per second to be
                        relayed to mobile telephone devices
                      </li>
                      <li>ensure that the End Users provide their consent to receive messages from the Customer
                        using the said Services
                      </li>
                      <li>indemnify Y-not Advertising and keep Y-not Advertising indemnified against all direct charges,
                        losses incurred or suffered by Y-not Advertising or by any third party acting in reliance of the
                        accuracy, quality, completeness value and integrity of the content of any or all SMs sent with
                        the
                        aid of the Said Service and and/or all claims, demands, suits, litigation, proceedings,
                        judgments and decrees that may arise in consequence of the provision of the Customer
                        Services and/or the Said Service
                      </li>
                      <li>indemnify Y-not Advertising and keep Y-not Advertising indemnified against all direct costs,
                        damages, losses and expenses incurred or suffered by Y-not Advertising due to any breach of this
                        agreement by the Customer
                      </li>
                      <li> agree not to reproduce, duplicate, copy, sell, resell or exploit for any commercial purposes
                        any portion of the Said Service, use of the Said Service or access to the said Service
                        without prior written consent of Y-not Advertising;
                        8. the Customer shall ensure that the content part of the message is no longer than 160
                        characters
                      </li>
                      <li>warrant, represent and undertake throughout the Agreement period that it shall comply
                        with all laws and regulations applicable to the provisions of the Said Service;
                        10. not use the SMS based information Solution for another purposes other than the purposes
                        of this Agreement
                      </li>
                      <li>ensure that the Said Service is utilized solely for the purposes intended by this Agreement
                      </li>
                      <li>inform Y-not Advertising of any interruption to the normal course of business of the Customer
                        within reasonable time of commencement of such interruption
                      </li>
                      <li>not to misuse the mobile numbers of the End Users that the Customer may gain access to
                        while providing the Said Services
                      </li>
                    </ol>

                    <h6>OBLIGATIONS OF Y-NOT ADVERTISING</h6>
                    Y-not Advertising shall:
                    <br/>
                    <ol>
                      <li>provide a SMS based information solution for the Customer to send SMS to the End Users</li>
                      <li>provide a web page to the Customer where they would be able to type a 160-character
                        message to send it out to the End Users
                      </li>
                      <li>ensure that Y-not Advertising web server will verify the authenticity of the End Users</li>
                      <li>inform the Customer of any interruption to Y-not Advertising Services and/or the Said Service
                        within the first One hour of commencement of such interruption provided such interruption occurs
                        anytime between 8.30 AM and 5.30 PM on weekdays; Y-not Advertising agrees to take steps to
                        promptly response to the complaints made by the Customer regarding the service and
                        rectify any problems/interruptions to the Said Service forthwith
                      </li>
                    </ol>

                    <h6>CONFIDENTIALITY</h6>
                    <br/>
                    <ol>
                      <li>Each Party to this Agreement shall use its best efforts to keep in strict confidence, and
                        shall bind all of Its employees and agents to keep in strict confidence, all commercial and
                        technical Information in whatever form acquired by It (whether directly or indirectly) from or
                        concerning any other party under this Agreement or in connection with the performance of
                        the Agreement (herein after called "Confidential Information"). No Party shall utilize such
                        Confidential Information for any purposes other than those contemplated in this Agreement
                        or in the Agreement. Further, no party shall at anytime disclose any Confidential
                        information to any third party for any purposes other than those contemplated in this
                        Agreement without the prior written consent of the other party. The following Information
                        shall be excluded from the foregoing scope of Confidential Information:
                        <br/>
                        <ul>
                          <li>information which at the time of disclosure is generally available to the public</li>
                          <li>information which after disclosure becomes generally available to the public
                            through no fault of the receiving party
                          </li>
                          <li>information which the receiving party can show was In It's possession prior to
                            disclosure and which was not acquired directly or indirectly from the other party
                          </li>
                          <li>information which the receiving party can show was received by It after the time
                            of disclosure from any party outside the Agreement without any obligation of
                            confidentiality and which was not acquired directly or Indirectly from the other party.
                            The confidentiality obligations set out in this article shall survive the termination of
                            this Agreement; or
                          </li>
                          <li>information which the party concerned shall be compelled to divulge if required
                            by Law, Courts and Governmental Authorities
                          </li>
                        </ul>

                      </li>
                      <li>The provisions set out in Clause 1 hereof shall remain in force for one (1) Year from the
                        expiration or sooner determination of this Agreement
                      </li>
                      <li>The Customer agrees that, if the Customer fails to observe the obligations set forth in this
                        Clause, Y-not Advertising shall be Immediately entitled to Injunctive and other equitable relief
                        ordering the Customer to specifically perform the obligations under this Clause and the
                        Customer consents to the entry of such order and to such injunctive relief, and waives any
                        rule or other requirement for the making of a bond as a condition for obtaining such relief.
                        Such rights to specific performance and an injunction shall be cumulative and in addition
                        to all other legal and equitable rights and remedies Y-not Advertising may have.
                      </li>
                      <li>Y-not Advertising agrees that, If Y-not Advertising fails to observe the obligations set forth
                        in
                        this Clause, the Customer shall be Immediately entitled to injunctive and other equitable relief
                        ordering Y-not Advertising to specifically perform the obligations under this Clause and Y-not
                        Advertising consents to the entry of such order and to such injunctive relief, and waives any
                        rule
                        or other requirement for the making of a bond as a condition for obtaining such relief. Such
                        rights
                        to specific performance and an injunction shall be cumulative and in addition to all other legal
                        and
                        equitable rights and remedies the Customer may have.
                      </li>
                    </ol>

                    <h6>MUTUAL COVENANTS</h6>
                    Both Parties hereby;
                    <br/>
                    <ol>
                      <li>warrant, represent and undertake throughout the Agreement Period that in respect of their
                        respective services under this Agreement
                        <ul>
                          <li>to have the necessary approvals/ authorities to enter into this Agreement</li>
                          <li>comply with all applicable laws and regulations</li>
                          <li>not to infringe or violate in any manner whatsoever the Intellectual property
                            rights of a third party
                          </li>
                          <li>not to defame, cause injury to, invade the privacy of or otherwise infringe
                            or violate the rights of any person or third party
                          </li>
                        </ul>
                      </li>
                      <li>agree that all advertising and/or promotional activities and or publications specific to the
                        provision of the said Service herein stipulated shall be conducted by each other strictly in
                        consultation with each other. This excludes generic advertising carried out by either party
                        with regard to the overall functionality of each other’s service portfolios
                      </li>
                      <li>agree that in the event that any content of the SMS contravenes any provisions of the
                        prevalent rules and regulations of Sri Lanka, Y-not Advertising may suspend the provision of the
                        Said Service, deny access to or refrain from displaying such content provided that written
                        notice
                        is forwarded to the Customer fourteen (14) days before such intended suspension,
                        together with the contents which Dialog finds objectionable.
                      </li>
                      <li>agree that the End Users will receive the messages in the form of a short message not
                        exceeding 160 characters and accordingly the message may or may not be displayed
                        completely if the numbers of characters received by the short message service centre of Y-not
                        advertising for transmission exceeded
                        that limit.
                      </li>
                      <li>agree that Y-not Advertising reserves the right at any time and from time to time to modify or
                        discontinue temporarily Y-not Advertising services and/or the said services with two (02) Weeks
                        notice to the Customer provided that written notice is forwarded to the Customer before
                        such intended modification and/or temporary discontinuance.
                      </li>
                    </ol>

                    <h6>EXCLUSION OF LIABILITY</h6>
                    <ol>
                      <li> Y-not Advertising shall not take any responsibility for any interruption or corruption that
                        may
                        occur to short messages during transmission.
                      </li>
                      <li> Y-not Advertising shall not be responsible for the contents of short messages under any
                        circumstances
                        whatsoever.
                      </li>
                      <li>Y-not Advertising disclaims liability for any action taken in reliance on the contents of
                        short
                        messages. In no event shall Y-not Advertising be liable for any indirect, special or
                        consequential
                        damages, including, without limitation, lost profits, or similar damages of any kind suffered by
                        the
                        Customer.
                      </li>
                      <li>Y-not Advertising disclaims liability whether in contract, tort, (including liability for
                        negligence) or otherwise for the acts or omissions of the Customer or failure of its apparatus.
                      </li>
                    </ol>

                    <h6>TERMINATION</h6>
                    <ol>
                      <li>Either Party by giving fourteen (14) Days notice in writing to the other, without prejudice to
                        any other rights herein terminate this Agreement at the occurrence of any of the following
                        circumstances.
                        <ul>
                          <li>If the other commits a breach of any of the Terms and Conditions of this Agreement
                            and such breach is not remedied within thirty (30) Days from notification thereof to
                            the Party in breach;
                          </li>
                          <li>If the other Party becomes insolvent goes into voluntary or compulsory liquidation
                            or pass an effective resolution for winding up or make an arrangement or composition
                            with its creditors, or if any receiver be appointed on behalf of debenture holders or
                            otherwise;
                          </li>
                        </ul>
                      </li>
                      <li>Without prejudice to any other rights herein stipulated Y-not Advertising may terminate this
                        Agreement at any time by giving sixty (60) Days written notice without giving any reason
                        whatsoever.
                      </li>
                      <li>Y-not Advertising reserves the right to terminate this Agreement at any time if the provision
                        of
                        the said Service/s seeks to create mischief, has the tendency to mislead the public and /or
                        contravenes any provisions of prevalent rules and regulations of Sri Lanka.
                      </li>
                    </ol>
                    <h6>CONSEQUENCE OF TERMINATION</h6>
                    <ol>
                      <li>In the event of termination of this Agreement as aforesaid Customers shall no longer have
                        access to the said Service and the Customer shall apprise the Customers accordingly.
                      </li>
                    </ol>


                    <h6>DISPUTE RESOLUTION</h6>
                    <ol>
                      <li>In the event of any dispute or difference arising out of or relating to this Agreement or the
                        breach thereof, the parties hereto shall use their best endeavours to amicably settle such
                        disputes or differences. To this effect they shall consult and negotiate with each other in
                        good faith and understanding of their mutual interests to reach a just and equitable solution
                        satisfactory to all Parties,
                      </li>
                      <li>Failing amicable resolution of such dispute or difference by the Parties within a period of
                        thirty (30) Days the dispute or difference shall then be finally resolved through any court of
                        competent jurisdiction in Sri Lanka.
                      </li>
                    </ol>
                    <br/>
                    <h6>FORCE MAJEURE</h6>
                    <ol>
                      <li>If either Party is temporarily rendered unable, wholly or in part, by Force Majeure to perform
                        it's duties or accept performance by the other Party under this Agreement It is agreed that
                        the affected Party shall give notice to the other Party with immediate effect giving full
                        particulars of such Force Majeure.
                      </li>
                      <li>The duties of such Party as are affected by such Force Majeure shall, with the approval of
                        the other Party, be suspended during the period of disability so caused but for no longer
                        period, such cause shall be removed with all reasonable dispatch.
                      </li>
                      <li>The term "Force Majeure" as employed herein shall mean acts of God, strikes, Lockouts,
                        Industrial disturbances, war, blockades, insurrections, riots. epidemics, civil disturbances,
                        explosions, fire, floods, earthquakes, storms, lightning, telecommunication failure and any
                        other causes similar to the kind herein enumerate which are beyond the control of any
                        Party and which by the exercise of due care and diligence any Party is unable to overcome.
                      </li>
                    </ol>

                    <br/>
                    <h6>APPLICABLE LAW</h6>
                    <ol>
                      <li>This Agreement shall be governed by the laws of the Democratic Socialist Republic of Sri
                        Lanka.
                      </li>
                    </ol>

                    <br/>
                    <h6>ASSIGNMENT</h6>
                    <ol>
                      <li>The Customer shall not, without the prior written consent of Y-not Advertising assign all or
                        any
                        portion of this Agreement to any other Party. Y-not Advertising reserves the right to assign
                        this
                        Agreement to any of its Subsidiaries with notice to the Customer.
                      </li>
                    </ol>

                    <br/>
                    <h6>AMENDMENT AND VARIATION TO AGREEMENT</h6>
                    <ol>
                      <li>Whenever it becomes necessary, the provisions of this Agreement shall be amended,
                        modified or supplemented by mutual agreement of the Parties. Provided however, that any
                        Terms and Conditions set out in this Agreement shall not be considered as amended,
                        modified or supplemented unless mutually agreed in writing and executed by the duly
                        authorized representative of the Parties.
                      </li>
                    </ol>


                    <br/>
                    <h6>NOTICE</h6>
                    <ol>
                      <li>All notices, documents or communications between the Parties under this Agreement
                        shall be considered as validly served if forwarded in the form of registered
                        letter/courier/facsimile/ electronic mail and any other agreed mode of written
                        communication, to the addresses set out in the Front Page
                      </li>
                    </ol>


                    <br/>
                    <h6>PUBLICITY</h6>
                    <ol>
                      <li>The Customer shall not be entitled to make, permit or authorize the making of any press
                        release or public statement or disclosure concerning the contents of this Agreement or any
                        of the transactions contemplated in it without the prior written consent of Y-not Advertising
                        and
                        such consent will not be unreasonably withheld.
                      </li>
                    </ol>


                    <br/>
                    <h6>GENERAL</h6>
                    <ol>
                      <li>No exercise or failure to exercise or delay in exercising any right power or remedy vested
                        in either the Customer or Y-not Advertising under or pursuant to this Agreement shall constitute
                        a
                        waiver by the Customer or Y-not Advertising of that or any other right power or remedy.
                      </li>
                      <li>In the event that any provision of this Agreement is declared by any judicial or other
                        competent authority to be void, voidable, illegal or otherwise unenforceable. Parties hereto
                        shall amend such provision/s in such reasonable manner so that the remaining provisions
                        shall remain in full force and effect.
                      </li>
                      <li>In this Agreement unless the context otherwise requires and In the absence of any specific
                        wording to the contrary any reference to any right/obligation shall be read and construed
                        to mean, a right/obligation arising and binding on the Parties hereto during the term of this
                        Agreement.
                      </li>
                      <li>The Parties hereto agree and recognize that not all of matters forming the intent of the
                        Parties hereto may be incorporated in this Agreement and not all possibilities which may
                        arise in connection with the subject matter hereof can be foreseen at the time being and
                        fully provided for at the execution of this Agreement. Where any omission or lacuna
                        becomes known, the Parties hereto agree to amend in writing this Agreement to cover
                        such omission or lacuna in conformity with the spirit of this Agreement. The Parties hereto
                        agree that the principles of commercial loyalty shall apply to their co-operation. They
                        mutually assure one another that they will fulfill the provisions of this Agreement and all
                        individual agreements concluded in connection with it correspondingly.
                      </li>
                      <li> All rights and obligations referred to in this Agreement shall apply during the period of
                        this
                        Agreement provided that where any rights(s) and/or obligation(s) has been accrued, such
                        right/obligation shall nevertheless be complied with even after the termination of this
                        Agreement as per this Agreement.
                      </li>
                      <li>This Agreement constitutes the entire understanding and agreement of the Parties hereto
                        relating to the subject matter of this Agreement and except as expressly provided in this
                        Agreement, supersedes and extinguishes all prior agreements, understandings and
                        undertakings between the Parties hereto relating to the same.
                      </li>
                      <li>This Agreement shall not be construed to create any relationship of principal and agent
                        between Parties hereto and neither party shall create any contractual obligation to any third
                        party on behalf of the other.
                      </li>
                    </ol>
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <DemoFooter/>
        </div>
      </>
    );
  }
}

export default TermsAndConditions;
