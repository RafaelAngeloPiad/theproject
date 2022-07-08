import React from "react";
import useFetch from "../components/useFetch";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Blogs = () => {
  const urls = [
    "https://newsapi.org/v2/everything?q=apple&from=2022-07-07&to=2022-07-07&sortBy=popularity&apiKey=068c33e9fdfe488e8c2829ec5e8069a4",
    "https://newsapi.org/v2/everything?q=tesla&from=2022-06-08&sortBy=publishedAt&apiKey=068c33e9fdfe488e8c2829ec5e8069a4",
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=068c33e9fdfe488e8c2829ec5e8069a4",
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=068c33e9fdfe488e8c2829ec5e8069a4",
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=068c33e9fdfe488e8c2829ec5e8069a4",
  ];

  /*
        https://newsapi.org/v2/everything?q=apple&from=2022-07-07&to=2022-07-07&sortBy=popularity&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

        https://newsapi.org/v2/everything?q=tesla&from=2022-06-08&sortBy=publishedAt&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

        https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

        https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

        https://newsapi.org/v2/everything?domains=wsj.com&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

      
       */

  const [articles, setArticles] = useState([]);
  const [articleStack, setArticleStack] = useState([]);

  const getDatas = async () => {
    const result = await fetch(urls[0], {
      method: "GET",
    });
    const data = await result.json();

    // console.log(data.articles);
    setArticles(data.articles);
  };

  // const getDatas = async () => {
  //   await Promise.all(
  //     urls.map(async (url) => {
  //       const result = await fetch(url, {
  //         method: "GET",
  //       });
  //       const data = await result.json();

  //       console.log(data.articles);
  //       //setArticles(data.concat(data.articles));
  //       setArticles((oldArticles) => [...oldArticles, data.articles]);
  //     })
  //   );
  // };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <div className="art-prev-container">
      {articles.map((article) => (
        <a className="art-prev-link" href={`${article.url}`} target="_blank">
          <div className="art-prev-block">
            <label className="art-prev-title">{article.title}</label>
            <label className="art-prev-author">{article.author}</label>
            <label className="art-prev-publishedAt">
              {article.publishedAt}
            </label>
            <img
              className="art-prev-img"
              src={article.urlToImage}
              alt={article.title}
            />
            <p className="art-prev-desc">{article.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Blogs;
