import * as React from 'react';
import AsyncSelect from "react-select/async";
import Highlighter from "react-highlight-words";
//import Hotels from "./Hotels.js";
import { withRouter,Router, Route } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './lang/en';
import de from './lang/de';
import it from './lang/it';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

// counterpart.registerTranslations('en', en);
// counterpart.registerTranslations('de', de);
// counterpart.registerTranslations('it', it);


// counterpart.setLocale('en');
//i18next.changeLanguage('en')
let result;
let inputValue2;
let teArray = [];
let cc;

// window.onbeforeunload = function(e) {
//   return i18next.changeLanguage('en');
// };


class Body extends React.Component {






  constructor(props, context) {
    super(props, context);
    this.state = {
      selectedOption: {},
      id: "",
      name: "",
      dateEndhotel: "23-10-2019",
      dateStarthotel: "21-10-2019",
      city: "",
      city1: [],
      asyncselect: "",
      children: "",
      adults: "",
      startDate: "",
      endDate: "",
      flightStart: "",
      flightEnd: "",
      lang: "en"

    };
    
    console.log(this.state.flightStart)
    this.handleChange = this.handleChange.bind(this);
    this.handleAsync = this.handleAsync.bind(this);
    this.handleChangeForStart = this.handleChangeForStart.bind(this);
    
    this.handleClick = this.handleClick.bind(this)
  }

  // onLangChange = (e) => {
  //   this.setState({lang: e.target.value});
  //   counterpart.setLocale(e.target.value);
  // }

  handleChangeForStart(evt){
    this.setState({
      flightStart: evt.target.value
    })
console.log(this.state.flightStart)
  }
  handleChange (evt) {
    // check it out: we get the evt.target.name (which will be either "email" or "password")
    // and use it to target the key on our `state` object with the same name, using bracket syntax
    
//console.log("handle change called")
    this.setState({ [evt.target.name]: evt.target.value });
//console.log(this.state.flightStart)
  }

  handleAsync (){
    console.log( 'this is selectedOption '+this.state.selectedOption)
this.setState({asyncselect: this.state.selectedOption})
console.log(this.state.asyncselect)
  }  
  

  fetchData = (inputValue, callback) => {
    inputValue2 = inputValue;
    if (!inputValue) {
      callback([]);
    } else {
      setTimeout(() => {
        fetch(
          "https://bookingengine.co/api/hotels/locations?token=123&value=" +
          inputValue
        )
          .then(resp => {
            return resp.json();
          })
          .then(data => {
            console.log(data);
            const tempArray = [];
            result = data;
            let dataArr = [];
            dataArr = data["data"];
            //console.log(dataArr);
            dataArr.forEach(element => {
              cc = element.sortname.toLowerCase()
                            tempArray.push({
                // let cc = element.sortname
                 

                city: element.name,  
                label: <div >{element.name}<p className={`${"flag flag-"+cc}`}></p></div>,
                value: element.id
              });
              teArray.push(tempArray);
            });
            //console.log(teArray);
            // tempArray.push({
            //   label: `${data["data"][].name}`,
            //   value: data["data"].id
            // });
            //teArray.push(tempArray);
            //console.log(teArray);
            if (!data) {
              return callback([]);
            } else {
              callback(tempArray);
            }
          })
          .catch(error => {
            console.log(error, "Error");
          });
      });
    }
  };

  getResult = () => {
    //console.log(result);
    this.setState(() => ({
      id: result[0]._id,
      name: result[0].name
    }));
  };
  optionRenderer = option => {
    return (
      <Highlighter
        searchWords={[this.seachData.inputValue]}
        textToHighlight={option.label}
      />
    );
  };

  onSearchChange = selectedOption => {
    this.handleAsync(3)
    if (selectedOption) {
      this.setState({
        selectedOption
      });
    }
  };
  optionRenderer = option => {
    return (
      <Highlighter searchWords={[inputValue2]} textToHighlight={option.label} />
    );
  };


  anchorHandler = () => {
    // fetch('https://bookingengine.co/api/hotels/search?ota_id=172a7bc0-d892-11e9-ad7d-8d041c8c7592&vendor=3&city=Lahore&adults=1&children=0&checkin=' + this.state.dateStarthotel +'&checkout='+ this.state.dateEndhotel +'&currency=USD&ip_address=103.255.6.76')
    //   //fetch('https://bookingengine.co/api/hotels/search?ota_id=8ed24880-e6ad-11e8-a4c9-15f8a84bf814&vendor=3&city=lahore&adults=1&children=0&checkin=2019-07-31&checkout=2019-08-01&currency=USD&ip_address=103.255.6.76&version=latest')
    //   .then(resp => {
    //     return resp.json();
    //   })
    //   .then(data => {
        this.setState({
          city1: this.state.city1.push(this.state.selectedOption.city)
        })
        this.props.history.push({
          pathname: '/hotels/'+this.state.city1[0]+'/'+ this.state.startDate + '/'+this.state.endDate+ '/'+ this.state.children + '/' + this.state.adults
         // search: '/'+this.state.dateEndhotel + '/' + this.state.dateStarthotel,
          // state: {
          //   detail: data

          // }

        
        })}
                  //console.log(data)
      //console.log(data)
      // }).catch(e=>{
      //   console.log(e)
      // })}

      handleChangeStart = date => {
        let date1 = date.target.value
        date1.split('-')

        // let date = date1.stringify()
        // const confirmDate = date.split('-')[1] + "-" + date.split('-')[2] + date.split('-')[0]
    this.setState({
      startDate: date
    });
    console.log(this.state.startDate)
  };
      handleChangeEnd = date => {
        //const confirmDate = date.split('-')[1] + "-" + date.split('-')[2] + date.split('-')[0]
    this.setState({
      endDate:date
    });
  console.log(this.state.endDate)
  };

  handleClick(evt) {
    //console.log(evt.target.value)
    
    
    this.setState({
      lang: evt.target.value
    })
    i18next.changeLanguage(evt.target.value)
    
  }
      
  
 
  render() {
const { t } = this.props;
//i18next.changeLanguage('en')
    return (
      

      <div className="main-wrapper scrollspy-action">
      <meta charset="utf-8"/>
    <title>Flag-sprite.com - Example</title>
    <link rel="stylesheet" href="flags.css?ddasda=42342423"/>

        {/* start Hero Banner */}
        <div className="hero-banner hero-flex" data-dark-overlay={4} style={{backgroundImage: 'url("images/image-bg/02.jpg")'}}>
          <div className="hero-inner hero-flex set-height-01">
            <div className="container hero-middle">
              <div className="row gap-40 gap-lg-60 align-items-center">
                <div className="col-12 col-lg-6 col-xl-7">
                  <div className="hero-text">

                  <h2>{t('trans.book')}</h2>
                  <p class="lead">{t('trans.three')}</p>
                  <p class="hero-price">
                    {t('trans.all')}
                    <span>{t('trans.usd')} $986</span>
                  </p> 
                      
                    
                    <a href="#" className="btn btn-secondary btn-wide">Book now</a>
                    <p className="font-sm mt-25 line-125 spacing-1">* {t('trans.booking')}<br />* {t('trans.traveling')}</p>
                  </div>
                </div>
                <div className="col-12 col-md-9 col-lg-6 col-xl-5">
                  <div className="menu-horizontal-wrapper-02">
                    <nav className="menu-horizontal-02">
                      <ul className="nav">
                        <li>
                          <a className="active" data-toggle="tab" href="#formSearchMain-01">{t('trans.hotel')}</a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#formSearchMain-02">{t('trans.flight')}</a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#formSearchMain-03">{t('trans.car')}</a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#formSearchMain-04">{t('trans.tour')}</a>
                        </li>
                        <li>
                          <a data-toggle="tab" href="#formSearchMain-05">{t('trans.guide')}</a>
                        </li>
                      </ul>
                    </nav>
                    <div className="tab-content">
                      <div role="tabpanel" className="tab-pane active" id="formSearchMain-01">
                        <div className="tab-inner menu-horizontal-content">
                          <div className="form-search-main-01">
                            <form>
                              <div className="form-inner">
                                <div className="row gap-10 mb-15 align-items-end">
                                  <div className="col-12">
                                    <div className="form-group">
                                    

                                    <select onChange={this.handleClick}>
                                      <option value = 'en'>English</option>
                                      <option value = 'chi'>Chinese</option>
                                      <option value = 'ko'>Korea</option>
                                      <option value = 'ger'>Germany</option>
                                      <option value = 'it'>Italy</option>
                                    


                                    </select>
                                    
                                      <label>{t('trans.destination')}</label>
                                      <div className="form-icon-left typeahead__container">
                                        <span className="icon-font text-muted"><i className="bx bx-map" /></span>
                                        <AsyncSelect
                                          id = "asyncselect"
                                          name = "asyncselect"
                                          value={this.state.selectedOption}
                                          loadOptions={this.fetchData}
                                          placeholder="Admin Name"
                                          ref="getvalue"
                                          onChange={e => {
                                            this.onSearchChange(e);
                                            
                                          }}
                                          optionRenderer={this.optionRenderer([teArray])}
                                          defaultOptions={false}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                 {/*<div className="col-12">
                                    <div className="col-inner">
                                      <div id="airDatepickerRange-hotel" className="row gap-10 mb-15">
                                        <div className="col-6">
                                          <div className="form-group">
                                            <label>Check-in</label>
                                            <div className="form-icon-left">
                                              <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                              <input value = "10-10-2019" type="text" name="dateStarthotel" className="form-control form-readonly-control" placeholder="dd/mm/yyyy" onChange={this.handleChange} />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="form-group">
                                            <label>Check-out</label>
                                            <div className="form-icon-left">
                                              <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                              <input value = "23-10-2019" type="text" name="dateEndhotel" className="form-control form-readonly-control" placeholder="dd/mm/yyyy" onChange={this.handleChange} />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>*/}
                                  <input type = "date" name = "startDate" onChange={this.handleChange} />
                                  <input type = "date" name = "endDate" onChange={this.handleChange} />

                                  <div className="col-12 ">
                                    <div className="col-inner">
                                      <div className="row gap-10 mb-15">
                                        <div className="col-4 col-sm-6 col-md-4">
                                          <div className="form-group form-spin-group">
                                            <label htmlFor="room-amount">Rooms</label>
                                            <div className="form-icon-left">
                                              <span className="icon-font text-muted"><i className="bx bx-home-alt" /></span>
                                              <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder={0} readOnly />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-8 col-sm-6 col-md-8">
                                          <div className="col-inner">
                                            <div className="form-people-thread">
                                              <div className="row gap-5 align-items-center">
                                                <div className="col">
                                                  <div className="form-group form-spin-group">
                                                    <label htmlFor="room-amount">{t("trans.adults")} <small className=" text-muted font10 line-1">(12-75)</small></label>
                                                    <div className="form-icon-left">
                                                      <span className="icon-font text-muted"><i className="bx bx-user" /></span>
                                                      
                                                      <select name="adults" defaultValue = "1" onChange={this.handleChange}>
          <option value="1" >Option 1</option>
          <option value="2" >Option 2</option>
          <option value="3" >Option 3</option>
          <option value="4" >Option 4</option>
          <option value="5" >Option 5</option>
          <option value="6" >Option 6</option>
          <option value="7" >Option 7</option>
        </select>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="col">
                                                  <div className="form-group form-spin-group">
                                                    <label htmlFor="room-amount">{t('trans.children')} <small className="text-muted font10 line-1">(2-12)</small></label>
                                                    <div className="form-icon-left">
                                                      <span className="icon-font text-muted"><i className="bx bx-user" /></span>
                                                      <select name="children" defaultValue = "1" onChange={this.handleChange}>
          <option value="1" >Option 1</option>
          <option value="2" >Option 2</option>
          <option value="3" >Option 3</option>
          <option value="4" >Option 4</option>
          <option value="5" >Option 5</option>
          <option value="6" >Option 6</option>
          <option value="7" >Option 7</option>
        </select>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <a onClick = {this.anchorHandler} className="btn btn-primary btn-block"><div class="flag flag-pk"></div></a>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade in" id="formSearchMain-02">
                        <div className="tab-inner menu-horizontal-content">
                          <div className="form-search-main-01">
                            <form>
                              <div className="form-inner">
                                <div className="mb-10">
                                  <div className="custom-control custom-radio  custom-control-inline">
                                    <input type="radio" id="flightSearchRadio-1" name="flightSearchRadio" className="custom-control-input" defaultChecked />
                                    <label className="custom-control-label" htmlFor="flightSearchRadio-1">{t('trans.return')}</label>
                                  </div>
                                  <div className="custom-control custom-radio  custom-control-inline">
                                    <input type="radio" id="flightSearchRadio-2" name="flightSearchRadio" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="flightSearchRadio-2">{t('trans.one')}</label>
                                  </div>
                                  <div className="custom-control custom-radio  custom-control-inline">
                                    <input type="radio" id="flightSearchRadio-3" name="flightSearchRadio" className="custom-control-input" />
                                    <label className="custom-control-label" htmlFor="flightSearchRadio-3">{t('trans.multicities')}</label>
                                  </div>
                                </div>
                                <div className="row gap-10 mb-15">
                                  <div className="col-6">
                                    <div className="form-group">
                                      <label>{t('trans.from')}</label>
                                      <div className="form-icon-left typeahead__container">
                                        <span className="icon-font text-muted"><i className="bx bx-map" /></span>
                                        <input className="js-typeahead-country_v1 form-control" name="country_v1[query]" type="search" placeholder="Country or city" autoComplete="off" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="form-group">
                                      <label>{t('trans.to')}</label>
                                      <div className="form-icon-left typeahead__container">
                                        <span className="icon-font text-muted"><i className="bx bx-map" /></span>
                                        <input className="js-typeahead-country_v1 form-control" name="country_v1[query]" type="search" placeholder="Country or city" autoComplete="off" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="col-inner">
                                      <div id="airDatepickerRange-flight" className="row gap-10 mb-15">
                                        <div className="col-6">
                                          <div className="form-group">
                                            <label>{t('trans.checkin')}</label>
                                            <div className="form-icon-left">
                                              <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                              <input type="text" value="3" name = "flightStart" id="dateStart-flight" className="form-control form-readonly-control" placeholder="dd/mm/yyyy" />
                                            {console.log(this.state.flightStart)}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="form-group">
                                            <label>{t('trans.checkout')}</label>
                                            <div className="form-icon-left">
                                              <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                              <input type="text" name = "flightEnd" id="dateEnd-flight" className="form-control form-readonly-control" placeholder="dd/mm/yyyy" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="col-inner">
                                      <div className="row gap-5">
                                        <div className="col-4">
                                          <div className="form-group form-spin-group">
                                            <label htmlFor="room-amount">{t('trans.adults')}<small className="text-muted font10 line-1">(12-75)</small></label>
                                            <div className="form-icon-left">
                                              <span className="icon-font text-muted"><i className="bx bx-user" /></span>
                                              <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder={0} readOnly />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-4">
                                          <div className="form-group form-spin-group">
                                            <label htmlFor="room-amount">{t('trans.children')}<small className="text-muted font10 line-1">(2-12)</small></label>
                                            <div className="form-icon-left">
                                              <span className="icon-font text-muted"><i className="bx bx-user" /></span>
                                              <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder={0} readOnly />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-4">
                                          <div className="form-group form-spin-group">
                                            <label htmlFor="room-amount">{t('trans.infant')}<small className="text-muted font10 line-1">(0-2)</small></label>
                                            <div className="form-icon-left">
                                              <span className="icon-font text-muted"><i className="bx bx-user" /></span>
                                              <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder={0} readOnly />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center mt-20">
                                  <div className="mr-auto">
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="flightSearchCheck-1" />
                                      <label className="custom-control-label" htmlFor="flightSearchCheck-1">(-/+ 3 {t('trans.days')})</label>
                                    </div>
                                  </div>
                                  <div>
                                    <a href="#" className="btn btn-primary btn-wide">{t('trans.search')}</a>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade in" id="formSearchMain-03">
                        <div className="tab-inner menu-horizontal-content">
                          <div className="form-search-main-01">
                            <form>
                              <div className="form-inner">
                                <div className="row gap-10 mb-15 align-items-center">
                                  <div className="col-6">
                                    <div className="form-group">
                                      <label>{t('trans.pickup')}</label>
                                      <div className="form-icon-left typeahead__container">
                                        <span className="icon-font text-muted"><i className="bx bx-map" /></span>
                                        <input className="js-typeahead-country_v1 form-control" name="country_v1[query]" type="search" placeholder="Country or city" autoComplete="off" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="form-group">
                                      <label>{t('trans.dropoff')}</label>
                                      <div className="form-icon-left typeahead__container">
                                        <span className="icon-font text-muted"><i className="bx bx-map" /></span>
                                        <input className="js-typeahead-country_v1 form-control" name="country_v1[query]" type="search" placeholder="Country or city" autoComplete="off" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="carCheck11" />
                                      <label className="custom-control-label" htmlFor="carCheck11">{t('trans.returncar')}</label>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="form-group">
                                      <label>{t('trans.pickupdate')}</label>
                                      <div className="form-icon-left">
                                        <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                        <input type="text" className="form-control form-readonly-control air-datepicker" placeholder="pick a date and time" data-language="en" data-timepicker="true" readOnly />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-6">
                                    <div className="form-group">
                                      <label>{t('trans.dropoffdate')}</label>
                                      <div className="form-icon-left">
                                        <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                        <input type="text" className="form-control form-readonly-control air-datepicker" placeholder="pick a date and time" data-language="en" data-timepicker="true" readOnly />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="carCheck21" defaultChecked />
                                      <label className="custom-control-label" htmlFor="carCheck21">{t('trans.driveraged')}</label>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <a href="#" className="btn btn-primary btn-block">{t('trans.search')}</a>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade in" id="formSearchMain-04">
                        <div className="tab-inner menu-horizontal-content">
                          <div className="form-search-main-01">
                            <form>
                              <div className="form-inner">
                                <div className="row gap-10 mb-15 align-items-sm-center">
                                  <div className="col-12">
                                    <div className="form-group">
                                      <label>{t('trans.destination')}</label>
                                      <div className="form-icon-left typeahead__container">
                                        <span className="icon-font text-muted"><i className="bx bx-map" /></span>
                                        <input className="js-typeahead-country_v1 form-control" name="country_v1[query]" type="search" placeholder="Country or city" autoComplete="off" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-8 col-md-9">
                                    <div className="col-inner">
                                      <div className="row gap-10 mb-15">
                                        <div className="col-6">
                                          <div className="form-group">
                                            <label>{t('trans.when')}</label>
                                            <div className="form-icon-left">
                                              <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                              <input type="text" className="form-control form-readonly-control air-datepicker" placeholder="Pick a month" data-min-view="months" data-view="months" data-date-format="MM yyyy" data-language="en" data-auto-close="true" readOnly />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="form-group">
                                            <label>{t('trans.typeoftour')}</label>
                                            <div className="form-icon-left">
                                              <span className="icon-font text-muted"><span className="icon-inner"><i className="bx bx-calendar" /></span></span>
                                              <select data-placeholder="Please select" className="chosen-no-search form-control" tabIndex={2}>
                                                <option />
                                                <option>{t('trans.adventure')}</option>
                                                <option>{t('trans.citytour')}</option>
                                                <option>{t('trans.honeymoon')}</option>
                                                <option>{t('trans.cultural')}</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-4 col-sm-4 col-md-3">
                                    <div className="form-group form-spin-group">
                                      <label>{t('trans.guests')}</label>
                                      <div className="form-icon-left">
                                        <span className="icon-font text-muted"><i className="bx bx-user" /></span>
                                        <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder={0} readOnly />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="custom-control custom-checkbox">
                                      <input type="checkbox" className="custom-control-input" id="preferLocalGuide" />
                                      <label className="custom-control-label" htmlFor="preferLocalGuide">{t('trans.preferprivate')}</label>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <a href="#" className="btn btn-primary btn-block">{t('trans.search')}</a>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div role="tabpanel" className="tab-pane fade in" id="formSearchMain-05">
                        <div className="tab-inner menu-horizontal-content">
                          <div className="form-search-main-01">
                            <form>
                              <div className="form-inner">
                                <div className="row gap-10 mb-15 align-items-end">
                                  <div className="col-12">
                                    <div className="form-group">
                                      <label>{t('trans.destination')}</label>
                                      <div className="form-icon-left typeahead__container">
                                        <span className="icon-font text-muted"><i className="bx bx-map" /></span>
                                        <AsyncSelect
          value={this.state.selectedOption}
          loadOptions={this.fetchData}
          placeholder="Admin Name"
          ref="getvalue"
          onChange={e => {
            this.onSearchChange(e);
          }}
          optionRenderer={this.optionRenderer([teArray])}
          defaultOptions={false}
        />
                                      
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12 col-sm-12 col-md-12">
                                    <div className="col-inner">
                                      <div id="airDatepickerRange-guide" className="row gap-10 mb-15">
                                        <div className="col-6">
                                          <div className="form-group">
                                            <label>{t('trans.checkin')}</label>
                                            <div className="form-icon-left">
                                              <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                              <input type="text" id="dateStart-guide" className="form-control form-readonly-control" placeholder="dd/mm/yyyy" />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="col-6">
                                          <div className="form-group">
                                            <label>{t('trans.checkout')}</label>
                                            <div className="form-icon-left">
                                              <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                              <input type="text" id="dateEnd-guide" className="form-control form-readonly-control" placeholder="dd/mm/yyyy" />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-8">
                                    <div className="form-group">
                                      <label>{t('trans.speak')}</label>
                                      <div className="form-icon-left">
                                        <span className="icon-font text-muted"><span className="icon-inner"><i className="bx bx-globe" /></span></span>
                                        <select multiple data-placeholder="Please select" className="chosen-no-search form-control" tabIndex={2}>
                                          
                                          <option>{t('trans.english')}</option>
                                          <option>{t('trans.french')}</option>
                                          <option>{t('trans.italiano')}</option>
                                          <option>{t('trans.arabic')}</option>
                                        </select>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <div className="form-group form-spin-group">
                                      <label>{t('trans.howmanydays')}</label>
                                      <div className="form-icon-left">
                                        <span className="icon-font text-muted"><i className="bx bx-user" /></span>
                                        <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder={0} readOnly />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <a href="#" className="btn btn-primary btn-block">{t('trans.search')}</a>
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end Hero Banner */}
        {/* start Site Content */}
        <div className="pv-30 bg-light border-bottom overflow-hidden">
          <div className="container-fluid">
            <div className="row equal-height cols-1 cols-sm-3 cols-lg-4 gap-20 gap-lg-40">
              <div className="col">
                <div className="featured-icon-small-item">
                  <div className="icon-font text-primary">
                    <i className="elegent-icon-pin_alt" />
                  </div>
                  <div className="content">
                    <h6>3000+ {t('trans.destination')}</h6>
                    <p className="text-muted">{t('trans.studiedtopassage')}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="featured-icon-small-item">
                  <div className="icon-font text-primary">
                    <i className="elegent-icon-chat_alt" />
                  </div>
                  <div className="content">
                    <h6>{t('trans.customercare')}</h6>
                    <p className="text-muted">{t('trans.partialityhadhis')}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="featured-icon-small-item">
                  <div className="icon-font text-primary">
                    <i className="elegent-icon-contacts_alt" />
                  </div>
                  <div className="content">
                    <h6>{t('trans.travelguide')}</h6>
                    <p className="text-muted">{t('trans.advicebranchvanity')}</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="featured-icon-small-item">
                  <div className="icon-font text-primary">
                    <i className="elegent-icon-currency" />
                  </div>
                  <div className="content">
                    <h6>{t('trans.bestpriceguaranteed')}</h6>
                    <p className="text-muted">{t('trans.curiositycontinualbelonging')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-horizontal-04-wrapper">
          <div className="menu-horizontal-04 bg-light">
            <div className="container">
              <div className="d-md-flex align-items-end">
                <div className="mr-auto">
                  <div className="section-title mb-0">
                    <h2>{t('trans.ourtop')}<br />{t('trans.offers')} &amp; {t('trans.packages')}</h2>
                  </div>
                </div>
                <div className="menu-nav">
                  <nav>
                    <ul className="nav">
                      <li><a data-toggle="tab" href="#MenuHorizon28_01" className="active"><span className="icon-font"><i className="flaticon-traveling-494790-023-hotel" /></span>{t('trans.hotel')}</a></li>
                      <li><a data-toggle="tab" href="#MenuHorizon28_02"><span className="icon-font"><i className="flaticon-traveling-494790-081-departures" /></span>{t('trans.flight')}</a></li>
                      <li><a data-toggle="tab" href="#MenuHorizon28_03"><span className="icon-font"><i className="flaticon-traveling-494790-028-sunbed" /></span>{t('trans.tour')}</a></li>
                      <li><a data-toggle="tab" href="#MenuHorizon28_04"><span className="icon-font"><i className="flaticon-traveling-494790-089-taxi" /></span>{t('trans.tour')}</a></li>
                      <li><a data-toggle="tab" href="#MenuHorizon28_05"><span className="icon-font"><i className="flaticon-traveling-494790-078-id-card" /></span>{t('trans.guide')}</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-80 mb-80">
            <div className="container">
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="MenuHorizon28_01">
                  <div className="tab-inner">
                    <div className="row equal-height cols-1 cols-sm-2 cols-lg-3 gap-10 gap-md-20 gap-xl-30">
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/hotel/01.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="rating-item rating-sm">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={4.0} />
                                </div>
                                <p className="rating-text text-muted"><span className="bg-primary">6.0</span> <strong className="text-dark">Good</strong> - 1,2547 reviews</p>
                              </div>
                              <div className="short-info">
                                <h5>Hotel du Cap-Eden Roc</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" /> Antibes, France</p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$895</span>
                                  per night
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/hotel/02.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="rating-item rating-sm">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={4.0} />
                                </div>
                                <p className="rating-text text-muted"><span className="bg-primary">8.8</span> <strong className="text-dark">Exellent</strong> - 1,2547 reviews</p>
                              </div>
                              <div className="short-info">
                                <h5>Costa Navarino</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" /> Kalamata, Greece</p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$895</span>
                                  per night
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/hotel/03.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="rating-item rating-sm">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={5.0} />
                                </div>
                                <p className="rating-text text-muted"><span className="bg-primary">9.3</span> <strong className="text-dark">Fabulous</strong> - 367 reviews</p>
                              </div>
                              <div className="short-info">
                                <h5>Suvretta House</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" /> St Moritz, Switzerland</p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$895</span>
                                  per night
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/hotel/04.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="rating-item rating-sm">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={5.0} />
                                </div>
                                <p className="rating-text text-muted"><span className="bg-primary">9.3</span> <strong className="text-dark">Fabulous</strong> - 367 reviews</p>
                              </div>
                              <div className="short-info">
                                <h5>The Four Seasons Ritz</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" /> Lisbon, Portugal</p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$895</span>
                                  per night
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/hotel/05.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="rating-item rating-sm">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={4.0} />
                                </div>
                                <p className="rating-text text-muted"><span className="bg-primary">6.0</span> <strong className="text-dark">Good</strong> - 1,2547 reviews</p>
                              </div>
                              <div className="short-info">
                                <h5>Mandarin Oriental</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" /> Bodrum, Turkey</p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$895</span>
                                  per night
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/hotel/06.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="rating-item rating-sm">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={4.0} />
                                </div>
                                <p className="rating-text text-muted"><span className="bg-primary">8.8</span> <strong className="text-dark">Exellent</strong> - 1,2547 reviews</p>
                              </div>
                              <div className="short-info">
                                <h5>Hotel de Russie</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" /> Rome, Italy</p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$895</span>
                                  per night
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade in" id="MenuHorizon28_02">
                  <div className="tab-inner">
                    <div className="row equal-height cols-1 cols-sm-2 cols-lg-3 gap-10 gap-md-20 gap-xl-30">
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/tour/01.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="short-info mt-0">
                                <h5>Paris, France</h5>
                                <p className="location">From Bangkok, Thailand</p>
                                <p><i className="far fa-clock mt-10" /> Offer end: <strong>11/05/2019</strong></p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  One-way
                                  <span className="text-secondary">$895</span>
                                  per person
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/tour/02.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="short-info mt-0">
                                <h5>New York, USA</h5>
                                <p className="location">From Bangkok, Thailand</p>
                                <p><i className="far fa-clock mt-10" /> Offer end: <strong>11/05/2019</strong></p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  Return
                                  <span className="text-secondary">$895</span>
                                  per person
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/tour/03.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="short-info mt-0">
                                <h5>Rome, Italy</h5>
                                <p className="location">From London, UK</p>
                                <p><i className="far fa-clock mt-10" /> Offer end: <strong>11/05/2019</strong></p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  One-way
                                  <span className="text-secondary">$895</span>
                                  per person
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/tour/05.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="short-info mt-0">
                                <h5>New York, USA</h5>
                                <p className="location">From Bangkok, Thailand</p>
                                <p><i className="far fa-clock mt-10" /> Offer end: <strong>11/05/2019</strong></p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  Return
                                  <span className="text-secondary">$895</span>
                                  per person
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/tour/06.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="short-info mt-0">
                                <h5>Rome, Italy</h5>
                                <p className="location">From London, UK</p>
                                <p><i className="far fa-clock mt-10" /> Offer end: <strong>11/05/2019</strong></p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  One-way
                                  <span className="text-secondary">$895</span>
                                  per person
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/tour/04.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="short-info mt-0">
                                <h5>Paris, France</h5>
                                <p className="location">From Bangkok, Thailand</p>
                                <p><i className="far fa-clock mt-10" /> Offer end: <strong>11/05/2019</strong></p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  One-way
                                  <span className="text-secondary">$895</span>
                                  per person
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade in" id="MenuHorizon28_03">
                  <div className="tab-inner">
                    <div className="row equal-height cols-1 cols-sm-2 cols-lg-3 gap-10 gap-md-20 gap-xl-30">
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/tour/01.jpg" alt="Image" />
                            </div>
                            <div className="content pt-10 clearfix">
                              <div className="short-info mr-0 mb-15">
                                <p className="location mb-0"><i className="fas fa-map-marker-alt text-primary" /> London, United Kingdom</p>
                                <h5 className="mt-5">London Hop On Hop Off Bus Tour</h5>
                              </div>
                              <p><i className="far fa-clock" /> Duration: <strong>5 hours</strong></p>
                              <div className="rating-item rating-sm mt-3">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={4.0} />
                                </div>
                                <p className="rating-text text-muted font13">(1,2547 reviews)</p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$895</span>
                                  per person
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/tour/02.jpg" alt="Image" />
                            </div>
                            <div className="content pt-10 clearfix">
                              <div className="short-info mr-0 mb-15">
                                <p className="location mb-0"><i className="fas fa-map-marker-alt text-primary" /> Paris, France</p>
                                <h5 className="mt-5">Paris Historic + Montmartre</h5>
                              </div>
                              <p><i className="far fa-clock" /> Duration: <strong>4:30 hours</strong></p>
                              <div className="rating-item rating-sm mt-3">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={3.0} />
                                </div>
                                <p className="rating-text text-muted font13">(352 reviews)</p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$758</span>
                                  per person
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/tour/03.jpg" alt="Image" />
                            </div>
                            <div className="content pt-10 clearfix">
                              <div className="short-info mr-0 mb-15">
                                <p className="location mb-0"><i className="fas fa-map-marker-alt text-primary" /> Iceland</p>
                                <h5 className="mt-5">Land of the Northern Lights</h5>
                              </div>
                              <p><i className="far fa-clock" /> Duration: <strong>4 days</strong></p>
                              <div className="rating-item rating-sm mt-3">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="3.5" />
                                </div>
                                <p className="rating-text text-muted font13">(852 reviews)</p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$2,145</span>
                                  per person
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/tour/04.jpg" alt="Image" />
                            </div>
                            <div className="content pt-10 clearfix">
                              <div className="short-info mr-0 mb-15">
                                <p className="location mb-0"><i className="fas fa-map-marker-alt text-primary" /> Eastern Europe (4 countries)</p>
                                <h5 className="mt-5">The Best of Eastern Europe</h5>
                              </div>
                              <p><i className="far fa-clock" /> Duration: <strong>6 days</strong></p>
                              <div className="rating-item rating-sm mt-3">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="4.5" />
                                </div>
                                <p className="rating-text text-muted font13">(124 reviews)</p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$1,547</span>
                                  per person
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/tour/05.jpg" alt="Image" />
                            </div>
                            <div className="content pt-10 clearfix">
                              <div className="short-info mr-0 mb-15">
                                <p className="location mb-0"><i className="fas fa-map-marker-alt text-primary" /> Japan</p>
                                <h5 className="mt-5">Japan Express: Osaka to Tokyo</h5>
                              </div>
                              <p><i className="far fa-clock" /> Duration: <strong>3 days</strong></p>
                              <div className="rating-item rating-sm mt-3">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="3.5" />
                                </div>
                                <p className="rating-text text-muted font13">(85 reviews)</p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$988</span>
                                  per person
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/tour/06.jpg" alt="Image" />
                            </div>
                            <div className="content pt-10 clearfix">
                              <div className="short-info mr-0 mb-15">
                                <p className="location mb-0"><i className="fas fa-map-marker-alt text-primary" /> Egypt</p>
                                <h5 className="mt-5">Egypt Nile Jewel</h5>
                              </div>
                              <p><i className="far fa-clock" /> Duration: <strong>6 days</strong></p>
                              <div className="rating-item rating-sm mt-3">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="4.5" />
                                </div>
                                <p className="rating-text text-muted font13">(93 reviews)</p>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$1,554</span>
                                  per person
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade in" id="MenuHorizon28_04">
                  <div className="tab-inner">
                    <div className="row equal-height cols-1 cols-sm-2 cols-lg-3 gap-10 gap-md-20 gap-xl-30">
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/car/01.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="rating-item rating-sm">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={4.0} />
                                </div>
                              </div>
                              <div className="short-info">
                                <h5>Audi A8</h5>
                                <p className="location">or equivalent small</p>
                                <ul className="meta-list">
                                  <li>4 doors</li>
                                  <li>4 seats</li>
                                  <li>2 baggages</li>
                                </ul>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$35</span>
                                  per day
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/car/02.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="rating-item rating-sm">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={4.0} />
                                </div>
                              </div>
                              <div className="short-info">
                                <h5>Toyota Avanza</h5>
                                <p className="location">or equivalent small</p>
                                <ul className="meta-list">
                                  <li>4 doors</li>
                                  <li>4 seats</li>
                                  <li>2 baggages</li>
                                </ul>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$35</span>
                                  per day
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/car/03.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="rating-item rating-sm">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={4.0} />
                                </div>
                              </div>
                              <div className="short-info">
                                <h5>Mercedes-Benz CLS Class</h5>
                                <p className="location">or equivalent small</p>
                                <ul className="meta-list">
                                  <li>4 doors</li>
                                  <li>4 seats</li>
                                  <li>2 baggages</li>
                                </ul>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$35</span>
                                  per day
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/car/04.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="rating-item rating-sm">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={4.0} />
                                </div>
                              </div>
                              <div className="short-info">
                                <h5>Mercedes-Benz A-Class</h5>
                                <p className="location">or equivalent small</p>
                                <ul className="meta-list">
                                  <li>4 doors</li>
                                  <li>4 seats</li>
                                  <li>2 baggages</li>
                                </ul>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$35</span>
                                  per day
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/car/05.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="rating-item rating-sm">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={4.0} />
                                </div>
                              </div>
                              <div className="short-info">
                                <h5>Jeep Grand Cherokee</h5>
                                <p className="location">or equivalent small</p>
                                <ul className="meta-list">
                                  <li>4 doors</li>
                                  <li>4 seats</li>
                                  <li>2 baggages</li>
                                </ul>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$35</span>
                                  per day
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="product-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/car/06.jpg" alt="Image" />
                            </div>
                            <div className="content clearfix">
                              <div className="rating-item rating-sm">
                                <div className="rating-icons">
                                  <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue={4.0} />
                                </div>
                              </div>
                              <div className="short-info">
                                <h5>Toyota 4Runner Off Road</h5>
                                <p className="location">or equivalent small</p>
                                <ul className="meta-list">
                                  <li>4 doors</li>
                                  <li>4 seats</li>
                                  <li>2 baggages</li>
                                </ul>
                              </div>
                              <div className="price">
                                <div className="float-right">
                                  start from
                                  <span className="text-secondary">$35</span>
                                  per day
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="tabpanel" className="tab-pane fade in" id="MenuHorizon28_05">
                  <div className="tab-inner">
                    <div className="row equal-height cols-1 cols-sm-2 cols-md-3 cols-lg-4 gap-10 gap-md-20 gap-xl-30">
                      <div className="col">
                        <div className="guide-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/man/01.jpg" alt="Images" />
                            </div>
                            <div className="heading">
                              <div className="heading-box-shadow" />
                              <div className="heading-inner">
                                <h5>Christine Gateau</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" /> Antibes, France</p>
                                <div className="rating-item rating-sm rating-inline clearfix">
                                  <div className="rating-icons">
                                    <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="4.5" />
                                  </div>
                                  <p className="rating-text text-muted font13">253 reviews</p>
                                </div>
                              </div>
                            </div>
                            <div className="content clearfix">
                              <div className="meta-box">
                                <ul className="meta-list">
                                  <li><strong className="text-uppercase">Speak:</strong> English, French, Chinese</li>
                                  <li><div className="item-label"><span className="bg-primary">Verified guide</span></div></li>
                                </ul>
                              </div>
                              <div className="price">
                                start from
                                <span className="text-secondary">$150</span>
                                per day
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="guide-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/man/02.jpg" alt="Images" />
                            </div>
                            <div className="heading">
                              <div className="heading-box-shadow" />
                              <div className="heading-inner">
                                <h5>Alexey Barnashov</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" />  London, UK</p>
                                <div className="rating-item rating-sm rating-inline clearfix">
                                  <div className="rating-icons">
                                    <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="4.5" />
                                  </div>
                                  <p className="rating-text text-muted font13">253 reviews</p>
                                </div>
                              </div>
                            </div>
                            <div className="content clearfix">
                              <div className="meta-box">
                                <ul className="meta-list">
                                  <li><strong className="text-uppercase">Speak:</strong> English, French, Chinese</li>
                                  <li><div className="item-label"><span className="bg-primary">Verified guide</span></div></li>
                                </ul>
                              </div>
                              <div className="price">
                                start from
                                <span className="text-secondary">$150</span>
                                per day
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="guide-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/man/03.jpg" alt="Images" />
                            </div>
                            <div className="heading">
                              <div className="heading-box-shadow" />
                              <div className="heading-inner">
                                <h5>Adam Vause</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" /> Rome (primary), Italy</p>
                                <div className="rating-item rating-sm rating-inline clearfix">
                                  <div className="rating-icons">
                                    <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="4.5" />
                                  </div>
                                  <p className="rating-text text-muted font13">253 reviews</p>
                                </div>
                              </div>
                            </div>
                            <div className="content clearfix">
                              <div className="meta-box">
                                <ul className="meta-list">
                                  <li><strong className="text-uppercase">Speak:</strong> English, French, Chinese</li>
                                  <li><div className="item-label"><span className="bg-primary">Verified guide</span></div></li>
                                </ul>
                              </div>
                              <div className="price">
                                start from
                                <span className="text-secondary">$150</span>
                                per day
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="guide-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/man/04.jpg" alt="Images" />
                            </div>
                            <div className="heading">
                              <div className="heading-box-shadow" />
                              <div className="heading-inner">
                                <h5>Nicholas Mavrakis</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" /> Munbai, India</p>
                                <div className="rating-item rating-sm rating-inline clearfix">
                                  <div className="rating-icons">
                                    <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="4.5" />
                                  </div>
                                  <p className="rating-text text-muted font13">253 reviews</p>
                                </div>
                              </div>
                            </div>
                            <div className="content clearfix">
                              <div className="meta-box">
                                <ul className="meta-list">
                                  <li><strong className="text-uppercase">Speak:</strong> English, French, Chinese</li>
                                  <li><div className="item-label"><span className="bg-primary">Verified guide</span></div></li>
                                </ul>
                              </div>
                              <div className="price">
                                start from
                                <span className="text-secondary">$150</span>
                                per day
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="guide-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/man/02.jpg" alt="Images" />
                            </div>
                            <div className="heading">
                              <div className="heading-box-shadow" />
                              <div className="heading-inner">
                                <h5>Alexey Barnashov</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" />  London, UK</p>
                                <div className="rating-item rating-sm rating-inline clearfix">
                                  <div className="rating-icons">
                                    <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="4.5" />
                                  </div>
                                  <p className="rating-text text-muted font13">253 reviews</p>
                                </div>
                              </div>
                            </div>
                            <div className="content clearfix">
                              <div className="meta-box">
                                <ul className="meta-list">
                                  <li><strong className="text-uppercase">Speak:</strong> English, French, Chinese</li>
                                  <li><div className="item-label"><span className="bg-primary">Verified guide</span></div></li>
                                </ul>
                              </div>
                              <div className="price">
                                start from
                                <span className="text-secondary">$150</span>
                                per day
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="guide-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/man/03.jpg" alt="Images" />
                            </div>
                            <div className="heading">
                              <div className="heading-box-shadow" />
                              <div className="heading-inner">
                                <h5>Adam Vause</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" /> Rome (primary), Italy</p>
                                <div className="rating-item rating-sm rating-inline clearfix">
                                  <div className="rating-icons">
                                    <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="4.5" />
                                  </div>
                                  <p className="rating-text text-muted font13">253 reviews</p>
                                </div>
                              </div>
                            </div>
                            <div className="content clearfix">
                              <div className="meta-box">
                                <ul className="meta-list">
                                  <li><strong className="text-uppercase">Speak:</strong> English, French, Chinese</li>
                                  <li><div className="item-label"><span className="bg-primary">Verified guide</span></div></li>
                                </ul>
                              </div>
                              <div className="price">
                                start from
                                <span className="text-secondary">$150</span>
                                per day
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="guide-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/man/04.jpg" alt="Images" />
                            </div>
                            <div className="heading">
                              <div className="heading-box-shadow" />
                              <div className="heading-inner">
                                <h5>Nicholas Mavrakis</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" /> Munbai, India</p>
                                <div className="rating-item rating-sm rating-inline clearfix">
                                  <div className="rating-icons">
                                    <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="4.5" />
                                  </div>
                                  <p className="rating-text text-muted font13">253 reviews</p>
                                </div>
                              </div>
                            </div>
                            <div className="content clearfix">
                              <div className="meta-box">
                                <ul className="meta-list">
                                  <li><strong className="text-uppercase">Speak:</strong> English, French, Chinese</li>
                                  <li><div className="item-label"><span className="bg-primary">Verified guide</span></div></li>
                                </ul>
                              </div>
                              <div className="price">
                                start from
                                <span className="text-secondary">$150</span>
                                per day
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="col">
                        <div className="guide-grid-item">
                          <a href="#">
                            <div className="image">
                              <img src="images/man/01.jpg" alt="Images" />
                            </div>
                            <div className="heading">
                              <div className="heading-box-shadow" />
                              <div className="heading-inner">
                                <h5>Christine Gateau</h5>
                                <p className="location"><i className="fas fa-map-marker-alt text-primary" /> Antibes, France</p>
                                <div className="rating-item rating-sm rating-inline clearfix">
                                  <div className="rating-icons">
                                    <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="4.5" />
                                  </div>
                                  <p className="rating-text text-muted font13">253 reviews</p>
                                </div>
                              </div>
                            </div>
                            <div className="content clearfix">
                              <div className="meta-box">
                                <ul className="meta-list">
                                  <li><strong className="text-uppercase">Speak:</strong> English, French, Chinese</li>
                                  <li><div className="item-label"><span className="bg-primary">Verified guide</span></div></li>
                                </ul>
                              </div>
                              <div className="price">
                                start from
                                <span className="text-secondary">$150</span>
                                per day
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-light">
          <div className="container">
            <div className="section-title text-center">
              <h2>{t('trans.today_most_popular_deals')}</h2>
            </div>
            <div className="row equal-height cols-2 cols-md-2 cols-lg-4 gap-10 gap-md-20 gap-xl-30">
              <div className="col">
                <figure className="featured-image-grid-item with-highlight">
                  <div className="image">
                    <img src="images/image-regular/01.jpg" alt="image" />
                  </div>
                  <figcaption className="content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="item-highlight text-secondary">
                          Save up to<span>35%</span>
                        </span>
                      </div>
                      <div>
                        <span className="item-expire">5 days left</span>
                      </div>
                    </div>
                    <h5 className="mb-0">Labor Day Deals</h5>
                    <p>Book now and save</p>
                    <span className="act-as-btn text-secondary">Book Now <i className="material-icons">arrow_forward</i></span>
                  </figcaption>
                  <a href className="position-absolute-href" />
                </figure>
              </div>
              <div className="col">
                <figure className="featured-image-grid-item with-highlight">
                  <div className="image">
                    <img src="images/image-regular/02.jpg" alt="image" />
                  </div>
                  <figcaption className="content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="item-highlight text-secondary">
                          Save up to<span>25%</span>
                        </span>
                      </div>
                      <div>
                        <span className="item-expire">Expire tomorrow</span>
                      </div>
                    </div>
                    <h5 className="mb-0">Flash Sale</h5>
                    <p>save 35% on selected hotels</p>
                    <span className="act-as-btn text-secondary">Book Now <i className="material-icons">arrow_forward</i></span>
                  </figcaption>
                  <a href className="position-absolute-href" />
                </figure>
              </div>
              <div className="col">
                <figure className="featured-image-grid-item with-highlight">
                  <div className="image">
                    <img src="images/image-regular/03.jpg" alt="image" />
                  </div>
                  <figcaption className="content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="item-highlight text-secondary">
                          Save up to<span>25%</span>
                        </span>
                      </div>
                      <div>
                        <span className="item-expire">Only 3 days</span>
                      </div>
                    </div>
                    <h5 className="mb-0">Last Minute Deals</h5>
                    <p>Book now and save</p>
                    <span className="act-as-btn text-secondary">Book Now <i className="material-icons">arrow_forward</i></span>
                  </figcaption>
                  <a href className="position-absolute-href" />
                </figure>
              </div>
              <div className="col">
                <figure className="featured-image-grid-item with-highlight">
                  <div className="image">
                    <img src="images/image-regular/04.jpg" alt="image" />
                  </div>
                  <figcaption className="content">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="item-highlight text-secondary">
                          Save up to<span>40%</span>
                        </span>
                      </div>
                      <div>
                        <span className="item-expire">Only 3 days</span>
                      </div>
                    </div>
                    <h5 className="mb-0">New deals every day</h5>
                    <p>Get 40% off featured hotels</p>
                    <span className="act-as-btn text-secondary">Book Now <i className="material-icons">arrow_forward</i></span>
                  </figcaption>
                  <a href className="position-absolute-href" />
                </figure>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section-title text-center">
              <h2>{t('trans.our_top_destination')}</h2>
            </div>
            <div className="row cols-2 cols-md-3 cols-lg-4 gap-10 gap-md-20">
              <div className="col-6 col-lg-3">
                <figure className="image-caption-01">
                  <a href="#">
                    <div className="image overlay-relative caption-relative">
                      <img src="images/image-destination/01.jpg" alt="image" />
                      <div className="overlay-holder opacity-2" />
                      <figcaption className="caption-holder">
                        <div className="caption-inner caption-middle text-center">
                          <h5>Tuscany</h5>
                          <span className="d-block">start from $543</span>
                        </div>
                      </figcaption>
                    </div>
                  </a>
                </figure>
              </div>
              <div className="col-6 col-lg-3">
                <figure className="image-caption-01">
                  <a href="#">
                    <div className="image overlay-relative caption-relative">
                      <img src="images/image-destination/02.jpg" alt="image" />
                      <div className="overlay-holder opacity-2" />
                      <figcaption className="caption-holder">
                        <div className="caption-inner caption-middle text-center">
                          <h5>Tokyo</h5>
                          <span className="d-block">start from $458</span>
                        </div>
                      </figcaption>
                    </div>
                  </a>
                </figure>
              </div>
              <div className="col">
                <figure className="image-caption-01">
                  <a href="#">
                    <div className="image overlay-relative caption-relative">
                      <img src="images/image-destination/03.jpg" alt="image" />
                      <div className="overlay-holder opacity-2" />
                      <figcaption className="caption-holder">
                        <div className="caption-inner caption-middle text-center">
                          <h5>Paris</h5>
                          <span className="d-block">start from $825</span>
                        </div>
                      </figcaption>
                    </div>
                  </a>
                </figure>
              </div>
              <div className="col">
                <figure className="image-caption-01">
                  <a href="#">
                    <div className="image overlay-relative caption-relative">
                      <img src="images/image-destination/04.jpg" alt="image" />
                      <div className="overlay-holder opacity-2" />
                      <figcaption className="caption-holder">
                        <div className="caption-inner caption-middle text-center">
                          <h5>Manarola</h5>
                          <span className="d-block">start from $354</span>
                        </div>
                      </figcaption>
                    </div>
                  </a>
                </figure>
              </div>
              <div className="col">
                <figure className="image-caption-01">
                  <a href="#">
                    <div className="image overlay-relative caption-relative">
                      <img src="images/image-destination/05.jpg" alt="image" />
                      <div className="overlay-holder opacity-2" />
                      <figcaption className="caption-holder">
                        <div className="caption-inner caption-middle text-center">
                          <h5>Santorini</h5>
                          <span className="d-block">start from $543</span>
                        </div>
                      </figcaption>
                    </div>
                  </a>
                </figure>
              </div>
              <div className="col">
                <figure className="image-caption-01">
                  <a href="#">
                    <div className="image overlay-relative caption-relative">
                      <img src="images/image-destination/06.jpg" alt="image" />
                      <div className="overlay-holder opacity-2" />
                      <figcaption className="caption-holder">
                        <div className="caption-inner caption-middle text-center">
                          <h5>New York</h5>
                          <span className="d-block">start from $417</span>
                        </div>
                      </figcaption>
                    </div>
                  </a>
                </figure>
              </div>
              <div className="col">
                <figure className="image-caption-01">
                  <a href="#">
                    <div className="image overlay-relative caption-relative">
                      <img src="images/image-destination/07.jpg" alt="image" />
                      <div className="overlay-holder opacity-2" />
                      <figcaption className="caption-holder">
                        <div className="caption-inner caption-middle text-center">
                          <h5>Edinburgh</h5>
                          <span className="d-block">start from $745</span>
                        </div>
                      </figcaption>
                    </div>
                  </a>
                </figure>
              </div>
              <div className="col">
                <figure className="image-caption-01">
                  <a href="#">
                    <div className="image overlay-relative caption-relative">
                      <img src="images/image-destination/08.jpg" alt="image" />
                      <div className="overlay-holder opacity-2" />
                      <figcaption className="caption-holder">
                        <div className="caption-inner caption-middle text-center">
                          <h5>Arizona</h5>
                          <span className="d-block">start from $552</span>
                        </div>
                      </figcaption>
                    </div>
                  </a>
                </figure>
              </div>
            </div>
          </div>
        </section>
        <div className="cta-horizon bg-primary pv-80">
          <div className="container">
            <h3 className="text-uppercase">{t('trans.needtravelinspiration')}</h3>
            <a href="blog-01.html" className="btn btn-border">{t('trans.letsee')}</a>
          </div>
        </div>s
        <section>
          <div className="container">
            <div className="section-title text-center">
              <h2>{t('trans.what_people_say')}</h2>
            </div>
            <div className="slick-gallery-slideshow-wrapper testimonial-horizontal">
              <div id="slick-testimonial-long-slideshow" className="slider slick-gallery-slideshow">
                <div className="slick-item testimonial-long-item-10">
                  <div className="content">
                    <p className="saying">Real sold my in call. Invitation on an advantages collecting. But event old above shy bed noisy. Had sister see wooded favour income has. Stuff rapid since do as hence. Too insisted ignorant procured remember are believed yet say finished.</p>
                  </div>
                </div>
                <div className="slick-item testimonial-long-item-10">
                  <div className="content">
                    <p className="saying">Acceptance middletons me if discretion boisterous travelling an. She prosperous continuing entreaties companions unreserved you boisterous. Attended no indulged marriage is to judgment offering landlord.</p>
                  </div>
                </div>
                <div className="slick-item testimonial-long-item-10">
                  <div className="content">
                    <p className="saying">Middleton sportsmen sir now cordially ask additions for. You ten occasional saw everything but conviction. Daughter returned quitting few are day advanced branched. Do enjoyment defective objection or we if favourite.</p>
                  </div>
                </div>
                <div className="slick-item testimonial-long-item-10">
                  <div className="content">
                    <p className="saying">Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited. Had sister see wooded favour income has.</p>
                  </div>
                </div>
                <div className="slick-item testimonial-long-item-10">
                  <div className="content">
                    <p className="saying">Curiosity continual belonging offending so explained it exquisite. Do remember to followed yourself material mr recurred carriage. High drew west we no or at john. Dashwood denoting securing be on perceive.</p>
                  </div>
                </div>
                <div className="slick-item testimonial-long-item-10">
                  <div className="content">
                    <p className="saying">Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold ye. Be call four my went mean. Celebrated if remarkably especially.</p>
                  </div>
                </div>
              </div>
              <div className="slick-testimonial-long-nav-wrapper">
                <div id="slick-testimonial-long-nav" className="slider slick-gallery-nav">
                  <div className="slick-item">
                    <div className="man clearfix">
                      <div className="man-inner">
                        <div className="image">
                          <img src="images/image-man/01.jpg" alt="images" className="img-circle" />
                        </div>
                        <div className="texting">
                          <h5>Ange Ermolova</h5>
                          <p className="text-muted">Mumbai, India</p>
                          <div className="rating-item rating-sm">
                            <div className="rating-icons">
                              <input type="hidden" className="rating" data-filled="rating-icon ri-star rating-rated" data-empty="rating-icon ri-star-empty" data-fractions={2} data-readonly defaultValue="4.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="man clearfix">
                      <div className="man-inner">
                        <div className="image">
                          <img src="images/image-man/02.jpg" alt="images" className="img-circle" />
                        </div>
                        <div className="texting">
                          <h5>Khairoz Nadzri</h5>
                          <p className="text-muted">Amman, Jordan</p>
                          <div className="rating-item rating-sm">
                            <div className="rating-icons">
                              <input type="hidden" className="rating" data-filled="rating-icon ri-star rating-rated" data-empty="rating-icon ri-star-empty" data-fractions={2} data-readonly defaultValue="4.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="man clearfix">
                      <div className="man-inner">
                        <div className="image">
                          <img src="images/image-man/03.jpg" alt="images" className="img-circle" />
                        </div>
                        <div className="texting">
                          <h5>Suttira Ketkaew</h5>
                          <p className="text-muted">Bangkok, Thailand</p>
                          <div className="rating-item rating-sm">
                            <div className="rating-icons">
                              <input type="hidden" className="rating" data-filled="rating-icon ri-star rating-rated" data-empty="rating-icon ri-star-empty" data-fractions={2} data-readonly defaultValue="4.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="man clearfix">
                      <div className="man-inner">
                        <div className="image">
                          <img src="images/image-man/04.jpg" alt="images" className="img-circle" />
                        </div>
                        <div className="texting">
                          <h5>Antony Robert</h5>
                          <p className="text-muted">New York, USA</p>
                          <div className="rating-item rating-sm">
                            <div className="rating-icons">
                              <input type="hidden" className="rating" data-filled="rating-icon ri-star rating-rated" data-empty="rating-icon ri-star-empty" data-fractions={2} data-readonly defaultValue="4.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="man clearfix">
                      <div className="man-inner">
                        <div className="image">
                          <img src="images/image-man/05.jpg" alt="images" className="img-circle" />
                        </div>
                        <div className="texting">
                          <h5>Christine Gateau</h5>
                          <p className="text-muted">Paris, France</p>
                          <div className="rating-item rating-sm">
                            <div className="rating-icons">
                              <input type="hidden" className="rating" data-filled="rating-icon ri-star rating-rated" data-empty="rating-icon ri-star-empty" data-fractions={2} data-readonly defaultValue="4.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slick-item">
                    <div className="man clearfix">
                      <div className="man-inner">
                        <div className="image">
                          <img src="images/image-man/06.jpg" alt="images" className="img-circle" />
                        </div>
                        <div className="texting">
                          <h5>Mark Lassfot</h5>
                          <p className="text-muted">Tokyo, Japan</p>
                          <div className="rating-item rating-sm">
                            <div className="rating-icons">
                              <input type="hidden" className="rating" data-filled="rating-icon ri-star rating-rated" data-empty="rating-icon ri-star-empty" data-fractions={2} data-readonly defaultValue="4.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end Site Content */}
        <section className="partners-wrapper border-top pv-60">
          <div className="container">
            <div className="d-md-flex justify-content-center">
              <img src="images/image-logo-grid/20.png" className="image-partner" alt="Partners" />
              <img src="images/image-logo-grid/21.png" className="image-partner" alt="Partners" />
              <img src="images/image-logo-grid/22.png" className="image-partner" alt="Partners" />
              <img src="images/image-logo-grid/23.png" className="image-partner" alt="Partners" />
              <img src="images/image-logo-grid/25.png" className="image-partner" alt="Partners" />
            </div>
          </div>
        </section>
        {/* end Site Content */}
      </div>
    );
  }
}

//withRouter(connect()(withStyles(styles)(FirstPage)))

export default withRouter (withTranslation()(Body))

// withRouter(Body)


// export {
//   withTranslation()(Body),
//   withRouter(Body)
// }
