import styled from "styled-components";

export const SearchBarContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 1em;
  margin-top: 20px;
`;

export const BtnContainer = styled.div`
  padding: 5px;
`;

export const SearchBtn = styled.button`
  margin-bottom: 5px;
  width: 100px;
  height: 16px;
  border-radius: 4px;
  background: #fad9a1;

  color: black;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f37878;
    color: #fad9a1;
  }
`;

export const ClearBtn = styled.button`
  width: 100px;
  height: 16px;
  border-radius: 4px;
  background: #fad9a1;

  color: black;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #f37878;
    color: #fad9a1;
  }
`;

export const SearchFieldContainer = styled.div`
  background-color: #f37878;
  display: flex;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const SearchField = styled.input`
  padding: 10px;
  margin: 5px;
  font-size: 1em;
  border: 1px solid;
  border-color: lightgrey;
  border-radius: 5px;
  flex: 1;
`;

export const DropdownContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  background-color: #f37878;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-left: 4px;
  padding-right: 4px;
`;

export const Dropdown = styled.div`
  display: inline-grid;
  padding-bottom: 5px;
  padding-left: 2px;
  padding-right: 2px;
`;
