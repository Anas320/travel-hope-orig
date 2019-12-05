import * as React from 'react'
import { withTranslation } from 'react-i18next';
import { withRouter,Router, Route } from "react-router-dom";
import i18next from 'i18next';
import dotenv from 'dotenv';


require('dotenv').config()
let currency = {}



// let iState = {
//   name: ''
// };

class Header extends React.Component{

  state = {
    lang: 'en'
    
  }
sendData = () => {
         
    }




handleClick(lang) {
  console.log(lang)
    i18next.changeLanguage(lang)
  }
handleCurrency(curr){
  //console.log(curr)
  fetch('http://apilayer.net/api/live?access_key=6fe22d6838357e898a6cf2c186812a3f&currencies='+curr)
  .then(resp => {
            return resp.json();
          })
          .then(data => {
            //console.log(data);
            currency = data.quotes

            console.log('this is the currencys value')
            //let cur='USD'+curr
            //console.log(currency)
            //console.log(Object.values(currency)[0])


            this.props.parentCallback(Object.values(currency)[0], curr);
            // this.props.history.push({

            //   state: {
            // currency

            //   }
            // })
            
})
          .catch(error => {
            console.log(error, "Error");
          });
}  


  render (){

    const { t } = this.props;
    return(



         <header id="header-waypoint-sticky" className="header-main header-mobile-menu with-absolute-navbar">
        <div className="header-top">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-4">
                <div className="header-logo">
                  <a href="index.html"><img src="images/logo-white.png" alt="Logo" /></a>
                </div>
              </div>
              <div className="col-8">
                <div className="mini-menu">
                  <ul>
                    <li className="d-block d-md-none">
                      <div className="dropdown dropdown-currency">
                        <a href="#" className="btn btn-text-inherit btn-interactive" id="dropdownMobileSetting" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-cogs" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMobileSetting">
                          <div className="dropdown-menu-inner">
                            <a className="dropdown-item active" href="#">USD - Dollar</a>
                            <a className="dropdown-item" href="#">GBP - Pound</a>
                            <a className="dropdown-item" href="#">EUR - Euro</a>
                            <a className="dropdown-item" href="#">JPY - Yen</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item active" href="#"><span className="image"><img src="font-icons/img-flaticon-flags-4/png/260-united-kingdom.png" alt="image" onClick={() => this.handleClick()} /></span> English</a>
                            <a className="dropdown-item" href="#"><span className="image"><img src="font-icons/img-flaticon-flags-4/png/013-italy.png" alt="image" onClick={() => this.handleClick('it')} /></span> Italiano</a>
                            <a className="dropdown-item" href="#"><span className="image"><img src="font-icons/img-flaticon-flags-4/png/063-japan.png" alt="image" onClick={() => this.handleClick('chi')} /></span> Chinese</a>
                            <a className="dropdown-item" href="#"><span className="image"><img src="font-icons/img-flaticon-flags-4/png/162-germany.png" alt="image" onClick={() => this.handleClick('ger')} /></span> German</a>
                            <a className="dropdown-item" href="#"><span className="image"><img src="font-icons/img-flaticon-flags-4/png/238-thailand.png" alt="image" onClick={() => this.handleClick('ko')} /></span> Korean</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="d-none d-md-block">
                      <div className="dropdown dropdown-currency">
                        <a href="#" className="btn btn-text-inherit btn-interactive" id="dropdownCurrency" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          USD - dollar
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownCurrency">
                          <div className="dropdown-menu-inner">
                            <a className="dropdown-item active" href="#" onClick={()=>this.handleCurrency(process.env.REACT_APP_DC)} >USD - Dollar</a>
                            <a className="dropdown-item" href="#" onClick={()=>this.handleCurrency('GBP')}>GBP - Pound</a>
                            <a className="dropdown-item" href="#" onClick={()=>this.handleCurrency('EUR')}>EUR - Euro</a>
                            <a className="dropdown-item" href="#" onClick={()=>this.handleCurrency('JPY')}>JPY - Yen</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="d-none d-md-block">
                      <div className="dropdown dropdown-language">
                        <a href="#" className="btn btn-text-inherit btn-interactive" id="dropdownLangauge" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <span className="image"><img src="font-icons/img-flaticon-flags-4/png/260-united-kingdom.png" alt="image" /></span> English
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownLangauge">
                          <div className="dropdown-menu-inner">
                            <a className="dropdown-item active" href="#" onClick={() => this.handleClick(process.env.REACT_APP_DL)}><span className="image"><img src="font-icons/img-flaticon-flags-4/png/260-united-kingdom.png" alt="image" /></span> English</a>
                            <a className="dropdown-item" href="#" onClick={() => this.handleClick('it')}><span className="image"><img src="font-icons/img-flaticon-flags-4/png/013-italy.png" alt="image"  /></span> Italiano</a>
                            <a className="dropdown-item" href="#" onClick={() => this.handleClick('chi')} ><span className="image"><img src="font-icons/img-flaticon-flags-4/png/063-japan.png" alt="image"  /></span> Chinese</a>
                            <a className="dropdown-item" href="#" onClick={() => this.handleClick('ger')}><span className="image"><img src="font-icons/img-flaticon-flags-4/png/162-germany.png" alt="image"  /></span> German</a>
                            <a className="dropdown-item" href="#" onClick={() => this.handleClick('ko')}><span className="image"><img src="font-icons/img-flaticon-flags-4/png/118-malasya.png" alt="image"  /></span> Korean</a>

                          </div>
                          {console.log('Process')}
                          {console.log(process.env.REACT_APP_DC)}
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="dropdown dropdown-login dropdown-tab">
                        <a href="#" className="btn btn-text-inherit btn-interactive" id="dropdownSignIn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          {t('trans.login')} / {t('trans.register')}
                        </a>
                        <div className="dropdown-menu dropdown-menu-right tab-in-dropdown padding-0" aria-labelledby="dropdownSignIn">
                          <nav className="menu-horizontal-01">
                            <ul className="nav external-link-navs">
                              <li><a className="active" data-toggle="tab" href="#loginTabInDropdown01-01s">Login</a></li>
                              <li><a data-toggle="tab" href="#loginTabInDropdown01-02s">Register </a></li>
                              <li className="d-none"><a data-toggle="tab" href="#loginTabInDropdown01-03s">Forgot Password </a></li>
                            </ul>
                          </nav>
                          <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active padding-0" id="loginTabInDropdown01-01s">
                              <div className="form-login">
                                <form>
                                  <div className="form-inner">
                                    <div className="login-with-socials">
                                      <button className="btn btn-facebook btn-block">Login with Facebook</button>
                                      <button className="btn btn-google btn-block">Login with Google</button>
                                      <button className="btn btn-twitter btn-block">Login with Twitter</button>
                                      <button className="btn btn-pinterest btn-block">Login with Pinterest</button>
                                    </div>
                                    <div className="text-seperator">
                                      <span>or</span>
                                    </div>
                                    <div className="form-group">
                                      <input id="login_username" className="form-control" placeholder="Email address / phone number" type="text" />
                                    </div>
                                    <div className="form-group">
                                      <input id="login_password" className="form-control" placeholder="Password" type="password" />
                                    </div>
                                    <div className="row gap-5 mt-5">
                                      <div className="col-12 col-sm-6">
                                        <div className="custom-control custom-checkbox style-01 mt-5">
                                          <input type="checkbox" className="custom-control-input" id="loginForm-02-checkbox-in-tab" />
                                          <label className="custom-control-label line-145 pt-5" htmlFor="loginForm-02-checkbox-in-tab">Remember me</label>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-6 text-right">
                                        <div className="nav text-right d-inline-block">
                                          <a href="#loginTabInDropdown01-03s" className="btn btn-link tab-external-link">Forgot pass?</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="mt-5">
                                      <button type="submit" className="btn btn-primary btn-block">Login</button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade in padding-0" id="loginTabInDropdown01-02s">
                              <div className="form-login">
                                <form>
                                  <div className="form-inner">
                                    <div className="login-with-socials">
                                      <button className="btn btn-facebook btn-block">Register with Facebook</button>
                                      <button className="btn btn-google btn-block">Register with Google</button>
                                      <button className="btn btn-twitter btn-block">Register with Twitter</button>
                                      <button className="btn btn-pinterest btn-block">Register with Pinterest</button>
                                    </div>
                                    <div className="text-seperator">
                                      <span>or</span>
                                    </div>
                                    <div className="form-group">
                                      <input id="login_username" className="form-control" placeholder="Full name" type="text" />
                                    </div>
                                    <div className="form-group">
                                      <input id="login_username" className="form-control" placeholder="Email address / phone number" type="text" />
                                    </div>
                                    <div className="form-group">
                                      <input id="login_password" className="form-control" placeholder="Password" type="password" />
                                    </div>
                                    <div className="form-group">
                                      <input id="login_password" className="form-control" placeholder="Confirm password" type="password" />
                                    </div>
                                    <div className="custom-control custom-checkbox style-01 mt-10">
                                      <input type="checkbox" className="custom-control-input" id="loginForm-02-01-checkbox-in-tab" />
                                      <label className="custom-control-label line-145 pt-5" htmlFor="loginForm-02-01-checkbox-in-tab">By checking here, you are agree with our <a href="#">terms &amp; rules</a>.</label>
                                    </div>
                                    <div className="mt-10">
                                      <button type="submit" className="btn btn-primary btn-block">Register</button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                            <div role="tabpanel" className="tab-pane fade in padding-0" id="loginTabInDropdown01-03s">
                              <div className="form-login">
                                <form>
                                  <div className="form-inner">
                                    <h5>Forget your password?</h5>
                                    <p className="line-145">Don't worry, Resetting your password is easy, just tell us your email adress your registred with us</p>
                                    <div className="form-group">
                                      <input id="login_username" className="form-control" placeholder="Email address" type="email" />
                                    </div>
                                    <div className="mt-10">
                                      <button type="submit" className="btn btn-primary btn-block">Send</button>
                                    </div>
                                    <div className="mt-15">
                                      Back to
                                      <div className="nav d-inline-block">
                                        <a href="#loginTabInDropdown01-01s" className="tab-external-link">Login</a>
                                      </div>
                                      or
                                      <div className="nav d-inline-block">
                                        <a href="#loginTabInDropdown01-02s" className="tab-external-link">Register</a>
                                      </div>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="d-lg-none">
                      <button className="btn btn-toggle collapsed" data-toggle="collapse" data-target="#mobileMenuMain" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav">
          <div className="container">
            <div className="navbar-wrapper">
              <div className="navbar navbar-expand-lg">
                <div id="mobileMenuMain" className="collapse navbar-collapse">
                  <nav className="main-nav-menu main-menu-nav navbar-arrow">
                    <ul className="main-nav">
                      <li><a href="index.html">{t('trans.home')}</a>
                        <ul>
                          <li>
                            <a href="javascript:void(0)">Layout options</a>
                            <ul>
                              <li><a href="index-layout-02.html">Layout options 02</a></li>
                              <li><a href="index-layout-03.html">Layout options 03</a></li>
                              <li><a href="index-layout-04.html">Layout options 04</a></li>
                              <li><a href="index-layout-05.html">Layout options 05</a></li>
                              <li><a href="index-layout-06.html">Layout options 06</a></li>
                              <li><a href="index-layout-07.html">Layout options 07</a></li>
                              <li><a href="index-layout-08.html">Layout options 08</a></li>
                              <li><a href="index-layout-09.html">Layout options 09</a></li>
                              <li><a href="index-layout-10.html">Layout options 10</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Header options</a>
                            <ul>
                              <li><a href="index-header-02.html">Header options 02</a></li>
                              <li><a href="index-header-03.html">Header options 03</a></li>
                              <li><a href="index-header-04.html">Header options 04</a></li>
                              <li><a href="index-header-05.html">Header options 05</a></li>
                              <li><a href="index-header-06.html">Header options 06</a></li>
                              <li><a href="index-header-07.html">Header options 07</a></li>
                              <li><a href="index-header-08.html">Header options 08</a></li>
                              <li><a href="index-header-09.html">Header options 09</a></li>
                              <li><a href="index-header-10.html">Header options 10</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0)">{t('trans.booking1')}</a>
                        <ul>
                          <li>
                            <a href="javascript:void(0)">Hotel</a>
                            <ul>
                              <li><a href="page-result-hotel-grid-col-three.html">Hotel result - grid 3 columns</a></li>
                              <li><a href="page-result-hotel-grid-col-two.html">Hotel result - grid 2 columns</a></li>
                              <li><a href="page-result-hotel-list-01.html">Hotel result - list 01</a></li>
                              <li><a href="page-result-hotel-list-02.html">Hotel result - list 02</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Flight</a>
                            <ul>
                              <li><a href="page-result-flight-grid-col-three.html">Flight result - grid 3 columns</a></li>
                              <li><a href="page-result-flight-grid-col-two.html">Flight result - grid 2 columns</a></li>
                              <li><a href="page-result-flight-list-01.html">Flight result - list 01</a></li>
                              <li><a href="page-result-flight-list-02.html">Flight result - list 02</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Tour</a>
                            <ul>
                              <li><a href="page-result-tour-grid-col-three.html">Tour result - grid 3 columns</a></li>
                              <li><a href="page-result-tour-grid-col-two.html">Tour result - grid 2 columns</a></li>
                              <li><a href="page-result-tour-list-01.html">Tour result - list 01</a></li>
                              <li><a href="page-result-tour-list-02.html">Tour result - list 02</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Car rent</a>
                            <ul>
                              <li><a href="page-result-car-rent-grid-col-three.html">Car rent result - grid 3 columns</a></li>
                              <li><a href="page-result-car-rent-grid-col-two.html">Car rent result - grid 2 columns</a></li>
                              <li><a href="page-result-car-rent-list-01.html">Car rent result - list 01</a></li>
                              <li><a href="page-result-car-rent-list-02.html">Car rent result - list 02</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Train</a>
                            <ul>
                              <li><a href="page-result-train-grid-col-three.html">Train result - grid 3 columns</a></li>
                              <li><a href="page-result-train-grid-col-two.html">Train result - grid 2 columns</a></li>
                              <li><a href="page-result-train-list-01.html">Train result - list 01</a></li>
                              <li><a href="page-result-train-list-02.html">Train result - list 02</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Guide</a>
                            <ul>
                              <li><a href="page-result-guide-grid-col-three.html">Guide result - grid 3 columns</a></li>
                              <li><a href="page-result-guide-grid-col-two.html">Guide result - grid 2 columns</a></li>
                              <li><a href="page-result-guide-list-01.html">Guide result - list 01</a></li>
                              <li><a href="page-result-guide-list-02.html">Guide result - list 02</a></li>
                            </ul>
                          </li>
                          <li><a href="page-detail.html">Detail page</a></li>
                          <li><a href="page-detail-empty-booking.html">Detail page - Empty booking</a></li>
                          <li><a href="page-payment.html">Payment page</a></li>
                          <li><a href="page-confirmation.html">Confirm page</a></li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0)">{t('trans.destination')}</a>
                        <ul>
                          <li><a href="page-destinations-01.html">Destinations page 01</a></li>
                          <li><a href="page-destinations-02.html">Destinations page 02</a></li>
                          <li><a href="page-destinations-detail-01.html">Destinations detail page 01</a></li>
                          <li><a href="page-destinations-detail-02.html">Destinations detail page 02</a></li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0)">{t('trans.blog')}</a>
                        <ul>
                          <li><a href="blog-01.html">Blog grid - full width</a></li>
                          <li><a href="blog-02.html">Blog grid - with sidebar</a></li>
                          <li><a href="blog-03.html">Blog horizontal - with sidebar</a></li>
                          <li><a href="blog-single-01.html">Blog detail - full width</a></li>
                          <li><a href="blog-single-02.html">Blog detail - with sidebar</a></li>
                        </ul>
                      </li>
                      <li><a href="javascript:void(0)">{t('trans.pages')}</a>
                        <ul>
                          <li><a href="page-about.html">About us</a></li>
                          <li><a href="page-faq.html">FAQ</a></li>
                          <li><a href="page-static-page.html">Static page</a></li>
                          <li><a href="page-error-404.html">Error 404 page</a></li>
                          <li>
                            <a href="dashboard.html">Dashboard</a>
                            <ul>
                              <li><a href="dashboard-edit-profile.html">Dashboard - edit profile</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Shortcode</a>
                            <ul>
                              <li><a href="shortcode-typography.html">Typography</a></li>
                              <li><a href="shortcode-element.html">Element</a></li>
                              <li><a href="shortcode-layout-fullwidth.html">Layout Fullwidth</a></li>
                              <li><a href="shortcode-layout-left-sidebar.html">Layout Left Sidebar</a></li>
                              <li><a href="shortcode-layout-right-sidebar.html">Layout Right Sidebar</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li><a href="contact.html">{t('trans.contact_us')}</a></li>
                    </ul>
                  </nav>{/*/.nav-collapse */}
                </div>
                <div className="navbar-phone d-none d-lg-block">
                  <i className="material-icons">phone</i> Hotline: +66 74 665 855
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      )}}


export default withRouter (withTranslation()(Header))