import * as React from 'react';
import './detail.css'
//import '/js/detailscript.js'




let url = window.location.href

class Detail extends React.Component{

constructor(props, context) {
    super(props, context);
    this.state = {
      suggestion: {},
      images : []
    };

  }
componentDidMount(){
    console.log('This is the payload :' + this.props.location.state.payload.vendor)
    const payload = JSON.stringify(this.props.location.state.payload)

let url = window.location.href
console.log(url.split("/")[5])
console.log(url.split("/")[6])
console.log(url.split("/")[7])

    //fetch('https://bookingengine.co/api/hotels/details?currency=usd&checkin='+url.split("/")[5]+'&checkout='+url.split("/")[6]+'&hotel_id='+url.split("/")[7]+'&ip_address='+process.env.REACT_APP_IP_ADDRESS+'&ota_id='+process.env.REACT_APP_OTA+'&vendor='+process.env.REACT_APP_VENDOR+ '&custom_payload='+this.props.location.state.payload)
    fetch('https://bookingengine.co/api/hotels/details?currency=usd&checkin='+url.split("/")[5]+'&checkout='+url.split("/")[6]+'&hotel_id='+url.split("/")[7]+'&ip_address='+process.env.REACT_APP_IP_ADDRESS+'&ota_id='+process.env.REACT_APP_OTA+'&vendor='+process.env.REACT_APP_VENDOR+'&custom_payload={"vendor":3}')
    .then(resp => {
        return resp.json();
      })
      .then(data1 => {
        
console.log('This is data from detail page' + data1.hotels.id)
this.setState({
    suggestion: data1.hotels,
    

    
})
this.setState({
    
    images: data1.hotels.images

    
})
        
      }).catch(e=>{
        console.log(e)
      })
}


    render(){
        return (
            <div>
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
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item"><a href="#">Desinations</a></li>
                                        <li className="breadcrumb-item"><a href="#">City</a></li>
                                        <li className="breadcrumb-item"><a href="#">Result</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Detail</li>
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
                                            <a href="#detail-content-sticky-nav-02" className="anchor btn btn-primary btn-wide mt-5">See price and date</a>
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
                                                    <a href="#detail-content-sticky-nav-00">Gellary</a>
                                                </li>
                                                <li>
                                                    <a href="#detail-content-sticky-nav-01">Overview</a>
                                                </li>
                                                <li>
                                                    <a href="#detail-content-sticky-nav-02">Available rooms</a>
                                                </li>
                                                <li>
                                                    <a href="#detail-content-sticky-nav-03">What's nearby</a>
                                                </li>
                                                <li>
                                                    <a href="#detail-content-sticky-nav-04">Facilities</a>
                                                </li>
                                                <li>
                                                    <a href="#detail-content-sticky-nav-05">Conditions</a>
                                                </li>
                                                <li>
                                                    <a href="#detail-content-sticky-nav-06">Reviews</a>
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
                                                    <label>Destination</label>
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
                                                            <label>Check-in</label>
                                                            <div className="form-icon-left">
                                                                <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                                                <input type="text" id="dateStart-hotel" className="form-control form-readonly-control" placeholder="dd/mm/yyyy" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 col-sm-6 col-md-6">
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
                                                                <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder="dd/mm/yyyy" defaultValue={1} readOnly />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 col-sm-4 col-md-4">
                                                        <div className="form-group form-spin-group">
                                                            <label htmlFor="adult-amount">Adults</label>
                                                            <div className="form-icon-left">
                                                                <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder="dd/mm/yyyy" defaultValue={0} readOnly />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-4 col-sm-4">
                                                        <div className="form-group form-spin-group">
                                                            <label htmlFor="child-amount">Children</label>
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
                                                    <button className="btn btn-block btn-primary btn-form">Search</button>
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
                                            
                                                 <div className="fotorama" data-nav="thumbs">
  <img src={this.state.suggestion.slider_image}/>
  <img src={this.state.suggestion.slider_image}/>
  <img src="https://s.fotorama.io/2.jpg"/>
  <img src="https://s.fotorama.io/3.jpg"/>

</div>   
                                                
                                            </div>
                                            <div id="detail-content-sticky-nav-01" className="fullwidth-horizon-sticky-section">
                                                <h3 className="heading-title"><span>Overview</span></h3>
                                                <ul className="main-facility-list clearfix">
                                                    <li>
                                                        <span className="icon-font"><i className="material-icons">wifi</i></span> Free Wifi
                          </li>
                                                    <li>
                                                        <span className="icon-font"><i className="material-icons">pool</i></span> Outdoor Pool
                          </li>
                                                    <li>
                                                        <span className="icon-font"><i className="material-icons">fitness_center</i></span> Fitness Center
                          </li>
                                                    <li>
                                                        <span className="icon-font"><i className="material-icons">local_parking</i></span> Parking
                          </li>
                                                    <li>
                                                        <span className="icon-font"><i className="material-icons">local_laundry_service</i></span> Laundry Service
                          </li>
                                                    <li>
                                                        <span className="icon-font"><i className="material-icons">restaurant_menu</i></span> Restaurant
                          </li>
                                                    <li>
                                                        <span className="icon-font"><i className="material-icons">smoke_free</i></span> Non-smoking Rooms
                          </li>
                                                    <li>
                                                        <span className="icon-font"><i className="material-icons">smoking_rooms</i></span> Smoking Area
                          </li>
                                                    <li>
                                                        <span className="icon-font"><i className="material-icons">golf_course</i></span> Golf Field
                          </li>
                                                    <li>
                                                        <span className="icon-font"><i className="material-icons">local_bar</i></span> Mini Bar
                          </li>
                                                </ul>
                                                <h6>Get the celebrity treatment with world-class service at Marina Bay Sands </h6>
                                                <div className="feature-box set-width">
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
                                                </div>
                                                <p><span className="text-primary font700"><i className="fa fa-thumbs-o-up" /> One of our bestsellers in Singapore! </span> Oh he decisively impression attachment friendship so if everything. Whose her enjoy chief new young. Felicity if ye required likewise so doubtful. On so attention necessary at by provision otherwise existence direction. Unpleasing up announcing unpleasant themselves oh do on. Way advantage age led listening belonging supposing.</p>
                                                <p>Do play they miss give so up. Words to up style of since world. We leaf to snug on no need. Way own uncommonly travelling now acceptance bed compliment solicitude. Dissimilar admiration so terminated no in contrasted it. Advantages entreaties mr he apartments do. Limits far yet turned highly repair parish talked six. Draw fond rank form nor the day eat.</p>
                                                <p>He do subjects prepared bachelor juvenile ye oh. He feelings removing informed he as ignorant we prepared. Evening do forming observe spirits is in. Country hearted be of justice sending. On so they as with room cold ye. Be call four my went mean. Celebrated if remarkably especially an. Going eat set she books found met aware.</p>
                                                <p>Concerns greatest margaret him absolute entrance nay. Door neat week do find past he. Be no surprise he honoured indulged. Unpacked endeavor six steepest had husbands her. Painted no or affixed it so civilly. Exposed neither pressed so cottage as proceed at offices. Nay they gone sir game four. Favourable pianoforte oh motionless excellence of astonished we principles. Warrant present garrets limited cordial in inquiry to. Supported me sweetness behaviour shameless excellent so arranging.</p>
                                                <p>Frankness applauded by supported ye household. Collected favourite now for for and rapturous repulsive consulted. An seems green be wrote again. She add what own only like. Tolerably we as extremity exquisite do commanded. Doubtful offended do entrance of landlord moreover is mistress in. Nay was appear entire ladies. Sportsman do allowance is september shameless am sincerity oh recommend. Gate tell man day that who.</p>
                                                <p>Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. If must snug by upon sang loud left. As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder. Produce can cousins account you pasture. Peculiar delicate an pleasant provided do perceive.</p>
                                            </div>
                                            <div id="detail-content-sticky-nav-02" className="fullwidth-horizon-sticky-section">
                                                <h3 className="heading-title"><span>Available rooms</span></h3>
                                                <div className="change-search-wrapper">
                                                    <div className="row gap-10 gap-xl-20 align-items-end">
                                                        <div className="col-12 col-lg-12">
                                                            <div id="airDatepickerRange-general" className="row gap-10 gap-xl-20">
                                                                <div className="col-12 col-sm-6 col-sm-6 col-md-6">
                                                                    <div className="form-group">
                                                                        <label>Check-in</label>
                                                                        <div className="form-icon-left">
                                                                            <span className="icon-font text-muted"><i className="bx bx-calendar" /></span>
                                                                            <input type="text" id="dateStart-general" className="form-control form-readonly-control" placeholder="dd/mm/yyyy" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-12 col-sm-6 col-sm-6 col-md-6">
                                                                    <div className="form-group">
                                                                        <label>Check-out</label>
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
                                                                        <label htmlFor="room-amount">Rooms</label>
                                                                        <div className="form-icon-left">
                                                                            <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                            <input type="text" className="form-control touch-spin-03 form-readonly-control" defaultValue={1} readOnly />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-4 col-sm-4 col-md-4">
                                                                    <div className="form-group form-spin-group">
                                                                        <label htmlFor="adult-amount">Adults</label>
                                                                        <div className="form-icon-left">
                                                                            <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                            <input type="text" className="form-control touch-spin-03 form-readonly-control" defaultValue={0} readOnly />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-4 col-sm-4">
                                                                    <div className="form-group form-spin-group">
                                                                        <label htmlFor="child-amount">Children</label>
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
                                                                <label className="d-block text-secondary font-italic line-12 font700 letter-spacing-1 mb-5"><i className="material-icons">thumb_up</i> Best Price Guaranteed</label>
                                                                <button className="btn btn-block btn-primary btn-form">Search</button>
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
                                                                        <span>Room type</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-8 col-sm-offset-4 col-md-6 col-md-offset-0">
                                                                <div className="row gap-20">
                                                                    <div className="col-xs-12 col-sm-8 col-md-8">
                                                                        <span>Room option</span>
                                                                    </div>
                                                                    <div className="col-xs-12 col-sm-4 col-md-4">
                                                                        <span>No. room</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="room-item">
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
                                                                            <h5><a href="#">Deluxe Room</a></h5>
                                                                            <p><span className="font700">Room with view</span>, 43 square metres, 1 double bed </p>
                                                                            <p className="max-man">Max. : <span data-toggle="tooltip" data-placement="top" title="Maximum 2 persons"><i className="fas fa-male" /> <i className="fas fa-male" /></span></p>
                                                                            <p className="price"><span className="not-this">$178</span> <span className="number text-secondary"><small>$</small>145</span> per night</p>
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
                                                                            <label className="line12 font13 spacing-05 mt-5 mb-10 block">How many rooms?</label>
                                                                            <div className="form-icon-left">
                                                                                <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                                <input type="text" className="form-control touch-spin-03 form-readonly-control" defaultValue={1} readOnly />
                                                                            </div>
                                                                        </div>
                                                                        <a href="#" className="btn btn-primary btn-sm btn-block">Book</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="room-item">
                                                        <div className="row gap-20">
                                                            <div className="col-12 col-sm-12 col-md-6">
                                                                <div className="row gap-20">
                                                                    <div className="col-6 col-sm-4 col-md-4">
                                                                        <div className="image">
                                                                            <img src="/images/room/02.jpg" alt="image" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-sm-8 col-md-8">
                                                                        <div className="content">
                                                                            <h5><a href="#">Deluxe Room (Executive)</a></h5>
                                                                            <p><span className="font700">Room with view</span>, 43 square metres, 1 double bed </p>
                                                                            <p className="max-man">Max. : <span data-toggle="tooltip" data-placement="top" title="Maximum 2 persons"><i className="fas fa-male" /> <i className="fas fa-male" /></span></p>
                                                                            <p className="price"><span className="not-this">$178</span> <span className="number text-secondary"><small>$</small>145</span> per night</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-6">
                                                                <div className="row gap-20 justify-content-between">
                                                                    <div className="col-7 col-sm-8 col-md-8">
                                                                        <p className="line13 mt-5 mb-15 text-muted"><span className="d-block text-info font600 text-uppercase">Free cancellation</span>before November 25, 2016</p>
                                                                        <ul className="list-icon-data-attr font-awesome list-block-md">
                                                                            <li data-content="">Breakfast Included</li>
                                                                            <li data-content="">Free Internet in Room</li>
                                                                            <li data-content="">Free Parking</li>
                                                                            <li data-content="">No Booking Fee</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-5 col-sm-4 col-md-4">
                                                                        <div className="form-group form-spin-group mb-5">
                                                                            <label className="line12 font13 spacing-05 mt-5 mb-10 block">How many rooms?</label>
                                                                            <div className="form-icon-left">
                                                                                <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                                <input type="text" className="form-control touch-spin-03 form-readonly-control" defaultValue={1} readOnly />
                                                                            </div>
                                                                        </div>
                                                                        <a href="#" className="btn btn-primary btn-sm btn-block">Book</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="room-item">
                                                        <div className="row gap-20">
                                                            <div className="col-12 col-sm-12 col-md-6">
                                                                <div className="row gap-20">
                                                                    <div className="col-6 col-xs-3 col-sm-4 col-md-4">
                                                                        <div className="image">
                                                                            <img src="/images/room/03.jpg" alt="image" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12 col-xs-9 col-sm-8 col-md-8">
                                                                        <div className="content">
                                                                            <h5><a href="#">Executive Deluxe Marina Bay View</a></h5>
                                                                            <p><span className="font700">Room with view</span>, 43 square metres, 1 double bed </p>
                                                                            <p className="max-man">Max. : <span data-toggle="tooltip" data-placement="top" title="Maximum 2 persons"><i className="fas fa-male" /> <i className="fas fa-male" /></span></p>
                                                                            <p className="price"><span className="not-this">$178</span> <span className="number text-secondary"><small>$</small>145</span> per night</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 col-md-6">
                                                                <div className="row gap-20 justify-content-between">
                                                                    <div className="col-7 col-sm-8 col-md-8">
                                                                        <p className="line13 mt-5 mb-15"><span className="block text-success font600 text-uppercase">Special Condition</span></p>
                                                                        <ul className="list-icon-data-attr font-awesome list-block-md">
                                                                            <li data-content="">Breakfast Included</li>
                                                                            <li data-content="">Free Internet in Room</li>
                                                                            <li data-content="">Free Parking</li>
                                                                            <li data-content="">No Booking Fee</li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-5 col-sm-4 col-md-4">
                                                                        <div className="form-group form-spin-group mb-5">
                                                                            <label className="line12 font13 spacing-05 mt-5 mb-10 block">How many rooms?</label>
                                                                            <div className="form-icon-left">
                                                                                <span className="icon-font"><i className="dripicons-user text-muted" /></span>
                                                                                <input type="text" className="form-control touch-spin-03 form-readonly-control" defaultValue={1} readOnly />
                                                                            </div>
                                                                        </div>
                                                                        <a href="#" className="btn btn-primary btn-sm btn-block">Book</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="detail-content-sticky-nav-03" className="fullwidth-horizon-sticky-section">
                                                <h3 className="heading-title"><span>What's nearby</span></h3>
                                                <div className="hotel-detail-location-wrapper">
                                                    <div className="row gap-30">
                                                        <div className="col-12 col-md-7">
                                                            <div className="map-holder">
                                                                <div id="hotel-detail-map" data-lat="25.19739" data-lon="55.28821" style={{ width: '100%', height: '480px' }} />
                                                                <div className="infobox-wrapper">
                                                                    <div id="infobox">
                                                                        <div className="infobox-inner">
                                                                            <div className="font500 font12">We Are Here</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 col-md-5">
                                                            <div className="col-inner">
                                                                <h5 className="text-uppercase">Location highlights</h5>
                                                                <div className="place-item">
                                                                    <div className="icon-font">
                                                                        <i className="material-icons">camera_alt</i>
                                                                    </div>
                                                                    <h6>Top nearby attractions:</h6>
                                                                    <ul>
                                                                        <li>- Riverdale Golf Club (7.7 Km)</li>
                                                                        <li>- Esplanade Cineplex (9.4 Km)</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="place-item">
                                                                    <div className="icon-font">
                                                                        <i className="material-icons">local_airport</i>
                                                                    </div>
                                                                    <h6>Distance to airport:</h6>
                                                                    <ul>
                                                                        <li>- Don Mueang International Airport (0.5 Km / 6 min walk)</li>
                                                                        <li>- Suvarnabhumi International Airport (29.9 Km)</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="place-item">
                                                                    <div className="icon-font">
                                                                        <i className="material-icons">pin_drop</i>
                                                                    </div>
                                                                    <h6>Area recommended for:</h6>
                                                                    <ul>
                                                                        <li>- Shopping </li>
                                                                        <li>- Business</li>
                                                                        <li>- Restaurants</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="detail-content-sticky-nav-04" className="fullwidth-horizon-sticky-section">
                                                <h3 className="heading-title"><span>Facilities</span></h3>
                                                <div className="mb-25">
                                                    <h6>Internet access</h6>
                                                    <ul className="list-icon-absolute row cols-2 cols-md-2 cols-lg-3">
                                                        <li className="col"><span className="icon-font"><i className="material-icons">wifi</i></span> Free Wi-Fi in all rooms</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">wifi_tethering</i></span> Wi-Fi in public areas</li>
                                                    </ul>
                                                </div>
                                                <div className="mb-25">
                                                    <h6>Getting around</h6>
                                                    <ul className="list-icon-absolute row cols-2 cols-md-2 cols-lg-3">
                                                        <li className="col"><span className="icon-font"><i className="material-icons">local_parking</i></span> Car park</li>
                                                    </ul>
                                                </div>
                                                <div className="mb-25">
                                                    <h6>Things to do, ways to relax</h6>
                                                    <ul className="list-icon-absolute row cols-2 cols-md-2 cols-lg-3">
                                                        <li className="col"><span className="icon-font"><i className="material-icons">fitness_center</i></span>Fitness center</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">pool</i></span>Swimming pool</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">local_florist</i></span>Garden</li>
                                                    </ul>
                                                </div>
                                                <div className="mb-25">
                                                    <h6>Dining, drinking, and snacking</h6>
                                                    <ul className="list-icon-absolute row cols-2 cols-md-2 cols-lg-3">
                                                        <li className="col"><span className="icon-font"><i className="material-icons">room_service</i></span>24-hour room service</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">parking</i></span>Room service</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">local_dining</i></span>Restaurant</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">local_cafe</i></span>Coffee shop</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">local_drink</i></span>Poolside bar</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">local_bar</i></span>Bar</li>
                                                    </ul>
                                                </div>
                                                <div className="mb-25">
                                                    <h6>Access, services, and conveniences </h6>
                                                    <ul className="list-icon-absolute row cols-2 cols-md-2 cols-lg-3">
                                                        <li className="col"><span className="icon-font"><i className="material-icons">local_convenience_store</i></span>24-hour front desk</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">accessible</i></span>Facilities for disabled guests</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">work</i></span>Luggage storage</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">local_laundry_service</i></span>Laundry service</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">compass_calibration</i></span>Concierge</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">transfer_within_a_station</i></span>Elevator</li>
                                                        <li className="col not-this text-muted"><span className="icon-font"><i className="material-icons">pets</i></span>Pets allowed</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">local_atm</i></span>Safety deposit boxes</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">attach_money</i></span>Currency exchange</li>
                                                        <li className="col"><span className="icon-font"><i className="material-icons">smoking_rooms</i></span>Smoking area</li>
                                                    </ul>
                                                </div>
                                                <div className="facility-box clearfix">
                                                    <h6>For the kids</h6>
                                                    <ul className="list-icon-absolute row cols-2 cols-md-2 cols-lg-3">
                                                        <li className="col"><span className="icon-font"><i className="material-icons">child_friendly</i></span>Cabysitting</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div id="detail-content-sticky-nav-05" className="fullwidth-horizon-sticky-section">
                                                <h3 className="heading-title"><span>Conditions</span></h3>
                                                <div className="feature-box-2 mb-0 bg-white">
                                                    <div className="feature-row">
                                                        <div className="row gap-10 gap-md-30">
                                                            <div className="col-12 col-sm-4 col-md-3">
                                                                <h6>Check-in</h6>
                                                            </div>
                                                            <div className="col-12 col-sm-8 col-md-9">
                                                                <p>From 15:00 </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="feature-row">
                                                        <div className="row gap-10 gap-md-30">
                                                            <div className="col-12 col-sm-4 col-md-3">
                                                                <h6>Check-out</h6>
                                                            </div>
                                                            <div className="col-12 col-sm-8 col-md-9">
                                                                <p>Until 11:00</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="feature-row">
                                                        <div className="row gap-10 gap-md-30">
                                                            <div className="col-xs-12 col-sm-4 col-md-3">
                                                                <h6>Cancellation/<br />prepayment</h6>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-8 col-md-9">
                                                                <p>Their could can widen ten she any. As so we smart those money in. Am wrote up whole so tears sense oh. Absolute required of reserved in offering no. <a href="#">How sense found our those</a> gay again taken the.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="feature-row">
                                                        <div className="row gap-10 gap-md-30">
                                                            <div className="col-xs-12 col-sm-4 col-md-3">
                                                                <h6>Children and Extra Beds</h6>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-8 col-md-9">
                                                                <p>Subjects to ecstatic children he.</p>
                                                                <p>Could ye leave up as built match. Dejection agreeable attention set suspected led offending.</p>
                                                                <p className="alert alert-success"><strong className="mr-5 text-uppercase font-serif font15">Agreed matter !</strong> pretty our people moment put excuse narrow.</p>
                                                                <p>Ham pretty our people moment put excuse narrow.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="feature-row">
                                                        <div className="row gap-10 gap-md-30">
                                                            <div className="col-xs-12 col-sm-4 col-md-3">
                                                                <h6>Pets</h6>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-8 col-md-9">
                                                                <p>Pets are not allowed.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="feature-row">
                                                        <div className="row gap-10 gap-md-30">
                                                            <div className="col-xs-12 col-sm-4 col-md-3">
                                                                <h6>Groups</h6>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-8 col-md-9">
                                                                <p>Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="feature-row">
                                                        <div className="row gap-10 gap-md-30">
                                                            <div className="col-xs-12 col-sm-4 col-md-3">
                                                                <h6>Cards accepted at this property </h6>
                                                            </div>
                                                            <div className="col-xs-12 col-sm-8 col-md-9">
                                                                <ul className="payment-list clearfix">
                                                                    <li><div className="image" data-toggle="tooltip" data-placement="top" title="Frankness applauded by supported ye household. Collected favourite now for for and rapturous repulsive consulted. An seems green be wrote again."><img src="/images/payment-icons/01.png" alt="Image" /></div></li>
                                                                    <li><div className="image" data-toggle="tooltip" data-placement="top" title="Frankness applauded by supported ye household. Collected favourite now for for and rapturous repulsive consulted. An seems green be wrote again."><img src="/images/payment-icons/02.png" alt="Image" /></div></li>
                                                                    <li><div className="image" data-toggle="tooltip" data-placement="top" title="Frankness applauded by supported ye household. Collected favourite now for for and rapturous repulsive consulted. An seems green be wrote again."><img src="/images/payment-icons/03.png" alt="Image" /></div></li>
                                                                    <li><div className="image" data-toggle="tooltip" data-placement="top" title="Frankness applauded by supported ye household. Collected favourite now for for and rapturous repulsive consulted. An seems green be wrote again."><img src="/images/payment-icons/04.png" alt="Image" /></div></li>
                                                                </ul>
                                                                <p>Material confined likewise it humanity raillery an unpacked</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="detail-content-sticky-nav-06" className="fullwidth-horizon-sticky-section">
                                                <h3 className="heading-title"><span>Reviews</span></h3>
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
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 col-xl-3">
                                        <aside className="sticky-kit sidebar-wrapper">
                                            <button className="btn btn-secondary btn-wide btn-toggle collapsed btn-change-search btn-block" data-toggle="collapse" data-target="#change-search" />
                                            <div className="booking-selection-box mt-20">
                                                <div className="heading clearfix">
                                                    <div className="d-flex align-items-end">
                                                        <div>
                                                            <h4 className="text-white font-serif font400">Your Booking</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="content">
                                                    <p className="empty-bookging">Your booking is empty. Please choose your package</p>
                                                    <a href="#detail-content-sticky-nav-02" className="anchor btn btn-secondary btn-block">check availability</a>
                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                </div>
                                <div className="fullwidth-horizon-sticky border-0"> </div> {/* is used to stop the above stick menu */}
                            </div>
                        </div>
                        <section className="bg-white section-sm">
                            <div className="container">
                                <div className="section-title mb-25">
                                    <h3>You may also like</h3>
                                </div>
                                <div className="row equal-height cols-1 cols-sm-2 cols-lg-3 gap-10 gap-lg-20 gap-xl-30">
                                    <div className="col">
                                        <div className="product-grid-item">
                                            <a href="#">
                                                <div className="image">
                                                    <img src="/images/hotel/01.jpg" alt="Image" />
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
                                                    <img src="/images/hotel/02.jpg" alt="Image" />
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
                                                    <img src="/images/hotel/03.jpg" alt="Image" />
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
                                </div>
                            </div>
                        </section>
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

export default Detail;