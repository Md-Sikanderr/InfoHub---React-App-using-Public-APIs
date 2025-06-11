import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footersection py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h4>🌐 InfoHub</h4>
            <p>
              INFOHUB is a multi-feature information platform built with
              React.js that brings together real-time data from multiple public
              APIs. It offers a centralized experience for users to explore
              current weather, breaking news, crypto market updates, dictionary
              words, and country information — all in one place.
            </p>

            <p>Made with ❤️ using React & public APIs</p>
          </div>
          <div className="col-md-4 mb-3">
            <h4>Navigation</h4>
            <li>
              <Link className="flink" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="flink" to="/weather">
                Weather
              </Link>
            </li>
            <li>
              <Link className="flink" to="/news">
                News
              </Link>
            </li>
            <li>
              <Link className="flink" to="/crypto">
                Crypto
              </Link>
            </li>
            <li>
              <Link className="flink" to="/country">
                Country
              </Link>
            </li>
          </div>
          <div className="col-md-4 mb-3">
            <h4>Contact</h4>
            <p>mdsikander2000@gmail.com</p>
            <p>github.com/Md-Sikanderr</p>
          </div>
          <div className="col-md-12 mt-3 text-center">
            <p>© 2025 MD Sikandar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
