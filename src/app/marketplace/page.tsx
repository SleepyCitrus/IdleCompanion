import MarketPage from "./MarketPage";

export default async function Page() {
  let response = await fetch(
    "https://idleclans.uraxys.dev/api/items/all"
  );
  const allItems = await response.json();
  return (
    <div className="flex w-full h-full">
      <MarketPage allItems={allItems} />
    </div>
  );
}
