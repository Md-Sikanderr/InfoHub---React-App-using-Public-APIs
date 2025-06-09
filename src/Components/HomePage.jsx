import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <section className="homeContainer">
      <div className="container text-center py-5">
        <h1 className="mb-3">🌐 InfoHub</h1>
        <p className="lead">Get quick access to your daily essentials</p>

        <div className="row justify-content-center mt-5">
          <div className="col-md-4 mb-3">
            <div className="items">
              <h4>🌤️ Weather</h4>
              <p>Check current weather by city name.</p>
              <Link className="linktag" to="/weather">
                View Weather
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="items">
              <h4>📰 News</h4>
              <p>Stay updated with latest headlines.</p>
              <Link className="linktag" to="/news">
                Get News
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="items">
              <h4>🚀 Track Crypto Prices</h4>
              <p>Stay updated with daily crypto prices.</p>
              <Link className="linktag" to="/crypto">
                Track Prices
              </Link>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="items">
              <h4>📖 Learn About Countries</h4>
              <p>Search and explore facts about your favorite countries.</p>
              <Link className="linktag" to="/country">
                Click Here
              </Link>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <h3>More features are coming soon.....</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
