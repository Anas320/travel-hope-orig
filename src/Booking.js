import * as React from 'react';

class Booking extends React.Component{

	render(){
		return(

      <div>
        
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
                    <li className="breadcrumb-item"><a href="#">Detail</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Payment</li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="page-wrapper page-payment bg-light">
              <div className="container">
                <div className="row gap-30">
                  <div className="col-12 col-lg-4 order-lg-last">
                    <aside className="sticky-kit sidebar-wrapper">
                      <a href="#" className="product-small-item">
                        <div className="image">
                          <img src="images/hotel/06.jpg" alt="image" />
                        </div>
                        <div className="content">
                          <div className="content-body">
                            <div className="rating-item rating-sm rating-inline mb-7">
                              <div className="rating-icons">
                                <input type="hidden" className="rating" data-filled="rating-icon ri-star rating-rated" data-empty="rating-icon ri-star-empty" data-fractions={2} data-readonly defaultValue="4.5" />
                              </div>
                              <p className="rating-text text-muted font-10">26 reviews</p>
                            </div>
                            <h6>Marina Bay Sands Hotel &amp; resort</h6>
                            <span className="meta text-muted"><i className="ion-location text-info" /> Katong, Singapore</span>
                          </div>
                          <div className="price">
                            from <span className="text-secondary font700">$895</span> /night
                          </div>
                        </div>
                      </a>
                      <div className="clear" />
                      <div className="booking-selection-box">
                        <div className="content">
                          <h5 className="font-serif font400">Booking 3 nights</h5>
                          <ul className="booking-amount-list clearfix mb-20">
                            <li>
                              23-11-2019<span className="font700">Mon</span>
                            </li>
                            <li className="text-right">
                              26-11-2019<span className="font700">Wed</span>
                            </li>
                          </ul>
                          <h5 className="font-serif font400">Rooms</h5>
                          <div className="hotel-room-sm-item mb-30">
                            <div className="the-room-item">
                              <h6>Deluxe Room</h6>
                              <div className="clearfix">
                                <span className="amount"> 2 nights x 1</span>
                                <span className="price">$178</span>
                              </div>
                            </div>
                            <div className="the-room-item">
                              <h6>Deluxe Room (Executive)</h6>
                              <div className="clearfix">
                                <span className="amount"> 2 nights x 1</span>
                                <span className="price">$178</span>
                              </div>
                            </div>
                          </div>
                          <h5 className="font-serif font400">Price</h5>
                          <ul className="summary-price-list">
                            <li>3 night-stay <span className="absolute-right">$328</span></li>
                            <li>taxes and fees <span className="absolute-right">$26.36</span></li>
                            <li className="total">Total <span className="text-main absolute-right">$26.36</span></li>
                          </ul>
                        </div>
                      </div>
                    </aside>
                  </div>
                  <div className="col-12 col-lg-8">
                    <div className="content-wrapper">
                      <div className="success-box">
                        <div className="icon">
                          <span><i className="ri ri-check-square" /></span>
                        </div>
                        <div className="content">
                          <h4>Great choice! You’re just 1 minute away from booking. </h4>
                          <p>Fill in your details below to complete the booking. The host will then have 24 hours to accept your booking request. Once your booking is accepted, we will send you a confirmation email with the host’s contact details and the exact address of the property. </p>
                        </div>
                      </div>
                      <div className="alert alert-warning pt-10 pb-10 mb-30" role="alert"><i className="fas fa-info-circle mr-5" />Returning customer? <a href="#" className="letter-spacing-0">Click here to login</a></div>
                      <form className="payment-form-wrapper">
                        <h3 className="heading-title"><span>Billing Information</span></h3>
                        <p className="post-heading">Two before narrow not relied how except moment myself.</p>
                        <div className="bg-white-shadow pt-25 ph-30">
                          <div className="row gap-20 mb-0">
                            <div className="col-12 col-sm-6">
                              <div className="form-group">
                                <label>First name <span className="font12 text-danger">*</span></label>
                                <input type="text" className="form-control form-bg-light" />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="form-group">
                                <label>Last name <span className="font12 text-danger">*</span></label>
                                <input type="text" className="form-control form-bg-light" />
                              </div>
                            </div>
                            <div className="col-12 col-sm-12">
                              <div className="form-group">
                                <label>Company name</label>
                                <input type="text" className="form-control form-bg-light" />
                              </div>
                            </div>
                            <div className="col-12 col-sm-12">
                              <div className="form-group">
                                <label>Street <span className="font12 text-danger">*</span></label>
                                <input type="text" className="form-control form-bg-light" />
                                <input type="text" className="form-control form-bg-light mt-5" />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="form-group">
                                <label>City <span className="font12 text-danger">*</span></label>
                                <input type="text" className="form-control form-bg-light" />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="form-group">
                                <label>State <span className="font12 text-danger">*</span></label>
                                <input type="text" className="form-control form-bg-light" />
                              </div>
                            </div>
                            <div className="col-12 col-sm-5">
                              <div className="form-group">
                                <label>Zip code <span className="font12 text-danger">*</span></label>
                                <input type="text" className="form-control form-bg-light" />
                              </div>
                            </div>
                            <div className="col-12 col-sm-7">
                              <div className="form-group chosen-bg-light">
                                <label>Country <span className="font12 text-danger">*</span></label>
                                <select data-placeholder="Country" className="chosen-the-basic form-control" tabIndex={2}>
                                  <option value />
                                  <option value={0}>Thailand</option>
                                  <option value={1}>Malaysia</option>
                                  <option value={2}>Indonesia</option>
                                  <option value={3}>Japan</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="form-group">
                                <label>Phone <span className="font12 text-danger">*</span></label>
                                <input type="text" className="form-control form-bg-light" />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="form-group">
                                <label>Email <span className="font12 text-danger">*</span></label>
                                <input type="text" className="form-control form-bg-light" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-20" />
                        <div className="create-account">
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="createAccountCheckBox" />
                            <label className="custom-control-label" htmlFor="createAccountCheckBox">Create an account?</label>
                            <div className="form-create-show bg-box-border-primary pt-25 ph-30 mt-15">
                              <div className="row gap-20 mb-0">
                                <div className="col-12 col-sm-12 col-md-4">
                                  <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4">
                                  <div className="form-group">
                                    <label>Password</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-4">
                                  <div className="form-group">
                                    <label>Confirm password</label>
                                    <input type="text" className="form-control" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-40" />
                        <h3 className="heading-title"><span>Rooms &amp; Guests</span></h3>
                        <p className="post-heading">Dinner abroad am depart ye turned hearts as me wished.</p>
                        <div className="bg-white-shadow pt-25 ph-30">
                          <h6>Room #1</h6>
                          <div className="row gap-20 mb-0">
                            <div className="col-12 col-sm-6">
                              <div className="form-group chosen-bg-light">
                                <label>Bed Type <span className="font12 text-danger">*</span></label>
                                <select data-placeholder="Bed Type" className="chosen-the-basic form-control" tabIndex={2}>
                                  <option value />
                                  <option value={1}>Options 1</option>
                                  <option value={2}>Options 2</option>
                                  <option value={3}>Options 3</option>
                                  <option value={4}>Options 4</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="form-group chosen-bg-light">
                                <label>Smoking Refernce <span className="font12 text-danger">*</span></label>
                                <select data-placeholder="Smoking Refernce" className="chosen-the-basic form-control" tabIndex={2}>
                                  <option value />
                                  <option value={1}>Options 1</option>
                                  <option value={2}>Options 2</option>
                                  <option value={3}>Options 3</option>
                                  <option value={4}>Options 4</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <label>First Name(Person #1)</label>
                                <input type="text" className="form-control form-bg-light" />
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="form-group">
                                <label>Last Name(Person #1)</label>
                                <input type="text" className="form-control form-bg-light" />
                              </div>
                            </div>
                          </div>
                          <hr className="mt-20 mb-30" />
                          <h6>Room #2</h6>
                          <div className="row gap-20 mb-0">
                            <div className="col-12 col-sm-6">
                              <div className="form-group chosen-bg-light">
                                <label>Bed Type <span className="font12 text-danger">*</span></label>
                                <select data-placeholder="Bed Type" className="chosen-the-basic form-control" tabIndex={2}>
                                  <option value />
                                  <option value={1}>Options 1</option>
                                  <option value={2}>Options 2</option>
                                  <option value={3}>Options 3</option>
                                  <option value={4}>Options 4</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="form-group chosen-bg-light">
                                <label>Smoking Refernce <span className="font12 text-danger">*</span></label>
                                <select data-placeholder="Smoking Refernce" className="chosen-the-basic form-control" tabIndex={2}>
                                  <option value />
                                  <option value={1}>Options 1</option>
                                  <option value={2}>Options 2</option>
                                  <option value={3}>Options 3</option>
                                  <option value={4}>Options 4</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="form-group">
                                <label>First Name(Person #1)</label>
                                <input type="text" className="form-control form-bg-light" />
                              </div>
                            </div>
                            <div className="col-12 col-sm-6">
                              <div className="form-group">
                                <label>Last Name(Person #1)</label>
                                <input type="text" className="form-control form-bg-light" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-40" />
                        <h3 className="heading-title"><span>Payment</span></h3>
                        <p className="post-heading">Allow miles wound place the leave had.</p>
                        <div className="bg-white-shadow pt-25 pb-30 ph-30">
                          <h6>Do you have a coupon?</h6>
                          <div className="row">
                            <div className="col-12 col-sm-9 col-md-7">
                              <div className="input-group">
                                <input type="email" className="form-control form-bg-light" placeholder="Email address" />
                                <div className="input-group-append">
                                  <button className="btn btn-secondary" type="button">Apply code</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="clear mb-20" />
                          <h6>Please select your payment method</h6>
                          <div className="payment-option-box">
                            <div className="payment-option-item">
                              <div className="custom-control custom-radio">
                                <input type="radio" id="paymentOptionCreditBar" name="paymentOption" className="custom-control-input" defaultChecked />
                                <label className="custom-control-label" htmlFor="paymentOptionCreditBar">Credir Card</label>
                                <div className="payment-desc">
                                  <div className="card-form">
                                    <div className="row gap-20 mb-0">
                                      <div className="col-12 col-sm-12">
                                        <div className="form-group">
                                          <label className="block">Card number <span className="font-italic float-right">visa</span></label>
                                          <div className="input-group border  bg-change-focus-addclass">
                                            <input type="text" className="form-control form-bg-light pr-0" placeholder="xxxx-xxxx-xxxx-xxxx" />
                                            <div className="input-group-append">
                                              <div className="input-group-text form-bg-light"><i className="fas fa-lock text-muted" /></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-12 col-md-12">
                                        <div className="form-group">
                                          <label className="block">Name on card</label>
                                          <input type="text" className="form-control form-bg-light" placeholder="Name on card" />
                                        </div>
                                      </div>
                                      <div className="col-12 col-sm-8 col-md-8">
                                        <div className="form-group chosen-bg-light">
                                          <label className="block">Expire</label>
                                          <div className="row gap-5 mb-0">
                                            <div className="col-6 col-sm-6">
                                              <select data-placeholder="Please select" className="chosen-the-basic form-control" tabIndex={2}>
                                                <option />
                                                <option value={1}>Options 1</option>
                                                <option value={2}>Options 2</option>
                                                <option value={3}>Options 3</option>
                                                <option value={4}>Options 4</option>
                                              </select>
                                            </div>
                                            <div className="col-6 col-sm-6">
                                              <select data-placeholder="Please select" className="chosen-the-basic form-control" tabIndex={2}>
                                                <option />
                                                <option value="year2020">2020</option>
                                                <option value="year2021">2021</option>
                                                <option value="year2022">2022</option>
                                                <option value="year2023">2023</option>
                                                <option value="year2024">2024</option>
                                                <option value="year2025">2025</option>
                                                <option value="year2026">2026</option>
                                                <option value="year2027">2027</option>
                                                <option value="year2028">2028</option>
                                                <option value="year2029">2029</option>
                                                <option value="year2030">2030</option>
                                                <option value="year2031">2031</option>
                                              </select>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col-6 col-sm-4 col-md-4">
                                        <div className="form-group">
                                          <label className="block">CCV</label>
                                          <div className="input-group border bg-change-focus-addclass">
                                            <input type="text" className="form-control form-bg-light pr-0 " placeholder="xxx" />
                                            <div className="input-group-append">
                                              <div className="input-group-text form-bg-light"><i className="fas fa-info-circle text-muted" data-toggle="tooltip" data-placement="top" title="Tooltip on top" /></div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="payment-option-item">
                              <div className="custom-control custom-radio">
                                <input type="radio" id="paymentOptionPaypal" name="paymentOption" className="custom-control-input" />
                                <label className="custom-control-label" htmlFor="paymentOptionPaypal">Paypal</label>
                                <div className="payment-desc">
                                  <p>Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account.</p>
                                  <a href="#" className="btn btn-primary">Proceed to paypal</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-40" />
                        <div className="custom-control custom-checkbox">
                          <input type="checkbox" className="custom-control-input" id="acceptTerm" />
                          <label className="custom-control-label" htmlFor="acceptTerm">Two before narrow not relied how except moment myself. Dejection assurance mrs led certainly. So gate at no only none open. <a href="#">Betrayed at properly</a> it of graceful on. <a href="#">Dinner abroad</a> am depart ye turned hearts as me wished.</label>
                        </div>
                        <a href="#" className="btn btn-primary mt-20">Book now <i className="fa fa-long-arrow-right" /></a>
                      </form>
                      <div className="row shrink-auto-md gap-30 mt-40">
                        <div className="col-12 col-shrink">
                          <div className="featured-contact-01">
                            <h6>Need help? Call us on</h6>
                            <span className="phone-number"><i className="material-icons">phone</i> 1985 5524 145</span>
                            It's free to call from anywhere
                          </div>
                        </div>
                        <div className="col-12 col-auto">
                          <h6 className="text-uppercase letter-spacing-2 line-1 font500"><span>Why Book With Travel Material</span></h6>
                          <ul className="list-icon-data-attr font-ionicons">
                            <li data-content="">Excited him now natural saw passage age explain.</li>
                            <li data-content="">Farther so friends is detract do private.</li>
                            <li data-content="">Procured is material his offering humanity laughing moderate can.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
      </div>
    );
  }
}

export default Booking;
			