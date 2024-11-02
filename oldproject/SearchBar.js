import "./SearchBar.css";
import { Autocomplete, TextField } from "@mui/material";
import { ItemDatabase } from "../ItemDatabase";
import { useEffect, useMemo, useState } from "react";

function SearchBar({ allItems, setItemHistory }) {
  const allOptions = useMemo(() => {
    return allItems;
  }, [allItems]);

  return (
    <div id="search-bar" className="searchBar">
      <Autocomplete
        disablePortal
        options={allOptions}
        onChange={(event, newValue) => {
          setItemHistory(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Item Name" />
        )}
      />
    </div>
  );
}

export default SearchBar;
