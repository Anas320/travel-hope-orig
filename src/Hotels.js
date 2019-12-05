import * as React from 'react';
import { withRouter,Router, Route } from "react-router-dom";
import dotenv from 'dotenv';
import currency from './Header'

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

require('dotenv').config()

const queryString = require('query-string');

let datac = 0; 
let data = [];
let arr2 = []

let arr = []

// let curr = 1


//const env = dotenv.config().parsed;


class Hotels extends React.Component{
constructor(props, context) {
    super(props, context);
    this.state = {
      suggestion: [],
      lang: ""
    };
    //this.anchorHandler2 = this.anchorHandler2.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }
    componentDidMount(){


console.log(this.props.currency)
        require('dotenv').config()
        console.log('This is the currency')
        console.log(currency)
        
        let url = window.location.href
        console.log(process.env.REACT_APP_OTA)
        console.log(process.env.REACT_APP_VENDOR)
        console.log(process.env.REACT_APP_CURRENCY)
       
console.log(url.split("/")[4])
console.log(url.split("/")[5])
console.log(url.split("/")[6])
console.log(currency)

  
// console.log(arr2)
       //console.log(location.href.split("/"))
//let arr1 = []
//console.log (location.href)
 //console.log(url)
// console.log(location.href);
        //console.log(window.location.href.stringify())
        arr = this.props.location.pathname.split("/")
//fetch('https://bookingengine.co/api/hotels/search?ota_id='+ process.env.REACT_APP_OTA+'&vendor='+process.env.REACT_APP_VENDOR+'&city='+url.split("/")[4]+'&adults=1&children=0&checkin=' + url.split("/")[5] +'&checkout='+ url.split("/")[6] +'&currency='+process.env.REACT_APP_CURRENCY+'&ip_address=103.255.6.76')
  
      fetch('https://bookingengine.co/api/hotels/search?ota_id='+process.env.REACT_APP_OTA+'&vendor='+process.env.REACT_APP_VENDOR+'&city='+url.split("/")[4]+'&adults=1&children=0&checkin='+url.split("/")[5]+'&checkout='+url.split("/")[6]+'&currency=USD&ip_address='+process.env.REACT_APP_IP_ADDRESS+'&version=latest')
  
      .then(resp => {
        return resp.json();
      })
      .then(data1 => {
        // this.props.history.push({
        //   pathname: '/hotels/'+ this.state.dateStarthotel + '/'+this.state.dateEndhotel,
        //  // search: '/'+this.state.dateEndhotel + '/' + this.state.dateStarthotel,
        //   state: {
        //     detail: data


        //   }
//console.log('This is the data' + data1)
this.setState({
    suggestion: data1.data
})
        //data.push(data1["data"])
        //console.log(data1)

        //data2.push(data1) 
        // })


      //console.log(data)
      //console.log(data)
      }).catch(e=>{
        console.log(e)
      })
 datac = data[0]

    }
    anchorHandler2 = (payload, id) =>{ 
        let url= window.location.href
        console.log (payload)
        //const currency = this.props.location.state.currency
        //const curr = this.props.location.state.curr
        this.props.history.push({
            pathname: '/hotels/detail/'+ url.split("/")[5] + '/' + url.split("/")[6] + '/' + id,
            
            
      
            state: {
                payload,
                currency: this.props.currency,
                curr: this.props.curr
            }  
        })


    }
    handleClick(evt) {
    //console.log(evt.target.value)
    
    
    this.setState({
      lang: evt.target.value
    })
    i18next.changeLanguage(evt.target.value)
    
  }


    render(){
          const curr = this.props.currency
          const currName = this.props.curr
          const anchorHandler2  = this.anchorHandler2;
          const { t } = this.props;
          //const image = data["data"][0].image
         // console.log(image)

//console.log(arr)
//console.log(this.props.location)

//        console.log(this.props.location.state.detail["data"])
   //      const items = data["data"].map(function(item){
   //    return console.log(item) ;
   // });

        //console.log(data)
        return (
            <div>

           
                
            
            

  
          
                
                <div className="body-inner">
                    
                    <div className="main-wrapper scrollspy-container">
                        <div className="page-title breadcrumb-wrapper">
                            <div className="container">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">{t('trans.home')}</a></li>
                                        <li className="breadcrumb-item"><a href="#">{t('trans.library')}</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">{t('trans.data')}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <section className="page-wrapper bg-light-primary">
                            <div className="container">
                                <div className="row gap-20 gap-md-30 gap-xl-40">
                                    <div className="col-12 col-lg-3">
                                        <aside className="sidebar-wrapper filter-wrapper mb-10 mb-md-0">
                                            <div className="box-expand-lg">
                                                <div id="filterResultCallapseOnMobile" className="collapse box-collapse">
                                                    <div className="wrapper-inner">
                                                        <div className="sidebar-title bg-primary">
                                                            <div className="d-flex align-items-end">
                                                                <div>
                                                                    <h4 className="text-white font-serif font400">{t('trans.filter')}</h4>
                                                                </div>
                                                                <div className="ml-auto">
                                                                    <a href="#" className="filter-reset">{t('trans.reset')}</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-box">
                                                            <div className="box-title"><h5>{t('trans.name_contain')}</h5></div>
                                                            <div className="box-content">
                                                                <div className="input-group">
                                                                    <input type="email" className="form-control" placeholder="Email address" />
                                                                    <div className="input-group-append">
                                                                        <button className="btn btn-secondary" type="button"><i className="dripicons-search" /></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-box">
                                                            <div className="box-title"><h5>{t('trans.price_range')}</h5></div>
                                                            <div className="box-content">
                                                                <input id="price_range" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-box">
                                                            <div className="box-title"><h5>{t('trans.star_range')}</h5></div>
                                                            <div className="box-content">
                                                                <input id="star_range" />
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-box">
                                                            <div className="box-title"><h5>{t('trans.property_type')}</h5></div>
                                                            <div className="box-content">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="filerPropertyType-01" name="filerPropertyType" defaultChecked />
                                                                    <label className="custom-control-label" htmlFor="filerPropertyType-01">{t('trans.hotels')} <small className="text-muted font11">(854)</small></label>
                                                                </div>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="filerPropertyType-02" name="filerPropertyType" />
                                                                    <label className="custom-control-label" htmlFor="filerPropertyType-02">{t('trans.apartments')}  <small className="text-muted font11">(25)</small></label>
                                                                </div>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="filerPropertyType-03" name="filerPropertyType" />
                                                                    <label className="custom-control-label" htmlFor="filerPropertyType-03">{t('trans.hostels')}  <small className="text-muted font11">(254)</small></label>
                                                                </div>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="filerPropertyType-04" name="filerPropertyType" />
                                                                    <label className="custom-control-label" htmlFor="filerPropertyType-04">{t('trans.family_stays')} <small className="text-muted font11">(22)</small></label>
                                                                </div>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="filerPropertyType-05" name="filerPropertyType" />
                                                                    <label className="custom-control-label" htmlFor="filerPropertyType-05">{t('trans.resorts')}  <small className="text-muted font11">(24)</small></label>
                                                                </div>
                                                                <div id="filerPropertyTypeShowHide" className="collapse">
                                                                    <div className="collapse-inner">
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="filerPropertyType-06" name="filerPropertyType" />
                                                                            <label className="custom-control-label" htmlFor="filerPropertyType-06">{t('trans.treehouses')} <small className="text-muted font11">(25)</small></label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="filerPropertyType-07" name="filerPropertyType" />
                                                                            <label className="custom-control-label" htmlFor="filerPropertyType-07">{t('trans.motels')} <small className="text-muted font11">(14)</small></label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="filerPropertyType-08" name="filerPropertyType" />
                                                                            <label className="custom-control-label" htmlFor="filerPropertyType-08">{t('trans.guesthouse')} <small className="text-muted font11">(8)</small></label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="filerPropertyType-09" name="filerPropertyType" />
                                                                            <label className="custom-control-label" htmlFor="filerPropertyType-09">{t('trans.inns')} <small className="text-muted font11">(2)</small></label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="clear mb-5" />
                                                                <button className="btn btn-toggle btn-text-inherit text-secondary text-uppercase font10 letter-spacing-1 font600 collapsed collapsed-on" type="buttom" data-toggle="collapse" data-target="#filerPropertyTypeShowHide">{t('trans.show_more')} (+)</button>
                                                                <button className="btn btn-toggle btn-text-inherit text-secondary text-uppercase font10 letter-spacing-1 font600 collapsed collapsed-off" type="buttom" data-toggle="collapse" data-target="#filerPropertyTypeShowHide">{t('trans.show_less')} (-)</button>
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-box">
                                                            <div className="box-title"><h5>{t('trans.hostel_facilities')}</h5></div>
                                                            <div className="box-content">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="filerFacility-01" name="filerFacility" defaultChecked />
                                                                    <label className="custom-control-label" htmlFor="filerFacility-01">{t('trans.wifi')}</label>
                                                                </div>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="filerFacility-02" name="filerFacility" />
                                                                    <label className="custom-control-label" htmlFor="filerFacility-02">{t('trans.elevator')}</label>
                                                                </div>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="filerFacility-03" name="filerFacility" />
                                                                    <label className="custom-control-label" htmlFor="filerFacility-03">{t('trans.pools')}</label>
                                                                </div>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="filerFacility-04" name="filerFacility" />
                                                                    <label className="custom-control-label" htmlFor="filerFacility-04">{t('trans.parking')}</label>
                                                                </div>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input" id="filerFacility-05" name="filerFacility" />
                                                                    <label className="custom-control-label" htmlFor="filerFacility-05">{t('trans.air_conditioning')}</label>
                                                                </div>
                                                                <div id="filerFacilityShowHide" className="collapse">
                                                                    <div className="collapse-inner">
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="filerFacility-06" name="filerFacility" />
                                                                            <label className="custom-control-label" htmlFor="filerFacility-06">{t('trans.restaurant')}</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="filerFacility-07" name="filerFacility" />
                                                                            <label className="custom-control-label" htmlFor="filerFacility-07">{t('trans.front_desk')}</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="filerFacility-08" name="filerFacility" />
                                                                            <label className="custom-control-label" htmlFor="filerFacility-08">{t('trans.swimming_pool')}</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox">
                                                                            <input type="checkbox" className="custom-control-input" id="filerFacility-09" name="filerFacility" />
                                                                            <label className="custom-control-label" htmlFor="filerFacility-09">{t('trans.cable_tv')}</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="clear mb-5" />
                                                                <button className="btn btn-toggle btn-text-inherit text-secondary text-uppercase font10 letter-spacing-1 font600 collapsed collapsed-on" type="buttom" data-toggle="collapse" data-target="#filerFacilityShowHide">Show more (+)</button>
                                                                <button className="btn btn-toggle btn-text-inherit text-secondary text-uppercase font10 letter-spacing-1 font600 collapsed collapsed-off" type="buttom" data-toggle="collapse" data-target="#filerFacilityShowHide">Show less (-)</button>
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-box">
                                                            <div className="box-title"><h5>{t('trans.filer_select')}</h5></div>
                                                            <div className="box-content">
                                                                <div className="form-group">
                                                                    <select data-placeholder="Please select" className="chosen-the-basic form-control" tabIndex={2}>
                                                                        <option value />
                                                                        <option>1</option>
                                                                        <option>2</option>
                                                                        <option>3</option>
                                                                        <option>4</option>
                                                                        <option>5</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sidebar-box">
                                                            <div className="box-title"><h5>{t('trans.filer_text')}</h5></div>
                                                            <div className="box-content">
                                                                <p className="line-15">{t('trans.park_fat_she_nor')}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="featured-contact-01 mt-40 mb-30 d-none d-md-block">
                                                <h6>{t('trans.need_help')}</h6>
                                                <span className="phone-number"><i className="material-icons">{t('trans.phone')}</i> 1985 5524 145</span>
                                                {t('trans.its_free_to_call')}
                      </div>
                                            <div className=" d-none d-lg-block">
                                                <h6 className="text-uppercase letter-spacing-2 line-1 font500"><span>{t('trans.why_book_with')}</span></h6>
                                                <ul className="list-icon-data-attr font-ionicons">
                                                    <li data-content="">{t('trans.excited_him_now_natural')}</li>
                                                    <li data-content="">{t('trans.farther_so_friend_is')}</li>
                                                    <li data-content="">{t('trans.procured_is_material')}</li>
                                                </ul>
                                            </div>
                                            <div className="d-block d-lg-none">
                                                <button type="buttom" className="btn btn-toggle btn-outline-primary btn-block collapsed collapsed-disapear" data-toggle="collapse" data-target="#filterResultCallapseOnMobile">{t('trans.show_filter')}</button>
                                            </div>
                                        </aside>
                                    </div>
                                    <div className="col-12 col-lg-9">
                                        <div className="content-wrapper">
                                            <div className="d-lg-flex mb-30 mb-lg-0">
                                                <div>
                                                    <h3 className="heading-title"><span>{t('trans.hotels')} <span className="text-lowercase">in</span> </span> <span className="text-primary">Rome, Italy</span></h3>
                                                    <select value={this.state.lang}  onChange={this.handleClick}>
                                                          <option value = 'en'>English</option>
                                                          <option value = 'chi'>Chinese</option>
                                                          <option value = 'ko'>Korea</option>
                                                          <option value = 'ger'>Germany</option>
                                                          <option value = 'it'>Italy</option>
                                    


                                                    </select>



                                                    <p className="text-muted post-heading">2478 results found available now</p>
                                                </div>
                                                <div className="ml-auto">
                                                    <button className="btn btn-secondary btn-wide btn-toggle collapsed btn-sm btn-change-search" data-toggle="collapse" data-target="#change-search" />
                                                </div>
                                            </div>
                                            <div id="change-search" className="collapse">
                                                <div className="change-search-wrapper">
                                                    <div className="row gap-10 gap-xl-20 align-items-end">
                                                        <div className="col-12 col-lg-6">
                                                            <div className="form-group">
                                                                <label>Destination</label>
                                                                <div className="form-icon-left typeahead__container">
                                                                    <span className="icon-font text-muted"><i className="bx bx-map" /></span>
                                                                    <input className="js-typeahead-country_v1 form-control" name="country_v1[query]" type="search" placeholder="Country or city" autoComplete="off" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-lg-6">
                                                            <div id="airDatepickerRange-hotel" className="row gap-10 gap-xl-20">
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label>Check-in</label>
                                                                        <div className="form-icon-left">
                                                                            <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                                                            <input type="text" id="dateStart-hotel" className="form-control form-readonly-control" placeholder="dd/mm/yyyy" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="form-group">
                                                                        <label>Check-out</label>
                                                                        <div className="form-icon-left">
                                                                            <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                                                            <input type="text" id="dateEnd-hotel" className="form-control form-readonly-control" placeholder="dd/mm/yyyy" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-8 col-md-9">
                                                            <div className="row gap-10 gap-xl-20">
                                                                <div className="col-4 col-sm-4">
                                                                    <div className="form-group form-spin-group">
                                                                        <label htmlFor="room-amount">Rooms</label>
                                                                        <div className="form-icon-left">
                                                                            <span className="icon-font text-muted"><i className="bx bx-home-alt" /></span>
                                                                            <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder="dd/mm/yyyy" defaultValue={1} readOnly />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-4 col-sm-4 col-md-4">
                                                                    <div className="form-group form-spin-group">
                                                                        <label htmlFor="adult-amount">Adults</label>
                                                                        <div className="form-icon-left">
                                                                            <span className="icon-font text-muted"><i className="bx bx-user" /></span>
                                                                            <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder="dd/mm/yyyy" defaultValue={0} readOnly />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-4 col-sm-4">
                                                                    <div className="form-group form-spin-group">
                                                                        <label htmlFor="child-amount">Children</label>
                                                                        <div className="form-icon-left">
                                                                            <span className="icon-font text-muted"><i className="bx bx-user" /></span>
                                                                            <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder="dd/mm/yyyy" defaultValue={0} readOnly />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-4 col-md-3">
                                                            <div className="form-group">
                                                                <button className="btn btn-block btn-primary btn-form">Search</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sorting-box mb-30">
                                                <div className="row align-items-center">
                                                    <div className="col-12 col-md-9">
                                                        <div className="sort-by-wrapper mb-10 mb-md-0">
                                                            <label className="sorting-label block-xs">{t('trans.sort_by')}: </label>
                                                            <div className="sorting-middle-holder">
                                                                <ul className="sort-by">
                                                                    <li className="active up"><a href="#">{t('trans.name')} <i className="fas fa-long-arrow-alt-down" /></a></li>
                                                                    <li><a href="#">{t('trans.price')}</a></li>
                                                                    <li><a href="#">{t('trans.location')}</a></li>
                                                                    <li><a href="#">{t('trans.start_rating')}</a></li>
                                                                    <li><a href="#">{t('trans.user_rating')}</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-3">
                                                        <div className="sort-by-wrapper float-left float-md-right">
                                                            <label className="sorting-label">{t('trans.view_as')}: </label>
                                                            <div className="sorting-middle-holder">
                                                                <a href="#" className="btn btn-sorting active"><i className="dripicons-checklist" /></a>
                                                                <a href="#" className="btn btn-sorting"><i className="dripicons-view-thumb" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                           <div className="row equal-height cols-1 cols-md-2 cols-lg-3 gap-10 gap-lg-20">

                                                { this.state.suggestion.map(function(item){
      return <div className="col">
                                                    <div className="product-grid-item">
                                                        <a onClick = {() => anchorHandler2(item.custom_payload, item.id)}>
                                                            <div className="image">
                                                                <img src={`${item.image}`} alt="Image" />
                                                            </div>
                                                            <div className="content clearfix">
                                                                <div className="rating-item rating-sm rating-inline clearfix">
                                                                    <div className="rating-icons">
                                                                        <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="4.5" />
                                                                    </div>
                                                                    <p className="rating-text text-muted font13">253 reviews</p>
                                                                </div>
                                                                <div className="short-info">
                                                                    <h6>{`${item.company_name}`}</h6>
                                                                    <p className="location"><i className="fas fa-map-marker-alt text-primary" />{`${item.country_id}`}, {`${item.city_name}`}</p>
                                                                </div>
                                                                <div className="price">
                                                                    <div className="float-right">
                                                                        start from
                                    <span className="text-secondary">{currName}{`${item.price*curr}`}</span>
                                                                        per night
                                  </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div> ;
   })

   
}
{console.log(this.state.suggestion)}

                                                    
                                            </div>
                                            <div className="pager-wrappper mt-40">
                                                <div className="pager-innner">
                                                    <div className="row align-items-center text-center text-md-left">
                                                        <div className="col-12 col-md-5">
                                                            {t('trans.start_showing_result')} 1 {t('trans.to')} 15 {t('trans.from')} 248
                            </div>
                                                        <div className="col-12 col-md-7">
                                                            <nav className="float-lg-right mt-10 mt-md-0">
                                                                <ul className="pagination justify-content-center justify-content-lg-left">
                                                                    <li>
                                                                        <a href="#" aria-label="Previous">
                                                                            <span aria-hidden="true">«</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className="active"><a href="#">1</a></li>
                                                                    <li><a href="#">2</a></li>
                                                                    <li><a href="#">3</a></li>
                                                                    <li><span>...</span></li>
                                                                    <li><a href="#">11</a></li>
                                                                    <li><a href="#">12</a></li>
                                                                    <li><a href="#">13</a></li>
                                                                    <li>
                                                                        <a href="#" aria-label="Next">
                                                                            <span aria-hidden="true">»</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* end Main Wrapper */}
                    {/* start Footer Wrapper */}
                    
                   
                </div>
                
                <a id="back-to-top" href="#" className="back-to-top" role="button" title="Click to return to top" data-toggle="tooltip" data-placement="left"><i className="bx bx-chevron-up" /></a>
                
            </div>
        )
    }
}

export default withRouter (withTranslation()(Hotels))