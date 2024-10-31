import "./MarketPage.css";
import Button from "@mui/material/Button";
import { getPriceAllItems, getPrice } from "./MarketUtils";
import { ItemDatabase } from "../items/ItemDatabase";
import MarketCharts from "./MarketCharts";
import { Paper } from "@mui/material";
import Card from "../card/Card";
import { useItemDatabase } from "../items/ItemDatabaseProvider";
import { useEffect } from "react";

function getAllPrices() {
  // getPriceAllItems(true).then((prices) => {
  //   for (var i = 0; i < 3; i++) {
  //     var price = prices[i];
  //     console.log(price);
  //     if ("itemId" in price) {
  //       var itemName = itemDB.getItemName(price["itemId"]);
  //       document.getElementById("prices").innerText += itemName;
  //     }
  //   }
  // });
}

function getItemPrice() {
  // getPrice(581, true).then((price) => {
  //   console.log(price);
  // });
}

function getItemNames() {
  // console.log(itemDB.getAllItemNames());
}

function Market() {
  const itemDB = useItemDatabase();

  return (
    <div className="marketPage">
      <Card>
        <div className="title">
          <h1>Idle Clans Marketplace</h1>
          <div>
            Made by{" "}
            <span style={{ fontWeight: 500 }}>VexingCitrus</span>
          </div>
        </div>
      </Card>

      <div className="marketChartWrapper">
        <Card>
          <div className="marketButtonWrapper">
            <div className="priceButton">
              <Button
                className="priceButton"
                variant="contained"
                onClick={getAllPrices}
              >
                Get All Prices
              </Button>
            </div>

            <div className="priceButton">
              <Button
                className="priceButton"
                color="secondary"
                variant="contained"
                onClick={getItemPrice}
              >
                Get Item Price
              </Button>
            </div>
            <div className="priceButton">
              <Button
                className="priceButton"
                color="secondary"
                variant="contained"
                onClick={getItemNames}
              >
                Get All Item Names
              </Button>
            </div>
          </div>
        </Card>

        <MarketCharts />

        <div id="prices"></div>
      </div>
    </div>
  );
}

export default Market;
