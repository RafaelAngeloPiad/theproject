import Creatable from "react-select/creatable";
import Select, { components } from "react-select";
import { useState, useEffect, useRef } from "react";
import UrlManager, { sourcesLink } from "./UrlManager";

import {
  Dropdown,
  DropdownContainer,
  SearchField,
  SearchBarContainer,
  SearchFieldContainer,
  BtnContainer,
  SearchBtn,
  ClearBtn,
} from "./SearchbarElements";
import GetBlogs from "../pages/GetBlogs";

const Searchbar = ({
  endPoint,
  countryDisable,
  categoryDisable,
  domainsDisable,
}) => {
  const [url, setUrl] = useState("");
  const [qContent, setQ] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [sources, setSources] = useState([]);
  const [sourcesOptions, setSourcesOptions] = useState([]);
  const [domains, setDomains] = useState([]);
  const [language, setLanguage] = useState("");
  const [sortBy, setSortBy] = useState("");
  const searchBarInput = useRef();
  const [sourceDisabled, setSourcesDisabled] = useState(false);
  const [domainDisabled, setDomainDisabled] = useState(domainsDisable);
  const [countryDisabled, setCountryDisabled] = useState(countryDisable);
  const [categoryDisabled, setCategoryDisabled] = useState(categoryDisable);
  const [sortDisabled, setSortDisabled] = useState(true);

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
  ////////////////////////////////////////////////////////////problema mo ngayon ay hindi nagrerefresh yung useeffect pag nagclear ka ng inputs
  const onCountryChange = (selectedOption) => {
    setSortDisabled(false);
    if (selectedOption === null) {
      setCountry("");
    } else {
      console.log(selectedOption.value);
      setCountry(selectedOption.value);
    }

    if (endPoint === "top-headlines") {
      if (selectedOption === "" || selectedOption === null) {
        setSourcesDisabled(false);
      } else {
        setSourcesDisabled(true);
      }
    }
  };

  const onCategoryChange = (selectedOption) => {
    setSortDisabled(false);
    if (selectedOption === null) {
      setCategory("");
    } else {
      console.log(selectedOption.value);
      setCategory(selectedOption.value);
    }

    if (endPoint === "top-headlines") {
      if (selectedOption === "" || selectedOption === null) {
        setSourcesDisabled(false);
      } else {
        setSourcesDisabled(true);
      }
    }
  };

  const onSourcesChange = (selectedOption) => {
    setSortDisabled(false);
    console.log(selectedOption);
    setSources(selectedOption);

    if (selectedOption.length === 0) {
      setDomainDisabled(false);
    } else {
      setDomainDisabled(true);
    }
    if (endPoint === "top-headlines") {
      if (selectedOption.length !== 0) {
        setCountryDisabled(true);
        setCategoryDisabled(true);
      } else {
        setCountryDisabled(false);
        setCategoryDisabled(false);
      }
    }
  };

  const onDomainsChange = (selectedOption) => {
    setSortDisabled(false);
    console.log(selectedOption);
    setDomains(selectedOption);
    if (selectedOption.length === 0) {
      setSourcesDisabled(false);
    } else {
      setSourcesDisabled(true);
    }
  };

  const onLangChange = (selectedOption) => {
    setSortDisabled(false);
    if (selectedOption === null) {
      setLanguage("");
    } else {
      console.log(selectedOption.value);
      setLanguage(selectedOption.value);
    }
  };

  const onSortByChange = (selectedOption) => {
    if (selectedOption === null) {
      setSortBy("");
    } else {
      console.log(selectedOption.value);
      setSortBy(selectedOption.value);
    }
  };

  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span>Enter a News Domain Website</span>
      </components.NoOptionsMessage>
    );
  };

  //sources muna bago mag language[]
  //https://github.com/mdeveloper20/reactReminder/blob/react-select-creatable/src/Register/Register.js para to sa search nung sa domains
  //pag may domains na wag na mag sources

  const getSources = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines/sources?apiKey=c118f2ca32d040e8908e5a5bc7738af9"
    )
      .then((data) => data.json())
      .then((data) => {
        var cnt = 0;
        var sourceIds = [];

        while (data.sources[cnt] != null) {
          sourceIds.push({
            label: data.sources[cnt].name,
            value: data.sources[cnt].id,
          });
          cnt++;
        }

        //sources = sourceIds;
        //sources.map((opt) => ({ label: data.name, value: data.value }));

        setSourcesOptions(sourceIds);
      });
  };
  //HOY NAKIKITA YUNG DOMAIN SA JSON NG KADA ARTICLE TINGNAN MO BOBO
  //   "source": {
  //     "id": null,
  //     "name": "Kami.com.ph"
  // },
  useEffect(() => {
    getSources();
  }, []);

  useEffect(() => {
    setUrl(
      UrlManager(
        endPoint,
        qContent,
        country,
        category,
        sources,
        domains,
        language,
        sortBy
      )
    );
  }, [
    endPoint,
    qContent,
    country,
    category,
    sources,
    domains,
    language,
    sortBy,
  ]);

  return (
    <div>
      <SearchBarContainer>
        <SearchFieldContainer>
          <SearchField
            placeholder="search using a keyword"
            ref={searchBarInput}
          />

          <BtnContainer>
            <SearchBtn
              onClick={(event) => {
                setQ(searchBarInput.current.value);
                console.log(qContent);
                setSortDisabled(false);
              }}
            >
              Search
            </SearchBtn>
            <br />
            <ClearBtn
              onClick={(event) => {
                setQ("");
                console.log(qContent);
                searchBarInput.current.value = "";
              }}
            >
              Clear
            </ClearBtn>
          </BtnContainer>
        </SearchFieldContainer>

        <DropdownContainer>
          <Dropdown>
            {
              <Select
                isClearable
                placeholder="country"
                options={countryOptions}
                onChange={onCountryChange}
                isDisabled={countryDisabled}
              />
            }
          </Dropdown>
          <Dropdown>
            {
              <Select
                isClearable
                placeholder="category"
                options={categoriesOptions}
                onChange={onCategoryChange}
                isDisabled={categoryDisabled}
              />
            }
          </Dropdown>
          <Dropdown>
            {
              <Select
                isClearable
                placeholder="sources"
                options={sourcesOptions}
                onChange={(value) => onSourcesChange(value)}
                isDisabled={sourceDisabled}
                isMulti
              />
            }
          </Dropdown>
          <Dropdown>
            {
              <Creatable
                isClearable
                isMulti
                placeholder="domains"
                onChange={(value) => onDomainsChange(value)}
                components={{ DropdownIndicator: null, NoOptionsMessage }}
                value={domains}
                isDisabled={domainDisabled}
              />
            }
          </Dropdown>
          <Dropdown>
            {
              <Select
                isClearable
                placeholder="language"
                options={langOptions}
                onChange={onLangChange}
              />
            }
          </Dropdown>
          <Dropdown>
            {
              <Select
                isClearable
                placeholder="sortBy"
                options={sortOptions}
                onChange={onSortByChange}
                isDisabled={sortDisabled}
              />
            }
          </Dropdown>
        </DropdownContainer>
        <p className="url-preview">{url}</p>
      </SearchBarContainer>
      {url && <GetBlogs url={url} />}
    </div>
  );
};

export default Searchbar;
