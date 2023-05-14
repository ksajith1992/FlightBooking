import React from 'react';
import h1 from '../../Assets/img/h1.jpg';
import h2 from '../../Assets/img/h2.jpg';
import h3 from '../../Assets/img/h3.jpg';
import h4 from '../../Assets/img/h4.jpg';
import h5 from '../../Assets/img/h5.jpg';
import '../../Assets/css/owl-carousel.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function MostRecomendedHotels() {
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
                    <h2>Most Recomended Hotels</h2>
                </div>
            </div>
            <Carousel responsive={responsive} autoPlay>
                <div className="visited-item p-5">
                    <img src={h1} alt=""  style={{width:230,height:230}}/>
                    <div className="text-content">
                        <h4>xxxxxxx</h4>
                        <span>xxxxxxx</span>
                    </div>
                </div>
                <div className="visited-item p-5">
                    <img src={h2} alt="" style={{width:230,height:230}}/>
                    <div className="text-content">
                        <h4>xxxxxxx</h4>
                        <span>xxxxxxx</span>
                    </div>
                </div>
                <div className="visited-item p-5">
                    <img src={h3} alt="" style={{width:230,height:230}}/>
                    <div className="text-content">
                        <h4>xxxxxxx</h4>
                        <span>xxxxxxx</span>
                    </div>
                </div>
                <div className="visited-item p-5">
                    <img src={h4} alt="" style={{width:230,height:230}}/>
                    <div className="text-content">
                    <h4>xxxxxxx</h4>
                        <span>xxxxxxx</span>
                    </div>
                </div>
                <div className="visited-item p-5">
                    <img src={h5} alt="" style={{width:230,height:230}}/>
                    <div className="text-content">
                        <h4>xxxxxxx</h4>
                        <span>xxxxxxx</span>
                    </div>
                </div>
            </Carousel>
        </div>
    </div>
</section>
  )
}

export default MostRecomendedHotels