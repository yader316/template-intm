import 'assets/scss/footer.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faChevronRight,
    faMapMarkedAlt,
    faPhoneAlt,
    faCalendar,
    faClock,
    faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';


function FooterContent() {
    return (
        <div className='footerContent'>
            <div className="container">
                <div className='row'>
                    <div className='col-sm-12 col-md-4 d-flex justify-content-center align-items-center'>
                        <h1>logo</h1>
                    </div>
                    <div className='col-sm-12 col-md-3'>
                        <h4>About</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className='col-sm-12 col-md-2'>
                        <h4>Navigation</h4>
                        <div className='d-flex flex-column-reverse'>
                            <a className='footerContent__links' href='/contact'>
                                <FontAwesomeIcon icon={faChevronRight} className='me-2' />
                                <span>Contact</span>
                            </a>
                            <a className='footerContent__links' href='/gallery'>
                                <FontAwesomeIcon icon={faChevronRight} className='me-2' />
                                <span>Gallery</span>
                            </a>
                            <a className='footerContent__links' href='/services'>
                                <FontAwesomeIcon icon={faChevronRight} className='me-2' />
                                <span>Services</span>
                            </a>
                            <a className='footerContent__links' href='/about'>
                                <FontAwesomeIcon icon={faChevronRight} className='me-2' />
                                <span>About</span>
                            </a>
                            <a className='footerContent__links' href='/'>
                                <FontAwesomeIcon icon={faChevronRight} className='me-2' />
                                <span>Home</span>
                            </a>
                        </div>
                    </div>
                    <div className='col-sm-12 col-md-3'>
                        <h4>Contact</h4>
                        <div className='d-flex flex-column'>
                            <a className='footerContent__links' href='#map'>
                                <FontAwesomeIcon icon={faMapMarkedAlt} className='me-2' />
                                <span>Location</span>
                            </a>
                            <a className='footerContent__links' href='tel:+1111-222-3333'>
                                <FontAwesomeIcon icon={faPhoneAlt} className='me-2' />
                                <span>111-222-3333</span>
                            </a>
                            <a className='footerContent__links' href=' '>
                                <FontAwesomeIcon icon={faCalendar} className='me-2' />
                                <span>Monday - Sunday</span>
                            </a>
                            <a className='footerContent__links' href=' '>
                                <FontAwesomeIcon icon={faClock} className='me-2' />
                                <span>7:00 AM - 8:00PM</span>
                            </a>
                            <a className='footerContent__links' href=' '>
                                <FontAwesomeIcon icon={faMoneyBillWave} className='me-2' />
                                <span>We Accept Cash & Checks</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FooterContent;