import React from 'react';
import logo from '../../Assets/img/logo.png';

function SearchFlight() {
  return (
    <section className="banner" id="top">
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <div className="left-side">
                    <div className="logo">
                        {/* <img src={logo} alt="Flight Template"/> */}
                        <h1 style={{zIndex:'9999',marginTop:'0px',color:'white',fontWeight:'700'}}>LOGO</h1>
                    </div>
                    <div className="tabs-content">
                        <h4>Choose Your Direction:</h4>
                        <ul className="social-links">
                            <li><a href="http://facebook.com">Find us on <em>Facebook</em><i className="fa fa-facebook"></i></a></li>
                            <li><a href="http://youtube.com">Our <em>YouTube</em> Channel<i className="fa fa-youtube"></i></a></li>
                            <li><a href="http://instagram.com">Follow our <em>instagram</em><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                    <div className="page-direction-button">
                        <a><i className="fa fa-phone"></i>Contact Us Now</a>
                    </div>
                </div>
            </div>
            <div className="col-md-5 col-md-offset-1">
                <section id="first-tab-group" className="tabgroup">
                    <div id="tab1">
                        <div className="submit-form">
                            <h4>Check availability for <em>direction</em>:</h4>
                            <form id="form-submit" action="" method="get">
                                <div className="row">
                                    <div className="col-md-6">
                                        <fieldset>
                                            <label for="from">From:</label>
                                            <select required name='from' >
                                                <option value="">Select a location...</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="India">India</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Korea">Korea</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Vietnam">Vietnam</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset>
                                            <label for="to">To:</label>
                                            <select required name='to' onchange='this.form.()'>
                                                <option value="">Select a location...</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="India">India</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Korea">Korea</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Vietnam">Vietnam</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset>
                                            <label for="departure">Departure date:</label>
                                            <input name="deparure" type="text" className="form-control date" id="deparure" placeholder="Select date..." required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset>
                                            <label for="return">Return date:</label>
                                            <input name="return" type="text" className="form-control date" id="return" placeholder="Select date..." required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="radio-select">
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-xs-6">
                                                    <label for="round">Round</label>
                                                    <input type="radio" name="trip" id="round" value="round" required="required"/>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-6">
                                                    <label for="oneway">Oneway</label>
                                                    <input type="radio" name="trip" id="oneway" value="one-way" required="required"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <fieldset>
                                            <button  id="form-submit" className="btn">Order Ticket Now</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</section>
  )
}

export default SearchFlight