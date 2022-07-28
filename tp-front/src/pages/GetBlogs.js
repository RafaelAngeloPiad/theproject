import React from "react";
import { useState, useEffect } from "react";
import useFetchArticles from "../components/useFetchArticles";

function GetBlogs({ url }) {
  const {
    data: articles,
    totalResults,
    isPending,
    error,
  } = useFetchArticles(url);
  return (
    <div>
      {isPending && <div class="loading-prompt">LOADING</div>}

      {error && <div class="no-results-prompt">NO RESULTS FOUND</div>}
      <div class="total-results-container">
        {articles && !error && (
          <div class="total-results-prompt">Total Results : {totalResults}</div>
        )}
      </div>

      <div className="art-prev-container">
        {articles &&
          articles.map((article) => (
            <a
              className="art-prev-link"
              href={`${article.url}`}
              target="_blank"
            >
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
    </div>
  );
}

export default GetBlogs;
