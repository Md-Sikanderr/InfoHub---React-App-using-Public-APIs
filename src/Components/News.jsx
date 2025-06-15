import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://gnews.io/api/v4/search?q=news&lang=en&country=in&max=30&apikey=89e20caaf4037f7eac5653591bbd91e8`
        );
        setArticle(response.data.articles);
      } catch (error) {
        console.error("Error in fetching news", error);
      }
    };
    fetchNews();
    const interval = setInterval(fetchNews, 60000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="newsContainer">
      <Link className="backlink" to="/">
        Home page
      </Link>
      <div className="container mt-5">
        <h2 className="text-center mb-3">📰 Latest News</h2>
        <p className="lead text-center">
          Updated every 24 hours · Showing top headlines in India
        </p>
        <div className="row">
          {article.map((articles, index) => (
            <div className="col-md-4 mt-5 mb-3" key={index}>
              <div className="newsbody">
                <img
                  src={articles.image}
                  className="card-img-top mb-2"
                  alt="News"
                />
                <h4>{articles.title}</h4>
                <p>{articles.description}</p>
                <a href={articles.url} target="_blank" rel="noreferrer">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
