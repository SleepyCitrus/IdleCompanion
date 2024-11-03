import MarketPage from "./MarketPage";

export default async function Page() {
  let response = await fetch(
    "https://idleclans.uraxys.dev/api/items/all"
  );
  const items = await response.json();
  return <MarketPage items={items} />;
}
