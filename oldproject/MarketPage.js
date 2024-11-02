import "./MarketPage.css";
import Button from "@mui/material/Button";
import MarketCharts from "./MarketCharts";
import Card from "../components/Card.js";
import { useItemDatabase } from "../items/ItemDatabaseProvider.tsx";
import { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState(true);
  const itemDB = useItemDatabase();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="marketPageContainer">
      <div hidden={!loading}>Loading...</div>
      <div hidden={loading} className="marketPage">
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
    </div>
  );
}

export default Market;
