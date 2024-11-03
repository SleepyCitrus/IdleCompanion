const marketApi = "https://query.idleclans.com/api/PlayerMarket/items";
const itemsToIdsApi = "https://idleclans.uraxys.dev/api/items/all";

const priceApi = "/prices";
const priceLatestApi = "/latest";
const priceComprehensiveApi = "/comprehensive";

const historyApi = "/history";

export const timeRanges = ["1d", "7d", "30d", "1y"];

// https://query.idleclans.com/api/PlayerMarket/items/prices/latest
export function getPriceAllItems(includeAvgPrice = false) {
  let url = urlBuilder(marketApi, priceApi, priceLatestApi);
  let params = {
    includeAveragePrice: includeAvgPrice,
  };
  let endpoint = endpointBuilder(url, params);

  return fetchEndpoint(endpoint);
}

// https://query.idleclans.com/api/PlayerMarket/items/prices/latest/comprehensive/{itemId}
export function getPrice(itemId: string, includeAveragePrice = false) {
  let url = urlBuilder(
    marketApi,
    priceApi,
    priceLatestApi,
    priceComprehensiveApi,
    "/",
    itemId
  );
  let params = { includeAveragePrice: includeAveragePrice };
  let endpoint = endpointBuilder(url, params);

  return fetchEndpoint(endpoint);
}

// https://query.idleclans.com/api/PlayerMarket/items/prices/history/{itemId}
export function getPriceHistory(itemId: string, period = "1d") {
  let url = urlBuilder(marketApi, priceApi, historyApi, "/", itemId);
  let params = { period: period };
  let endpoint = endpointBuilder(url, params);

  return fetchEndpoint(endpoint);
}

// https://idleclans.uraxys.dev/api/items/all
export function getItemsToIds() {
  let endpoint = endpointBuilder(itemsToIdsApi, []);

  return fetch(endpoint).then((data) => {
    return data.json();
  });
}

function urlBuilder(...urls: string[]) {
  return urls.join("");
}

function endpointBuilder(url: string, params: any) {
  let endpoint = new URL(url);

  for (let key in params) {
    endpoint.searchParams.append(key, params[key]);
  }

  return endpoint;
}

function fetchEndpoint(endpoint: string | URL | Request) {
  return fetch(endpoint).then((data) => {
    return data.json();
  });
}
