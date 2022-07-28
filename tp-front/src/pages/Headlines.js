import React from "react";
import Searchbar from "../components/Searchbar";

const Headlines = () => {
  return (
    <div>
      <div className="home-block">
        <h1>
          Search through The Latest Top Headlines around the world from NEWSAPI
        </h1>
      </div>

      <Searchbar
        endPoint="top-headlines"
        countryDisable={false}
        categoryDisable={false}
        domainsDisable={true}
      />
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

export default Headlines;
