import React from "react";

import Searchbar from "../components/Searchbar";

const Everything = () => {
  //const url = `https://newsapi.org/v2/everything?domains=inquirer.net&apiKey=068c33e9fdfe488e8c2829ec5e8069a4`;

  return (
    <div>
      <div className="home-block">
        <h1>
          Look through all existing Up to Date Articles around the world from
          NEWSAPI
        </h1>
      </div>

      <Searchbar
        endPoint="everything"
        countryDisable={true}
        categoryDisable={true}
        domainsDisable={false}
      />
    </div>
  );
};

export default Everything;

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
