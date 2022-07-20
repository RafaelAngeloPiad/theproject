import React from "react";
import Searchbar from "../components/Searchbar";

const Home = () => {
  return (
    <div>
      <Searchbar endPoint="top-headlines" disable={false} />
      <div className="home-block">
        <h1>Welcome to Basic Blog Viewer</h1>

        <h2>Browse through recent articles</h2>

        <h3>
          All articles mentioning Apple from yesterday, sorted by popular
          publishers first
        </h3>

        <h3>
          All articles about Tesla from the last month, sorted by recent first
        </h3>

        <h3>Top business headlines in the US right now</h3>

        <h3>Top headlines from TechCrunch right now</h3>

        <h3>
          All articles published by the Wall Street Journal in the last 6
          months, sorted by recent
        </h3>
      </div>
    </div>
    /*
        https://newsapi.org/v2/everything?q=apple&from=2022-07-07&to=2022-07-07&sortBy=popularity&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

        https://newsapi.org/v2/everything?q=tesla&from=2022-06-08&sortBy=publishedAt&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

        https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

        https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

        https://newsapi.org/v2/everything?domains=wsj.com&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

      
       */
  );
};

export default Home;
