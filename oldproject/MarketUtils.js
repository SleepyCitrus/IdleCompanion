const marketApi = "https://query.idleclans.com/api/PlayerMarket/items";
const itemsToIdsApi = "https://idleclans.uraxys.dev/api/items/all";

const priceApi = "/prices";
const priceLatestApi = "/latest";
const priceComprehensiveApi = "/comprehensive";

const historyApi = "/history";

// https://query.idleclans.com/api/PlayerMarket/items/prices/latest
export function getPriceAllItems(includeAvgPrice = false) {
  var url = urlBuilder(marketApi, priceApi, priceLatestApi);
  var params = {};
  params["includeAveragePrice"] = includeAvgPrice;
  var endpoint = endpointBuilder(url, params);

  return fetchEndpoint(endpoint);
}

// https://query.idleclans.com/api/PlayerMarket/items/prices/latest/comprehensive/{itemId}
export function getPrice(itemId, includeAveragePrice = false) {
  var url = urlBuilder(
    marketApi,
    priceApi,
    priceLatestApi,
    priceComprehensiveApi,
    "/",
    itemId
  );
  var params = {};
  params["includeAveragePrice"] = includeAveragePrice;
  var endpoint = endpointBuilder(url, params);

  return fetchEndpoint(endpoint);
}

// https://query.idleclans.com/api/PlayerMarket/items/prices/history/{itemId}
export function getPriceHistory(itemId, period = "1d") {
  var url = urlBuilder(marketApi, priceApi, historyApi, "/", itemId);
  var params = {};
  params["period"] = period;
  var endpoint = endpointBuilder(url, params);
  console.log(endpoint);

  return fetchEndpoint(endpoint);
}

// https://idleclans.uraxys.dev/api/items/all
export function getItemsToIds() {
  var endpoint = endpointBuilder(itemsToIdsApi, []);

  return fetch(endpoint)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      return data;
    });
}

function urlBuilder(...urls) {
  return urls.join("");
}

function endpointBuilder(url, params) {
  var endpoint = new URL(url);

  for (var key in params) {
    endpoint.searchParams.append(key, params[key]);
  }

  return endpoint;
}

function fetchEndpoint(endpoint) {
  return fetch(endpoint)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}
