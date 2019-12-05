import * as React from 'react'

import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class Footer extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <footer className="footer-wrapper scrollspy-stopper">
                <div className="container">
                    <div className="row gap-40 gap-md-50">
                        <div className="col-12 col-lg-6">
                            <div className="col-inner">
                                <h4 className="footer-title">{t('trans.about_us')}</h4>
                                <p className="font-lg line-145">{t('trans.throwing_consider')} <a href="#">{t('trans.read_more')}</a></p>
                                <p className="footer-address mt-20">11/87, Santisuk Road, T. Sabarang, <br />A.Muang,Pattani 94000 <br /></p>
                                <span className="d-block footer-phone text-white"><i className="material-icons">{t('trans.phone')}</i> +66 74 665 855</span>
                                <a href="#">support@website.com</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="col-inner">
                                <div className="row gap-40 gap-md-20">
                                    <div className="col-12 col-md-5">
                                        <div className="col-inner mt-15-sm">
                                            <h5 className="footer-title">{t('trans.quick_menu')}</h5>
                                            <ul className="footer-menu">
                                                <li><a href="#">{t('trans.about_us')}</a></li>
                                                <li><a href="#">{t('trans.terms')}</a></li>
                                                <li><a href="#">{t('trans.privacy_policy')}</a></li>
                                                <li><a href="#">{t('trans.faq')}</a></li>
                                                <li><a href="#">{t('trans.press')}</a></li>
                                                <li><a href="#">{t('trans.contact')}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-7">
                                        <div className="col-inner mt-25-sm">
                                            <h5 className="footer-title">{t('trans.newsletter')}</h5>
                                            <p>{t('trans.subscribe_to_get')}</p>
                                            <form className="footer-newsletter">
                                                <div className="input-group">
                                                    <input type="email" className="form-control" placeholder="Email address" />
                                                    <div className="input-group-append">
                                                        <button className="btn btn-secondary" type="button">{t('trans.subscribe')}</button>
                                                    </div>
                                                </div>
                                            </form>
                                            <h5 className="footer-title">{t('trans.social')}</h5>
                                            <div className="footer-socials">
                                                <a href="#"><i className="fab fa-facebook" /></a>
                                                <a href="#"><i className="fab fa-twitter" /></a>
                                                <a href="#"><i className="fab fa-google-plus " /></a>
                                                <a href="#"><i className="fab fa-codepen" /></a>
                                                <a href="#"><i className="fab fa-behance" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-footer">
                    <div className="container">
                        <p className="footer-copy-right">© 2019 - {t('trans.my_company_limited')}</p>
                    </div>
                </div>
            </footer>)
    }
}
export default withTranslation()(Footer);