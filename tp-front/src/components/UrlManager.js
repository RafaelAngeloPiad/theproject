import React, { useEffect, useState } from "react";

// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=068c33e9fdfe488e8c2829ec5e8069a4

const apiKey = "e6ba7f00ce054bfca62e6e40ce9e05d8";
const linkStart = "https://newsapi.org/v2/";

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
  if (endPoint === "everything") {
    if (sources === "") {
      if (domains === "") {
        if (q === "") {
          console.log(
            "please provide either SOURCES, DOMAINS OR SEARCH PARAMETER to find an article"
          );
        }
      }
    }
  }

  return linkStart + "everything?" + "q=" + q + "&" + apiKey;
};

export default UrlManager;
