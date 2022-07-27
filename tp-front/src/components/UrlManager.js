// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

export const apiKey = "c118f2ca32d040e8908e5a5bc7738af9";

const linkStart = "https://newsapi.org/v2/";
export const sourcesLink = `${linkStart}v2/top-headlines/sources?apiKey=${apiKey}`;
var masterUrl = "";

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

  var qLink = `q=${q}`;
  var countryLink = `country=${country}`;
  var categoryLink = `category=${category}`;
  var sourcesLink = `sources=${stringifyArray(sources)}`;
  var domainsLink = `domains=${stringifyArray(domains)}`;
  var languageLink = `language=${language}`;
  var sortByLink = `sortBy=${sortBy}`;
  var apiLink = `apiKey=${apiKey}`;

  if (endPoint === "everything") {
    if (sources.length !== 0) {
      if (q !== "" && language !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${qLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q !== "" && language !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${qLink}&${languageLink}&${apiLink}`;
      } else if (q !== "" && language === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${qLink}&${sortByLink}&${apiLink}`;
      } else if (q !== "" && language === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${qLink}&${apiLink}`;
      } else if (q === "" && language !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q === "" && language !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${languageLink}&${apiLink}`;
      } else if (q === "" && language === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${sortByLink}&${apiLink}`;
      } else if (q === "" && language === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${apiLink}`;
      } //disable sortby pag wala pang any sort of input on all of them dear
    } else if (domains.length !== 0) {
      if (q !== "" && language !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${domainsLink}&${qLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q !== "" && language !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${domainsLink}&${qLink}&${languageLink}&${apiLink}`;
      } else if (q !== "" && language === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${domainsLink}&${qLink}&${sortByLink}&${apiLink}`;
      } else if (q !== "" && language === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${domainsLink}&${qLink}&${apiLink}`;
      } else if (q === "" && language !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${domainsLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q === "" && language !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${domainsLink}&${languageLink}&${apiLink}`;
      } else if (q === "" && language === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${domainsLink}&${sortByLink}&${apiLink}`;
      } else if (q === "" && language === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${domainsLink}&${apiLink}`;
      } //disable sortby pag wala pang any sort of input on all of them dear
    } else if (language !== "") {
      if (q !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${qLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${qLink}&${languageLink}&${apiLink}`;
      } else if (q !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${qLink}&${apiLink}`;
      } else if (q === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${languageLink}&${apiLink}`;
      } else if (q === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${languageLink}&${apiLink}`;
      } else if (q === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${sortByLink}&${apiLink}`;
      } else if (q !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${qLink}&${sortByLink}&${apiLink}`;
      } //query lang at sort by
    } else if (q !== "") {
      if (sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${qLink}&${sortByLink}&${apiLink}`;
      } else if (sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${qLink}&${apiLink}`;
      } //wala kahit ano
    } else {
      masterUrl = "";
    }
  } else if (endPoint === "top-headlines") {
    //meron lahat
    //hindi pwede imix yung sources with country or category.
    //reminder to output totalresults and use it to check if may lalabas, and for pagination na din next time

    //etong if na to para sa pag nagpick ka ng sources.
    if (sources.length !== 0) {
      if (q !== "" && language !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${qLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q !== "" && language !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${qLink}&${languageLink}&${apiLink}`;
      } else if (q !== "" && language === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${qLink}&${sortByLink}&${apiLink}`;
      } else if (q !== "" && language === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${qLink}&${apiLink}`;
      } else if (q === "" && language !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q === "" && language !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${languageLink}&${apiLink}`;
      } else if (q === "" && language === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${sortByLink}&${apiLink}`;
      } else if (q === "" && language === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${sourcesLink}&${apiLink}`;
      } //disable sortby pag wala pang any sort of input on all of them dear
    } else if (country !== "") {
      //meron category
      if (category !== "" && q !== "" && language !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${categoryLink}&${qLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (
        category !== "" &&
        q !== "" &&
        language !== "" &&
        sortBy === ""
      ) {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${categoryLink}&${qLink}&${languageLink}&${apiLink}`;
      } else if (
        category !== "" &&
        q !== "" &&
        language === "" &&
        sortBy === ""
      ) {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${categoryLink}&${qLink}&${apiLink}`;
      } else if (
        category !== "" &&
        q === "" &&
        language === "" &&
        sortBy === ""
      ) {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${categoryLink}&${apiLink}`;
      } else if (
        category !== "" &&
        q === "" &&
        language !== "" &&
        sortBy !== ""
      ) {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${categoryLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (
        category !== "" &&
        q === "" &&
        language !== "" &&
        sortBy === ""
      ) {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${categoryLink}&${languageLink}&${apiLink}`;
      } else if (
        category !== "" &&
        q === "" &&
        language === "" &&
        sortBy !== ""
      ) {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${categoryLink}&${sortByLink}&${apiLink}`;
      } else if (
        category !== "" &&
        q !== "" &&
        language === "" &&
        sortBy !== ""
      ) {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${categoryLink}&${qLink}&${sortByLink}&${apiLink}`;
      } //wala category
      else if (q !== "" && language !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${qLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q !== "" && language !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${qLink}&${languageLink}&${apiLink}`;
      } else if (q !== "" && language === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${qLink}&${apiLink}`;
      } else if (q === "" && language === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${apiLink}`;
      } else if (q === "" && language !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q === "" && language !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${languageLink}&${apiLink}`;
      } else if (q === "" && language === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${sortByLink}&${apiLink}`;
      } else if (q !== "" && language === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${countryLink}&${qLink}&${sortByLink}&${apiLink}`;
      } //category lang wala country
    } else if (category !== "") {
      if (q !== "" && language !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${categoryLink}&${qLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q !== "" && language !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${categoryLink}&${qLink}&${languageLink}&${apiLink}`;
      } else if (q !== "" && language === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${categoryLink}&${qLink}&${apiLink}`;
      } else if (q === "" && language === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${categoryLink}&${apiLink}`;
      } else if (q === "" && language !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${categoryLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q === "" && language !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${categoryLink}&${languageLink}&${apiLink}`;
      } else if (q === "" && language === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${categoryLink}&${sortByLink}&${apiLink}`;
      } else if (q !== "" && language === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${categoryLink}&${qLink}&${sortByLink}&${apiLink}`;
      } //language lang wala country at category
    } else if (language !== "") {
      if (q !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${qLink}&${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${qLink}&${languageLink}&${apiLink}`;
      } else if (q !== "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${qLink}&${apiLink}`;
      } else if (q === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${languageLink}&${apiLink}`;
      } else if (q === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${languageLink}&${sortByLink}&${apiLink}`;
      } else if (q === "" && sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${languageLink}&${apiLink}`;
      } else if (q === "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${sortByLink}&${apiLink}`;
      } else if (q !== "" && sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${qLink}&${sortByLink}&${apiLink}`;
      } //query lang at sort by
    } else if (q !== "") {
      if (sortBy !== "") {
        masterUrl = `${linkStart}${endPoint}?${qLink}&${sortByLink}&${apiLink}`;
      } else if (sortBy === "") {
        masterUrl = `${linkStart}${endPoint}?${qLink}&${apiLink}`;
      } //wala kahit ano
    } else {
      masterUrl = "";
    }
  }
  //masterUrl = `${linkStart}${endPoint}?${domainsLink}&${countryLink}&${categoryLink}&${languageLink}&${sortByLink}&${apiLink}`;
  //linkStart + endpoint + "q=" + q + "&" + apiKey
  return masterUrl;
  //(
  //   " endPoint : " +
  //   endPoint +
  //   " q : " +
  //   q +
  //   " country : " +
  //   country +
  //   " category : " +
  //   category +
  //   " sources : " +
  //   stringifyArray(sources) +
  //   " domains : " +
  //   stringifyArray(domains) +
  //   " language : " +
  //   language +
  //   " sortBy : " +
  //   sortBy
  // );
};

export default UrlManager;
