import styled from "styled-components";

export const SearchBarContainer = styled.div`
  padding-left: 5px;
  padding-right: 5px;
  font-size: 1em;
`;

export const BtnContainer = styled.div``;

export const AllBtn = styled.button``;

export const TopBtn = styled.button``;

export const SearchFieldContainer = styled.div`
  background-color: red;
  display: flex;
`;

export const SearchField = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: 1em;
  border: 1px solid;
  border-color: lightgrey;
  border-radius: 5px;
  flex: 1;
`;

export const DropdownContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const Dropdown = styled.div`
  display: inline-grid;
  padding: 10px;
`;
