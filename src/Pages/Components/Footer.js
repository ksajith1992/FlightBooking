import React from 'react'

function Footer() {
  return (
    <footer>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <ul className="social-icons">
                    <li><a href=""><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fa fa-rss"></i></a></li>
                    <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
            </div>
            <div className="col-md-12">
                <p>Copyright &copy; 2023 ksajith1992@gmail.com</p>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer