import * as React from 'react';
import './detail.css'
//import '/js/detailscript.js'
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';




let url = window.location.href
let currName = 'USD'
let curr = 1

class Detail extends React.Component{

constructor(props, context) {
    super(props, context);
    this.state = {
      suggestion: {},
      images : [],
      amenities : [],
      rooms : [],
      lang: "",
      curr: 1,
      currName: "USD"
    };

this.handleClick = this.handleClick.bind(this)
  }
componentDidMount(){
    //console.log('This is the payload :' + this.props.location.state.payload.vendor)
    const payload = JSON.stringify(this.props.location.state.payload)
    const currency = (this.props.location.state.currency)
    const curr = (this.props.location.state.curr)

let url = window.location.href
let checkin = url.split("/")[5]
let checkout = url.split("/")[6]

console.log(currency)
console.log(curr)

console.log(checkin.split("-")[0])
console.log(checkin.split("-")[1])
console.log(checkin.split("-")[2])

console.log(checkout)

console.log(url.split("/")[5])
console.log(url.split("/")[6])
console.log(url.split("/")[7])

    //fetch('https://bookingengine.co/api/hotels/details?currency=usd&checkin='+url.split("/")[5]+'&checkout='+url.split("/")[6]+'&hotel_id='+url.split("/")[7]+'&ip_address='+process.env.REACT_APP_IP_ADDRESS+'&ota_id='+process.env.REACT_APP_OTA+'&vendor='+process.env.REACT_APP_VENDOR+ '&custom_payload='+this.props.location.state.payload)
    fetch('https://bookingengine.co/api/hotels/details?currency=usd&checkin='+checkin.split("-")[1]+'-'+checkin.split("-")[2]+'-'+checkin.split("-")[0]+'&checkout='+checkout.split("-")[1]+'-'+checkout.split("-")[2]+'-'+checkout.split("-")[0]+'&hotel_id='+url.split("/")[7]+'&ip_address='+process.env.REACT_APP_IP_ADDRESS+'&ota_id='+process.env.REACT_APP_OTA+'&vendor='+process.env.REACT_APP_VENDOR+'&custom_payload='+payload)
    //fetch('https://bookingengine.co/api/hotels/details?currency=usd&checkin=10-28-2019&checkout=10-30-2019&hotel_id=617364&ip_address='+process.env.REACT_APP_IP_ADDRESS+'&ota_id='+process.env.REACT_APP_OTA+'&vendor='+process.env.REACT_APP_VENDOR+'&custom_payload={"vendor":3}')
    .then(resp => {
        return resp.json();
      })
      .then(data1 => {
        
console.log('This is data from detail page' + data1.hotels.id)
this.setState({
    suggestion: data1.hotels,
    

    
})
this.setState({
    
    images: data1.hotels.images,
    amenities: data1.hotels.amenities,
    rooms: data1.hotels.rooms

    
})
        
      }).catch(e=>{
        console.log(e)
      })
}

// shouldComponentUpdate(nextProps) {
//   return (curr = nextProps.currency,
//     currName = nextProps.curr

    

//     ); 
// }


handleClick(evt) {
    //console.log(evt.target.value)
    
    
    this.setState({
      lang: evt.target.value
    })
    i18next.changeLanguage(evt.target.value)
    
  }

    render(){
        const { t } = this.props;
        const currency = this.props.location.state.currency
        const curr = this.props.location.state.curr

        console.log(currency)
        console.log(curr)
        return (
            <div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <style dangerouslySetInnerHTML={{__html: "\n  /* Make the image fully responsive */\n  .carousel-inner img {\n      width: 100%;\n      height: 100%;\n  }\n  " }} />



<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
      <link  href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
            


                
                {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
                {/*[if lt IE 9]>
        
        
    <![endif]*/}
                {/* start Body */}
                {/* start Body Inner */}
                <div className="body-inner">
                    {/* start Header */}
                    
                    {/* end Header */}
                    {/* start Main Wrapper */}
                    <div className="main-wrapper scrollspy-action">
                        <div className="page-title breadcrumb-wrapper">
                            <div className="container">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="#">{t('trans.home')}</a></li>
                                        <li className="breadcrumb-item"><a href="#">{t('trans.destination')}</a></li>
                                        <li className="breadcrumb-item"><a href="#">{t('trans.city')}</a></li>
                                        <li className="breadcrumb-item"><a href="#">{t('trans.result')}</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">{t('trans.detail')}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="page-wrapper page-detail bg-light">
                            <div className="detail-header">
                                <div className="container">
                                    <div className="d-flex flex-column flex-lg-row">
                                        <div>
                                            <h2 id="detail-content-sticky-nav-00" className="name">Marina Bay Sands Hotel</h2>
                                            <div className="star-rating-wrapper">
                                                <div className="rating-item rating-inline">
                                                    <div className="rating-icons">
                                                        <input type="hidden" className="rating" data-filled="rating-icon fas fa-star rating-rated" data-empty="rating-icon far fa-star" data-fractions={2} data-readonly defaultValue="4.5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="clear" />
                                            <p className="location"><i className="material-icons text-info small">place</i> 10 Bayfront Avenue, Marina Bay, 018956 Singapore, Singapore <a href="#detail-content-sticky-nav-03" className="anchor">Show map</a></p>
                                        </div>
                                        <div className="ml-lg-auto text-left text-lg-right mt-20 mt-lg-0">
                                            <div className="price">from <span>$<span>132.32</span></span></div>
                                            <a href="#detail-content-sticky-nav-02" className="anchor btn btn-primary btn-wide mt-5">{t('trans.see_price_and_date')}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span id="detail-content-sticky-nav-00" className="d-block" />
                            <div className="fullwidth-horizon-sticky d-none d-lg-block">
                                <div className="fullwidth-horizon-sticky-inner">
                                    <div className="container">
                                        <div className="fullwidth-horizon-sticky-item clearfix">
                                            <ul id="horizon-sticky-nav" className="horizon-sticky-nav clearfix">
                                                <li>
                                                    <a href="#detail-content-sticky-nav-00">{t('trans.gallery')}</a>
                                                </li>
                                                <li>
                                                    <a href="#detail-content-sticky-nav-01">{t('trans.overview')}</a>
                                                </li>
                                                <li>
                                                    <a href="#detail-content-sticky-nav-02">{t('trans.available_rooms')}</a>
                                                </li>
                                                <li>
                                                    <a href="#detail-content-sticky-nav-03">{t('trans.whats_nearby')}</a>
                                                </li>
                                                <li>
                                                    <a href="#detail-content-sticky-nav-04">{t('trans.facilities')}</a>
                                                </li>
                                                <li>
                                                    <a href="#detail-content-sticky-nav-05">{t('trans.conditions')}</a>
                                                </li>
                                                <li>
                                                    <a href="#detail-content-sticky-nav-06">{t('trans.reviews')}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div id="change-search" className="collapse">
                                    <div className="change-search-wrapper rounded-0 shadow-sm mh-1 mb-0">
                                        <div className="row gap-10 gap-xl-20 align-items-end">
                                            <div className="col-12 col-lg-6">
                                                <div className="form-group">
                                                    <label>{t('trans.destination')}</label>
                                                    <div className="form-icon-left typeahead__container">
                                                        <span className="icon-font text-muted"><i className="bx bx-map" /></span>
                                                        <input className="js-typeahead-country_v1 form-control" name="country_v1[query]" type="search" placeholder="Country or city" autoComplete="off" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                <div id="airDatepickerRange-hotel" className="row gap-10 gap-xl-20">
                                                    <div className="col-12 col-sm-6 col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>{t('trans.checkin')}</label>
                                                            <div className="form-icon-left">
                                                                <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                                                <input type="text" id="dateStart-hotel" className="form-control form-readonly-control" placeholder="dd/mm/yyyy" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-sm-6 col-md-6">
                                                        <div className="form-group">
                                                            <label>{t('trans.checkout')}</label>
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
                                                            <label htmlFor="room-amount">{t('trans.rooms')}</label>
                                                            <div className="form-icon-left">
                                                                <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder="dd/mm/yyyy" defaultValue={1} readOnly />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 col-sm-4 col-md-4">
                                                        <div className="form-group form-spin-group">
                                                            <label htmlFor="adult-amount">{t('trans.adults')}</label>
                                                            <div className="form-icon-left">
                                                                <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder="dd/mm/yyyy" defaultValue={0} readOnly />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 col-sm-4">
                                                        <div className="form-group form-spin-group">
                                                            <label htmlFor="child-amount">{t('trans.children')}</label>
                                                            <div className="form-icon-left">
                                                                <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder="dd/mm/yyyy" defaultValue={0} readOnly />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-sm-4 col-md-3">
                                                <div className="form-group">
                                                    <button className="btn btn-block btn-primary btn-form">{t('trans.search1')}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row gap-30">
                                    <div className="col-12 col-lg-8 col-xl-9">
                                        <div className="content-wrapper">
                                            <div className="slick-gallery-slideshow detail-gallery">
                                            {console.log(this.state.suggestion.slider_image)}
                                            
                                                 <div id="demo" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        {/*<ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={0} />
          <li data-target="#demo" data-slide-to={0} />
        </ul>*/}
        {/* The slideshow */}

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={`${this.state.suggestion.slider_image}`} alt="Los Angeles" width={1100} height={500} />
          </div>
          {this.state.images.map(function(item){
          
          return <div className="carousel-item">
            <img src={`${item}`} alt="Image" width={1100} height={500} />
          </div>;})}
          
          
        </div>
        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>   
                                                
                                            </div>
                                            <div id="detail-content-sticky-nav-01" className="fullwidth-horizon-sticky-section">
                                                <h3 className="heading-title"><span>{t('trans.overview')}</span></h3>
                                                <ul className="main-facility-list clearfix">
                                                {console.log(this.state.amenities)}
                                                {this.state.amenities.map(function(item){
                                                   return <li>
                                                        <span className="icon-font"><i className="material-icons"></i></span>{item.title}
                                                    </li>})}
                                                    
                                                </ul>
                                                <h6>{t('trans.get_the_celebrity_treatment')} </h6>
                                                {/*<div className="feature-box set-width">
                                                    <h5>Guests Love It Because...</h5>
                                                    <ul className="clearfix">
                                                        <li className="clearfix">
                                                            <span className="icon-font"><i className="material-icons">stars</i> </span>
                                                            <span className="content"><span className="font700 font16">“great pool area”</span><span className="text-muted font-italic font13 spacing-10">1681 related reviews</span></span>
                                                        </li>
                                                        <li className="clearfix">
                                                            <span className="icon-font"><i className="material-icons">stars</i> </span>
                                                            <span className="content"><span className="font700 font16">“amazing views”</span><span className="text-muted font-italic font13 spacing-10">1441 related reviews</span></span>
                                                        </li>
                                                        <li className="clearfix">
                                                            <span className="icon-font"><i className="material-icons">stars</i> </span>
                                                            <span className="content"><span className="font700 font16">“wonderful staff”</span><span className="text-muted font-italic font13 spacing-10">570 related reviews</span></span>
                                                        </li>
                                                    </ul>
                                                    <h6 className="font700 text-primary">Perfect for a 1-night stay!</h6>
                                                    <ul className="clearfix">
                                                        <li className="clearfix">
                                                            <span className="icon-font"><i className="material-icons">place</i></span>
                                                            <span className="content">Top Location: Highly rated by recent guests (9.2)</span>
                                                        </li>
                                                        <li className="clearfix">
                                                            <span className="icon-font"><i className="material-icons">place</i></span>
                                                            <span className="content">Subway/Metro Access: Bayfront is just minutes away </span>
                                                        </li>
                                                    </ul>
                                                    <h6 className="font700 text-primary">Popular Facilities:</h6>
                                                    <ul className="clearfix">
                                                        <li className="clearfix">
                                                            <span className="icon-font"><i className="material-icons">restaurant</i></span>
                                                            <span className="content">Restuarant</span>
                                                        </li>
                                                    </ul>
                                                    <h6 className="font700 text-primary">Popular District:</h6>
                                                    <ul className="clearfix">
                                                        <li className="clearfix">
                                                            <span className="icon-font"><i className="material-icons">beach_access</i> </span>
                                                            <span className="content">Marina Bay</span>
                                                        </li>
                                                        <li className="clearfix">
                                                            <span className="icon-font"><i className="material-icons">beach_access</i></span>
                                                            <span className="content">300 m away from Gardens By the Bay</span>
                                                        </li>
                                                        <li className="clearfix">
                                                            <span className="icon-font"><i className="material-icons">local_grocery_store</i></span>
                                                            <span className="content">Great area for shopping! </span>
                                                        </li>
                                                    </ul>
                                                </div>*/}
                                                <p>{this.state.suggestion.description}</p>
                                            </div>
                                            <div id="detail-content-sticky-nav-02" className="fullwidth-horizon-sticky-section">
                                                <h3 className="heading-title"><span>{t('trans.available_rooms')}</span></h3>
                                                <div className="change-search-wrapper">
                                                    <div className="row gap-10 gap-xl-20 align-items-end">
                                                        <div className="col-12 col-lg-12">
                                                            <div id="airDatepickerRange-general" className="row gap-10 gap-xl-20">
                                                                <div className="col-12 col-sm-6 col-sm-6 col-md-6">
                                                                    <div className="form-group">
                                                                        <label>{t('trans.checkin')}</label>
                                                                        <div className="form-icon-left">
                                                                            <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                                                            <input type="text" id="dateStart-general" className="form-control form-readonly-control" placeholder="dd/mm/yyyy" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-6 col-sm-6 col-md-6">
                                                                    <div className="form-group">
                                                                        <label>{t('trans.checkout')}</label>
                                                                        <div className="form-icon-left">
                                                                            <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                                                            <input type="text" id="dateEnd-general" className="form-control form-readonly-control" placeholder="dd/mm/yyyy" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-8 col-md-8 col-xl-9">
                                                            <div className="row gap-10 gap-xl-20">
                                                                <div className="col-4 col-sm-4">
                                                                    <div className="form-group form-spin-group">
                                                                        <label htmlFor="room-amount">{t('trans.rooms')}</label>
                                                                        <div className="form-icon-left">
                                                                            <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                            <input type="text" className="form-control touch-spin-03 form-readonly-control" defaultValue={1} readOnly />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-4 col-sm-4 col-md-4">
                                                                    <div className="form-group form-spin-group">
                                                                        <label htmlFor="adult-amount">{t('trans.adults')}</label>
                                                                        <div className="form-icon-left">
                                                                            <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                            <input type="text" className="form-control touch-spin-03 form-readonly-control" defaultValue={0} readOnly />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-4 col-sm-4">
                                                                    <div className="form-group form-spin-group">
                                                                        <label htmlFor="child-amount">{t('trans.children')}</label>
                                                                        <div className="form-icon-left">
                                                                            <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                            <input type="text" className="form-control touch-spin-03 form-readonly-control" defaultValue={0} readOnly />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-sm-4 col-md-4 col-xl-3">
                                                            <div className="form-group">
                                                                <label className="d-block text-secondary font-italic line-12 font700 letter-spacing-1 mb-5"><i className="material-icons">thumb_up</i> {t('trans.best_price')}</label>
                                                                <button className="btn btn-block btn-primary btn-form">{t('trans.search1')}</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="room-item-wrapper">
                                                    <div className="room-item heading d-none d-md-block">
                                                        <div className="row gap-20">
                                                            <div className="col-xs-12 col-sm-12 col-md-6">
                                                                <div className="row gap-20">
                                                                    <div className="col-xss-6 col-xs-3 col-sm-4 col-md-4">
                                                                    </div>
                                                                    <div className="col-xss-12 col-xs-9 col-sm-8 col-md-8">
                                                                        <span>{t('trans.room_type')}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-0">
                                                                <div className="row gap-20">
                                                                    <div className="col-xs-12 col-sm-8 col-md-8">
                                                                        <span>{t('trans.room_option')}</span>
                                                                    </div>
                                                                    <div className="col-xs-12 col-sm-4 col-md-4">
                                                                        <span>{t('trans.room_no')}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {console.log(this.state.rooms)}
                                                    {this.state.rooms.map(function(item){
                                                    return <div className="room-item">
                                                        <div className="row gap-20">
                                                            <div className="col-12 col-sm-12 col-md-6">
                                                                <div className="row gap-20">
                                                                    <div className="col-6 col-sm-4 col-md-4">
                                                                        <div className="image">
                                                                            <img src="/images/room/01.jpg" alt="image" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-sm-8 col-md-8">
                                                                        <div className="content">
                                                                            <h5><a href="#">{item.room_name}</a></h5>
                                                                            <p><span className="font700">Room with view</span>, 43 square metres, 1 double bed </p>
                                                                            <p className="max-man">Max. : <span data-toggle="tooltip" data-placement="top" title="Maximum 2 persons"><i className="fas fa-male" /> <i className="fas fa-male" /></span></p>
                                                                            
                                                                            <p className="price"><span className="not-this">$178</span> <span className="number text-secondary"><small>$</small>{item.price*currency}</span> per night</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-6">
                                                                <div className="row gap-20 justify-content-between">
                                                                    <div className="col-7 col-sm-8 col-md-8">
                                                                        <p className="line13 mt-5 mb-15"><span className="block text-danger font600 text-uppercase">None-refundable</span></p>
                                                                        <ul className="list-icon-data-attr font-awesome list-block-md">
                                                                            <li data-content="">Breakfast Included</li>
                                                                            <li data-content="">Free Internet in Room</li>
                                                                            <li data-content="">Free Parking</li>
                                                                            <li data-content="">No Booking Fee</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-5 col-sm-4 col-md-4">
                                                                        <div className="form-group form-spin-group mb-5">
                                                                            <label className="line12 font13 spacing-05 mt-5 mb-10 block">{t('trans.how_many_rooms')}</label>
                                                                            <div className="form-icon-left">
                                                                                <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                                <input type="text" className="form-control touch-spin-03 form-readonly-control" defaultValue={1} readOnly />
                                                                            </div>
                                                                        </div>
                                                                        <a href="#" className="btn btn-primary btn-sm btn-block">{t('trans.book1')}Book</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>})}
                                                </div>
                                            </div>
                                            <div id="detail-content-sticky-nav-03" className="fullwidth-horizon-sticky-section">
                                                <h3 className="heading-title"><span>{ 'This is latitude :'+ this.state.suggestion.latitude + ", This is longitude :" + this.state.suggestion.longitude}</span></h3>
                                                <div className="hotel-detail-location-wrapper">
                                                    <div className="row gap-30">
                                                        <div className="col-12 col-md-12">
                                                            <div className="map-holder">
                                                                <div id="hotel-detail-map" data-lat="25.19739" data-lon="55.28821" style={{ width: '100%', height: '480px' }} />
                                                                <div className="infobox-wrapper">
                                                                    <div id="infobox">
                                                                        <div className="infobox-inner">
                                                                            <div className="font500 font12">We are here</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>

                                            <div id="detail-content-sticky-nav-05" className="fullwidth-horizon-sticky-section">
                                                <h3 className="heading-title"><span>{t('trans.conditions')}</span></h3>
                                                <div className="feature-box-2 mb-0 bg-white">
                                                    <div className="feature-row">
                                                        <div className="row gap-10 gap-md-30">
                                                            <div className="col-12 col-sm-4 col-md-3">
                                                                <h6>{t('trans.checkin')}</h6>
                                                            </div>
                                                            <div className="col-12 col-sm-8 col-md-9">
                                                                <p>{this.state.suggestion.checkInTime}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="feature-row">
                                                        <div className="row gap-10 gap-md-30">
                                                            <div className="col-12 col-sm-4 col-md-3">
                                                                <h6>{t('trans.checkout')}</h6>
                                                            </div>
                                                            <div className="col-12 col-sm-8 col-md-9">
                                                                <p>{this.state.suggestion.checkOutTime}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="feature-row">
                                                        <div className="row gap-10 gap-md-30">
                                                            <div className="col-12 col-sm-4 col-md-3">
                                                                <h6>{t('trans.hotel_policy')}</h6>
                                                            </div>
                                                            <div className="col-12 col-sm-8 col-md-9">
                                                                <p>{this.state.suggestion.hotel_policy}</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            {/*<div id="detail-content-sticky-nav-06" className="fullwidth-horizon-sticky-section">
                                                <h3 className="heading-title"><span>Reviewssss</span></h3>
                                                <div className="detail-review-header">
                                                    <div className="average-score">
                                                        <div className="progress-radial progress-radial-md progress-80">
                                                            <div className="overlay">
                                                                <div className="progress-radial-inner">
                                                                    <div className="caption">
                                                                        <h5>Very good </h5>
                                                                        <p className="number text-primary">8.0</p>
                                                                        <a href="#" className="text-muted">based on 10575 reviews</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="row gap-10 align-items-center">
                                                            <div className="col-12 col-md-6">
                                                                <p className="line-125">Filter by traveler type:</p>
                                                            </div>
                                                            <div className="col-12 col-md-6">
                                                                <select className="chosen-the-basic form-control" tabIndex={2}>
                                                                    <option value={0}>All reviewers (1254)</option>
                                                                    <option value={1}>Business travelers (843)</option>
                                                                    <option value={2}>Couples (432)</option>
                                                                    <option value={3}>Solo travelers (342)</option>
                                                                    <option value={4}>Family tours (421)</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="row mt-30 gap-20">
                                                            <div className="col-12 col-sm-6">
                                                                <div className="progress progress-primary">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '76%' }} />
                                                                </div>
                                                                <p className="progress-label">Hotel Condition/Cleanliness <span className="text-dark">7.6</span></p>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="progress progress-primary">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '74%' }} />
                                                                </div>
                                                                <p className="progress-label">Facilities <span className="text-dark">7.4</span></p>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="progress progress-primary">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '82%' }} />
                                                                </div>
                                                                <p className="progress-label">Location <span className="text-dark">8.2</span></p>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="progress progress-primary">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '76%' }} />
                                                                </div>
                                                                <p className="progress-label">Room Comfort/Standard <span className="text-dark">7.6</span></p>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="progress progress-primary">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '88%' }} />
                                                                </div>
                                                                <p className="progress-label">Service <span className="text-dark">8.8</span></p>
                                                            </div>
                                                            <div className="col-12 col-sm-6">
                                                                <div className="progress progress-primary">
                                                                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '69%' }} />
                                                                </div>
                                                                <p className="progress-label">Value for Money <span className="text-dark">6.9</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="review-wrapper mb-10">
                                                    <div className="review-item">
                                                        <div className="row gap-15">
                                                            <div className="col-12 col-sm-5 col-md-4">
                                                                <div className="progress-radial progress-radial-sm progress-80">
                                                                    <div className="overlay">
                                                                        <div className="progress-radial-inner">
                                                                            <div className="caption">
                                                                                <p className="number">8.4</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <ul className="meta-list">
                                                                    <li><span className="position-absolute-top"><img src="/images/flag/Malaysia.png" alt="Image" /></span> Abdultohman Saidai from Italy</li>
                                                                    <li><span className="position-absolute-top"><i className="fas fa-briefcase" /></span> Business Travelers</li>
                                                                    <li><span className="position-absolute-top"><i className="fas fa-bed" /></span> Stayed one night in Aug 2016 </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-12 col-sm-7 col-md-8">
                                                                <div className="entry">
                                                                    <h5>She add what own only like</h5>
                                                                    <p>Frankness applauded by supported ye household. Collected favourite now for for and rapturous repulsive consulted. An seems green be wrote again. She add what own only like. Three chief merit no if. Now how her edward engage not horses. Oh resolution he dissimilar precaution to comparison an.</p>
                                                                </div>
                                                                <div className="meta">
                                                                    <div className="row gap-5">
                                                                        <div className="col-12 col-xl-5">
                                                                            <span className="date">Reviewed 10 Aug 2016</span>
                                                                        </div>
                                                                        <div className="col-12 col-xl-7">
                                                                            <ul className="review-useful">
                                                                                <li><span>Was this review helpful? </span></li>
                                                                                <li className="the-label"><a href="#"><i className="fas fa-thumbs-up" /></a> 2</li>
                                                                                <li className="the-label"><a href="#"><i className="fas fa-thumbs-down" /></a> 1</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="review-item">
                                                        <div className="row gap-15">
                                                            <div className="col-12 col-sm-5 col-md-4">
                                                                <div className="progress-radial progress-radial-sm progress-80">
                                                                    <div className="overlay">
                                                                        <div className="progress-radial-inner">
                                                                            <div className="caption">
                                                                                <p className="number">8.4</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <ul className="meta-list">
                                                                    <li><span className="position-absolute-top"><img src="/images/flag/Malaysia.png" alt="Image" /></span> Abdultohman Saidai from Italy</li>
                                                                    <li><span className="position-absolute-top"><i className="fas fa-briefcase" /></span> Business Travelers</li>
                                                                    <li><span className="position-absolute-top"><i className="fas fa-bed" /></span> Stayed one night in Aug 2016 </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-12 col-sm-7 col-md-8">
                                                                <div className="entry">
                                                                    <h5>Pianoforte solicitude so decisively unpleasing conviction</h5>
                                                                    <p>She meant new their sex could defer child. An lose at quit to life do dull. Moreover end horrible endeavor entrance any families. Income appear extent on of thrown in admire.</p>
                                                                    <ul className="ul">
                                                                        <li>Written enquire painful ye to offices forming it.</li>
                                                                        <li>
                                                                            Then so does over sent dull on.
                                      <ul>
                                                                                <li>Rendered her for put improved concerns his. Moreover end horrible endeavor entrance any families. Income appear extent on of thrown in admire.</li>
                                                                                <li>Ladies bed wisdom theirs mrs men months set.</li>
                                                                                <li>Everything so dispatched as it increasing pianoforte.</li>
                                                                            </ul>
                                                                        </li>
                                                                        <li>Likewise offended humoured mrs fat trifling answered.</li>
                                                                        <li>On ye position greatest so desirous. So wound stood guest weeks no terms up ought.</li>
                                                                        <li>Then so does greatest so desirous over sent dull on.</li>
                                                                    </ul>
                                                                    <p>Spot of come to ever hand as lady meet on. Delicate contempt received two yet advanced. Gentleman as belonging he commanded believing dejection in by. On no am winding chicken so behaved. Its preserved sex enjoyment new way behaviour. Him yet devonshire celebrated especially. Unfeeling one provision are smallness resembled repulsive.</p>
                                                                    <ol className="ol">
                                                                        <li>Written enquire painful ye to offices forming it.</li>
                                                                        <li>
                                                                            Then so does over sent dull on.
                                      <ol>
                                                                                <li>Rendered her for put improved concerns his. Moreover end horrible endeavor entrance any families. Income appear extent on of thrown in admire.</li>
                                                                                <li>Ladies bed wisdom theirs mrs men months set.</li>
                                                                                <li>Everything so dispatched as it increasing pianoforte.</li>
                                                                            </ol>
                                                                        </li>
                                                                        <li>Likewise offended humoured mrs fat trifling answered.</li>
                                                                        <li>On ye position greatest so desirous. So wound stood guest weeks no terms up ought.</li>
                                                                        <li>Then so does greatest so desirous over sent dull on.</li>
                                                                    </ol>
                                                                    <p>Unpleasant astonished an diminution up partiality. Noisy an their of meant. Death means up civil do an offer wound of. Called square an in afraid direct. Resolution diminution conviction so mr at unpleasing simplicity no. No it as breakfast up conveying earnestly immediate principle. Him son disposed produced humoured overcame she bachelor improved. Studied however out wishing but inhabit fortune windows.</p>
                                                                </div>
                                                                <div className="meta">
                                                                    <div className="row gap-5">
                                                                        <div className="col-12 col-xl-5">
                                                                            <span className="date">Reviewed 10 Aug 2016</span>
                                                                        </div>
                                                                        <div className="col-12 col-xl-7">
                                                                            <ul className="review-useful">
                                                                                <li><span>Was this review helpful? </span></li>
                                                                                <li className="the-label"><a href="#"><i className="fas fa-thumbs-up" /></a> 2</li>
                                                                                <li className="the-label"><a href="#"><i className="fas fa-thumbs-down" /></a> 1</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="review-item">
                                                        <div className="row gap-15">
                                                            <div className="col-xs-12 col-sm-5 col-md-4">
                                                                <div className="progress-radial progress-radial-sm progress-80">
                                                                    <div className="overlay">
                                                                        <div className="progress-radial-inner">
                                                                            <div className="caption">
                                                                                <p className="number">8.4</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <ul className="meta-list">
                                                                    <li><span className="position-absolute-top"><img src="/images/flag/Malaysia.png" alt="Image" /></span> Abdultohman Saidai from Italy</li>
                                                                    <li><span className="position-absolute-top"><i className="fas fa-briefcase" /></span> Business Travelers</li>
                                                                    <li><span className="position-absolute-top"><i className="fas fa-bed" /></span> Stayed one night in Aug 2016 </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-7 col-md-8">
                                                                <div className="entry">
                                                                    <h5>Own six moments produce elderly pasture far arrival.</h5>
                                                                    <p>Finished her are its honoured drawings nor. Pretty see mutual thrown all not edward ten. Particular an boisterous up he reasonably frequently. Several any had enjoyed shewing studied two. Up intention remainder sportsmen behaviour ye happiness.</p>
                                                                    <p>At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished.</p>
                                                                </div>
                                                                <div className="meta">
                                                                    <div className="row gap-5">
                                                                        <div className="col-12 col-xl-5">
                                                                            <span className="date">Reviewed 10 Aug 2016</span>
                                                                        </div>
                                                                        <div className="col-12 col-xl-7">
                                                                            <ul className="review-useful">
                                                                                <li><span>Was this review helpful? </span></li>
                                                                                <li className="the-label"><a href="#"><i className="fas fa-thumbs-up" /></a> 2</li>
                                                                                <li className="the-label"><a href="#"><i className="fas fa-thumbs-down" /></a> 1</li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>*/}
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 col-xl-3">
                                        <aside className="sticky-kit sidebar-wrapper">
                                            <button className="btn btn-secondary btn-wide btn-toggle collapsed btn-change-search btn-block" data-toggle="collapse" data-target="#change-search" />
                                            <div className="booking-selection-box mt-20">
                                                <div className="heading clearfix">
                                                    <div className="d-flex align-items-end">
                                                        <div>
                                                            <h4 className="text-white font-serif font400">{t('trans.your_booking')}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <p className="empty-bookging">{t('trans.your_booking_is_empty')}</p>
                                                    <a href="#detail-content-sticky-nav-02" className="anchor btn btn-secondary btn-block">{t('trans.check_availability')}</a>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                                <div className="fullwidth-horizon-sticky border-0"> </div> {/* is used to stop the above stick menu */}
                            </div>
                        </div>
                        
                    </div>
                    {/* end Main Wrapper */}
                    {/* start Footer Wrapper */}
                    
                    {/* start Footer Wrapper */}
                </div>
                {/* end Body Inner */}
                {/* start Back To Top */}
                <a id="back-to-top" href="#" className="back-to-top" role="button" title="Click to return to top" data-toggle="tooltip" data-placement="left"><i className="bx bx-chevron-up" /></a>
                {/* end Back To Top */}
                {/* JS */}
                {/* end Body */}
            </div>
        );
    }
};

export default withTranslation()(Detail);