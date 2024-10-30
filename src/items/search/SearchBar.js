import "./SearchBar.css";
import { Autocomplete, TextField } from "@mui/material";
import { ItemRepository } from "../ItemRepository";
import { useEffect, useState } from "react";

const itemRepository = new ItemRepository();

function SearchBar({ setItemHistory }) {
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    var items = itemRepository.getAllItemNames();
    if (
      allItems === undefined ||
      allItems.length === 0 ||
      allItems.length !== items.length
    ) {
      setAllItems(itemRepository.getAllItemNames());
    }

    console.log("test");
  }, [allItems]);

  return (
    <div id="search-bar" className="search-bar">
      <div>hi</div>
      <Autocomplete
        disablePortal
        options={allItems}
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
