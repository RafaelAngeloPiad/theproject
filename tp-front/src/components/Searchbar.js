import React from "react";
import Select from "react-select";
import { useState, useEffect } from "react";
import AsyncSelect from "react-select/async";
import UrlManager from "./UrlManager";
import useFetchArticles from "./useFetchArticles";
import useFetchSources from "./useFetchSources";

import {
  Dropdown,
  DropdownContainer,
  SearchField,
  SearchBarContainer,
  SearchFieldContainer,
} from "./SearchbarElements";

const Searchbar = () => {
  const countryOptions = [
    { value: "ar", label: "Argentina" },
    { value: "au", label: "Australia" },
    { value: "at", label: "Austria" },
    { value: "be", label: "Belgium" },
    { value: "br", label: "Brazil" },
    { value: "bg", label: "Bulgaria" },
    { value: "ca", label: "Canada" },
    { value: "cn", label: "China" },
    { value: "co", label: "Colombia" },
    { value: "cu", label: "Cuba" },
    { value: "cz", label: "Czech Republic" },
    { value: "eg", label: "Egypt" },
    { value: "fr", label: "France" },
    { value: "de", label: "Germany" },
    { value: "gr", label: "Greece" },
    { value: "hk", label: "Hong Kong" },
    { value: "hu", label: "Hungary" },
    { value: "in", label: "India" },
    { value: "id", label: "Indonesia" },
    { value: "ie", label: "Ireland" },
    { value: "il", label: "Israel" },
    { value: "it", label: "Italy" },
    { value: "jp", label: "Japan" },
    { value: "lv", label: "Latvia" },
    { value: "lt", label: "Lithuania" },
    { value: "my", label: "Malaysia" },
    { value: "mx", label: "Mexico" },
    { value: "ma", label: "Morocco" },
    { value: "nl", label: "Netherlands" },
    { value: "nz", label: "New Zealand" },
    { value: "ng", label: "Nigeria" },
    { value: "no", label: "Norway" },
    { value: "ph", label: "Philippines" },
    { value: "pl", label: "Poland" },
    { value: "pt", label: "Portugal" },
    { value: "ro", label: "Romania" },
    { value: "ru", label: "Russia" },
    { value: "sa", label: "Saudi Arabia" },
    { value: "rs", label: "Serbia" },
    { value: "sg", label: "Singapore" },
    { value: "sk", label: "Slovakia" },
    { value: "si", label: "Slovenia" },
    { value: "za", label: "South Africa" },
    { value: "kr", label: "South Korea" },
    { value: "se", label: "Sweden" },
    { value: "ch", label: "Switzerland" },
    { value: "tw", label: "Taiwan" },
    { value: "th", label: "Thailand" },
    { value: "tr", label: "Turkey" },
    { value: "ae", label: "UAE" },
    { value: "ua", label: "Ukraine" },
    { value: "gb", label: "United Kingdom" },
    { value: "us", label: "United States" },
    { value: "ve", label: "Venezuela" },
  ];

  const langOptions = [
    { value: "ar", label: "Arabic" },
    { value: "de", label: "German" },
    { value: "en", label: "English" },
    { value: "es", label: "Spanish" },
    { value: "fr", label: "French" },
    { value: "he", label: "Hebrew" },
    { value: "it", label: "Italian" },
    { value: "nl", label: "Dutch" },
    { value: "no", label: "Norwegian" },
    { value: "pt", label: "Portuguese" },
    { value: "ru", label: "Russian" },
    { value: "sv", label: "Swedish" },
    { value: "ud", label: "France" },
    { value: "zh", label: "Zhuang" },
  ];

  const categoriesOptions = [
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" },
  ];

  const sortOptions = [
    { value: "relevancy", label: "Relevancy" },
    { value: "popularity", label: "Popularity" },
    { value: "publishedAt", label: "Newest" },
  ];

  const onCountryChange = (selectedOption) => {
    console.log(selectedOption.value);
    setCountry(selectedOption.value);
  };

  const onCategoryChange = (selectedOption) => {
    console.log(selectedOption.value);
    setCategory(selectedOption.value);
  };

  const linkUpdate = () => {
    UrlManager("everything", qContent, country, category, "", "");
  };

  const {
    data: sources,
    isPending,
    error,
  } = useFetchSources(
    "https://newsapi.org/v2/top-headlines/sources?apiKey=e6ba7f00ce054bfca62e6e40ce9e05d8"
  );
  const [qContent, setQ] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  const getSources = () => {
    console.log(JSON.stringify(sources));
  };

  return (
    <SearchBarContainer>
      {getSources()}
      <SearchFieldContainer>
        <SearchField
          placeholder="search"
          onChange={(event) => {
            setQ(event.target.value);
          }}
        />
      </SearchFieldContainer>

      <DropdownContainer>
        <Dropdown>
          {
            <Select
              placeholder="country"
              options={countryOptions}
              onChange={onCountryChange}
            />
          }
        </Dropdown>
        <Dropdown>
          {
            <Select
              placeholder="category"
              options={categoriesOptions}
              onChange={onCategoryChange}
            />
          }
        </Dropdown>
        <Dropdown>
          {
            <Select
              placeholder="sources"
              options={categoriesOptions}
              onChange={onCategoryChange}
            />
          }
        </Dropdown>
        <Dropdown>
          {
            <Select
              placeholder="domain"
              options={categoriesOptions}
              onChange={onCategoryChange}
            />
          }
        </Dropdown>
        <Dropdown>
          {
            <Select
              placeholder="language"
              options={langOptions}
              onChange={onCategoryChange}
            />
          }
        </Dropdown>
        <Dropdown>
          {
            <Select
              placeholder="sortBy"
              options={sortOptions}
              onChange={onCategoryChange}
            />
          }
        </Dropdown>
      </DropdownContainer>
      <p>{qContent}</p>
    </SearchBarContainer>
  );
};

export default Searchbar;
