import React, { useState } from "react";
import Creatable from "react-select/creatable";
import Select, { components } from "react-select";

const Register = (props) => {
  const [domains, setDomains] = useState([]);

  const onDomainsChange = (value) => {
    console.log(value);
    setDomains(value);
  };

  const NoOptionsMessage = (props) => {
    return (
      <components.NoOptionsMessage {...props}>
        <span>Enter a News Domain Website</span>
      </components.NoOptionsMessage>
    );
  };

  return (
    <div className="container">
      <div className="input">
        <label>Role(s)</label>
        <Creatable
          isClearable
          isMulti
          placeholder="domains"
          onChange={(value) => onDomainsChange(value)}
          components={{ DropdownIndicator: null, NoOptionsMessage }}
          // menuIsOpen={false}
          value={domains}
        />
      </div>
      {/* 
      <div className="input">
        <label>Tag(s)</label>
        <Creatable
          isClearable={true}
          isMulti
          //components={{ DropdownIndicator: null }}
          inputValue={tagInputValue}
          menuIsOpen={false}
          onChange={(value) => handleChange("tags", value)}
          placeholder="Type something and press enter..."
          onKeyDown={handleKeyDown}
          onInputChange={handleInputChange}
          value={tagValue}
        />
      </div> */}
    </div>
  );
};

export default Register;
