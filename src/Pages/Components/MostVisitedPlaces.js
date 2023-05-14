import React from 'react';
import place01 from '../../Assets/img/place-01.jpg';
import place02 from '../../Assets/img/place-02.jpg';
import place03 from '../../Assets/img/place-03.jpg';
import place04 from '../../Assets/img/place-04.jpg';
import '../../Assets/css/owl-carousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function MostVisitedPlaces() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section id="most-visited">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-heading">
                        <h2>Most Visited Places</h2>
                    </div>
                </div>
                <Carousel responsive={responsive} autoPlay>
                    <div className="visited-item p-5">
                        <img src={place01} alt="" />
                        <div className="text-content">
                            <h4>River Views</h4>
                            <span>New York</span>
                        </div>
                    </div>
                    <div className="visited-item p-5">
                        <img src={place02} alt="" />
                        <div className="text-content">
                            <h4>Lorem ipsum dolor</h4>
                            <span>Tokyo</span>
                        </div>
                    </div>
                    <div className="visited-item p-5">
                        <img src={place03} alt="" />
                        <div className="text-content">
                            <h4>Proin dignissim</h4>
                            <span>Paris</span>
                        </div>
                    </div>
                    <div className="visited-item p-5">
                        <img src={place04} alt="" />
                        <div className="text-content">
                            <h4>Fusce sed ipsum</h4>
                            <span>Hollywood</span>
                        </div>
                    </div>
                    <div className="visited-item p-5">
                        <img src={place01} alt="" />
                        <div className="text-content">
                            <h4>River Views</h4>
                            <span>New York</span>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    </section>
  )
}

export default MostVisitedPlaces