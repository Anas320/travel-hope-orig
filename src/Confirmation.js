import * as React from 'react';

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class Confirmation extends React.Component {
    render() {
         const { t } = this.props;
        return (
            <div>


                
        {/* start Body */}
                {/* start Body Inner */}
                <div className="body-inner">

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
                                        <li className="breadcrumb-item"><a href="#">{t('trans.detail')}</a></li>
                                        <li className="breadcrumb-item"><a href="#">{t('trans.payment')}</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">{t('trans.confirmation')}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                        <div className="page-wrapper page-confirmation bg-light">
                            <div className="container">
                                <div className="success-box">
                                    <div className="icon">
                                        <span><i className="ri ri-check-square" /></span>
                                    </div>
                                    <div className="content">
                                         <h4>{t('trans.thanks')}</h4>
                                        <p>Your confirmation number is #TH58474</p>
                                        <a href="#" className="btn btn-dark btn-wide">{t('print_details')}</a>
                                    </div>
                                </div>
                                <div className="row gap-30 equal-height">
                                    <div className="col-12 col-lg-4 order-lg-last">
                                        <aside className="sidebar-wrapper pt-30 pb-30 bg-white-shadow">
                                            <h3 className="heading-title"><span>{t('trans.summary')}</span></h3>
                                            <div className="product-small-item no-image shadow-none">
                                                <div className="content">
                                                    <div className="content-body">
                                                        <div className="rating-item rating-sm mb-7">
                                                            <div className="rating-icons">
                                                                <input type="hidden" className="rating" data-filled="rating-icon ri-star rating-rated" data-empty="rating-icon ri-star-empty" data-fractions={2} data-readonly defaultValue="4.5" />
                                                            </div>
                                                        </div>
                                                        <h6>Marina Bay Sands Hotel &amp; resort</h6>
                                                        <span className="meta text-muted"><i className="ion-location text-info" /> Katong, Singapore</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr className="mb-30 mt-30" />
                                            <ul className="confirmation-list">
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.room_type')}:</span>
                                                    <span>Standard</span>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.price_per_room')}:</span>
                                                    <span>$214</span>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.checkin')}:</span>
                                                    <span>Jan 5, 2018</span>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.checkout')}:</span>
                                                    <span>Jan 6, 2018</span>
                                                </li>
                                            </ul>
                                            <div className="mb-40" />
                                            <h3 className="heading-title"><span>{t('trans.charge')}</span></h3>
                                            <ul className="confirmation-list">
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.time')}:</span>
                                                    <span>2 nights</span>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.guest')}(2):</span>
                                                    <span>2 {t('trans.adults')}, 1 {t('trans.children')}</span>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.vat')}:</span>
                                                    <span>7%</span>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.fee')}:</span>
                                                    <span>{t('trans.included')}Included</span>
                                                </li>
                                                <li className="clearfix total">
                                                    <span className="font-weight-bold">{t('trans.total')}</span>
                                                    <span className="text-main text-secondary">$2,526.36</span>
                                                </li>
                                            </ul>
                                        </aside>
                                    </div>
                                    <div className="col-12 col-lg-8">
                                        <div className="content-wrapper pt-30 pb-30 bg-white-shadow">
                                            <h3 className="heading-title"><span>{t('trans.traveller_information')}</span></h3>
                                            <ul className="confirmation-list">
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.booking_number')}:</span>
                                                    <span>#TH857114</span>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.first_name')}:</span>
                                                    <span>Anthony</span>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.last_name')}:</span>
                                                    <span>Jackson</span>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.email')}:</span>
                                                    <span>mycontact@gmail.com</span>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.address')}:</span>
                                                    <span>40 Ramkhamheng Road, Huamark</span>
                                                </li><li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.district')}:</span>
                                                    <span>Bangkapi</span>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.province')}:</span>
                                                    <span>Bangkok</span>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.country')}:</span>
                                                    <span>Thailand</span>
                                                </li>
                                                <li className="clearfix">
                                                    <span className="font-weight-bold">{t('trans.zipcode')}:</span>
                                                    <span>10250</span>
                                                </li>
                                            </ul>
                                            <div className="mb-40" />
                                            <h3 className="heading-title"><span>{t('trans.payment')}</span></h3>
                                            <div className="clear" />
                                            <p>{t('trans.up_branch_to_easily')}</p>
                                            <p className="text-uppercase text-secondary font600">{t('trans.payment_is_made_by_credit_card')}</p>
                                            <div className="clear mb-20" />
                                            <h3 className="heading-title"><span>{t('trans.other_information')}</span></h3>
                                            <div className="clear" />
                                            <p>{t('trans.up_branch_to_easily')}</p>
                                            <p className="text-uppercase text-secondary font600">{t('trans.year_kept_on')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row shrink-auto-md gap-30 mt-40">
                                    <div className="col-12 col-shrink">
                                        <div className="featured-contact-01">
                                            <h6>{t('trans.need_help')}</h6>
                                            <span className="phone-number"><i className="material-icons">{t('trans.phone')}</i> 1985 5524 145</span>
                                            {t('trans.its_free_to_call')}
                    </div>
                                    </div>
                                    <div className="col-12 col-auto">
                                        <h6 className="text-uppercase letter-spacing-2 line-1 font500"><span>Why Book With Travel Material</span></h6>
                                        <ul className="list-icon-data-attr font-ionicons">
                                            <li data-content="">{t('trans.excited_him_now_natural')}</li>
                                            <li data-content="">{t('trans.farther_so_friend_is')}</li>
                                            <li data-content="">{t('trans.procured_is_material')}</li>
                                        </ul>
                                    </div>
                                </div>
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
        )
    }
}

export default withTranslation()(Confirmation);