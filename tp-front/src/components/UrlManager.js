// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

export const apiKey = "068c33e9fdfe488e8c2829ec5e8069a4";

const linkStart = "https://newsapi.org/v2/";
export const sourcesLink = `${linkStart}v2/top-headlines/sources?apiKey=${apiKey}`;

//ang gawin mo pag hindi top headlines, automatic everything na yun.

//pwede pala may separate na page for top headlines

//may separate na page for search everything

//yung home page iloload nya yung everything sa isang domain tapos may
//domain selector, tapos pwede ka mag add ng domain dapat may checker kung
//yung ilalagay mo na domain ay pwede, irereject nya pag hindi

//we seriously need a domains picker, for everything.

//everything does not support category and country only domains and q and sources

//sort by

//IF NAGSEARCH KA GAMIT Q sa everything,
//may sources at domains mag iba pala yun
//may pages pa pala hayop ka

const UrlManager = (
  endPoint,
  q,
  country,
  category,
  sources,
  domains,
  language,
  sortBy
) => {
  const stringifyArray = (sources) => {
    var cnt = 0;
    var sourcesString = "";

    while (sources[cnt] != null) {
      sourcesString += sources[cnt].value + ",";
      cnt++;
    }
    return sourcesString.substring(0, sourcesString.length - 1);
  };

  if (endPoint === "everything") {
    //if wala laman or unang render
    if (sources === "") {
      if (domains === "") {
        if (q === "") {
          return "please provide either SOURCES, DOMAINS OR SEARCH PARAMETER to find an article";
        }
      }
    }

    if (sources !== "" && domains !== "" && language !== "" && sortBy !== "") {
      return `${linkStart}${endPoint}?sources=${stringifyArray(
        sources
      )}&domains=${stringifyArray(
        domains
      )}&language=${language}&sortBy=${sortBy}&apiKey=${apiKey}`;
    }
  }

  //linkStart + endpoint + "q=" + q + "&" + apiKey
  return (
    " endPoint : " +
    endPoint +
    " q : " +
    q +
    " country : " +
    country +
    " category : " +
    category +
    " sources : " +
    stringifyArray(sources) +
    " domains : " +
    stringifyArray(domains) +
    " language : " +
    language +
    " sortBy : " +
    sortBy
  );
};

export default UrlManager;
