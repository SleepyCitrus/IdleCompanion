import "./Market.css";
import Button from "@mui/material/Button";
import { getPriceAllItems, getPrice } from "./MarketUtils";
import { ItemRepository } from "../items/ItemRepository";
import SearchBar from "../items/search/SearchBar";
import PriceChart from "./linechart/PriceChart";
import { useState } from "react";

const itemRepository = new ItemRepository();

function getAllPrices() {
  getPriceAllItems(true).then((prices) => {
    for (var i = 0; i < 3; i++) {
      var price = prices[i];
      console.log(price);
      if ("itemId" in price) {
        var itemName = itemRepository.getItemName(price["itemId"]);
        document.getElementById("prices").innerText += itemName;
      }
    }
  });
}

function getItemPrice() {
  getPrice(581, true).then((price) => {
    console.log(price);
  });
}

function getItemNames() {
  console.log(itemRepository.getAllItemNames());
}

function Market() {
  const [itemHistory, setItemHistory] = useState("");

  return (
    <div className="market">
      <Button
        className="priceButton"
        variant="contained"
        onClick={getAllPrices}
      >
        Get All Prices
      </Button>

      <Button
        className="priceButton"
        variant="contained"
        onClick={getItemPrice}
      >
        Get Item Price
      </Button>

      <Button
        className="priceButton"
        variant="contained"
        onClick={getItemNames}
      >
        Get All Item Names
      </Button>

      <SearchBar setItemHistory={setItemHistory} />

      <PriceChart itemHistory={itemHistory} />

      <div id="prices"></div>
    </div>
  );
}

export default Market;
