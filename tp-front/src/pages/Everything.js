import React from "react";
import { useState, useEffect } from "react";
import useFetchArticles from "../components/useFetchArticles";
import Searchbar from "../components/Searchbar";

const Blogs = () => {
  const url = `https://newsapi.org/v2/everything?domains=inquirer.net&apiKey=068c33e9fdfe488e8c2829ec5e8069a4`;

  const { data: articles, isPending, error } = useFetchArticles(url);

  //const articles = data.articles;

  return (
    <div>
      <Searchbar endPoint="everything" disable={true} />
      <div className="art-prev-container">
        {isPending && <div>LOADING</div>}

        {error && <div>THERE IS AN ERROR</div>}

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
};

export default Blogs;

/*
        https://newsapi.org/v2/everything?q=apple&from=2022-07-07&to=2022-07-07&sortBy=popularity&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

        https://newsapi.org/v2/everything?q=tesla&from=2022-06-08&sortBy=publishedAt&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

        https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

        https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

        https://newsapi.org/v2/everything?domains=wsj.com&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

      
       */

//const [articleStack, setArticleStack] = useState([]);

// const [isLoading,setLoading] = useState();
// const [error,setError] = useState();

// const getDatas = async () => {
//   await Promise.all(
//     urls.map(async (url) => {
//       const result = await fetch(url, {
//         method: "GET",
//       });
//       const data = await result.json();
//       //console.log(url);
//       //console.log(data.articles);
//       //setArticles(data.concat(data.articles));
//       setArticleStack((oldArticleStack) => [
//         ...oldArticleStack,
//         data.articles
//       ]);
//     })
//   );

//   articleStack.forEach((articlez) => {
//     articlez.forEach((elements) => {
//       console.log(elements);
//       setArticles((articleStack) => [
//         ...articleStack,
//         elements
//       ]);
//       //console.log(elements);
//     });
//   });
// };

// useEffect(() => {
//   getDatas();

// urls.map((url) => {
//   fetch(url)
//   .then((res) => res.json())
//   .then(
//     (result) => {
//       setArticleStack((oldArticleStack) => [
//         ...oldArticleStack,
//         result.articles
//       ]);
//       setLoading(false);
//       //console.log(result.articles);
//     },
//     (error) => {
//       console.error("Error fetching data: ",error);
//       setError(error);
//     }
//   )
// })

// //setArticles([...articleStack,...articles]);
// articleStack.forEach((articlez) => {
//   articlez.forEach((elements) => {
//     console.log(elements);
//     setArticles((articleStack) => [
//       ...articleStack,
//       elements
//     ]);
//   });
// });

//getDatas();
//console.log(articles[0]);
// }, []);

// <div>
//   <pre>{JSON.stringify(articles,null,2)}</pre>
// </div>
