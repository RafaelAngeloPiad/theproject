import React from "react";
import useFetch from "../components/useFetch";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const FullBlog = () => {
  const { title } = useParams();

  const url =
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=068c33e9fdfe488e8c2829ec5e8069a4";

  const [article, setArticle] = useState({});

  const getDatas = async (title) => {
    const result = await fetch(url, {
      method: "GET",
    });
    const data = await result.json();

    const currentArticle = data.articles.filter((t) => t.title === title)[0];

    console.log(currentArticle);
    setArticle(currentArticle);
  };

  useEffect(() => {
    getDatas(title);
  });

  return article === undefined ? (
    <p>
      <a href="/Blogs">Oops Error, Click link to return to Blogs</a>
    </p>
  ) : (
    <div>
      <div>
        <h2 className="">{article.title}</h2>
      </div>
      <div>
        <label className="">{article.author}</label>
      </div>
      <div>
        <label className="">{article.publishedAt}</label>
      </div>
      <div>
        <img className="" src={article.urlToImage} alt={article.title} />
      </div>

      <div>
        <a className="" href={article.url} target="_blank">
          Click to View this Article
        </a>
      </div>

      <div>
        <p className="">{article.description}</p>
      </div>
    </div>

    /* sample data
    "author": "Ari L. Weinberg",
      "title": "Bond ETFs Attract New Investors With Narrower Offerings",
      "description": "The specialization allows investors to find lucrative sectors despite rising rates. But there are risks.",
      "url": "https://www.wsj.com/articles/bond-etfs-investing-11656706325",
      "urlToImage": "https://images.wsj.net/im-576043/social",
      "publishedAt": "2022-07-03T12:00:00Z",
      "content": 
    */
  );
};

export default FullBlog;
