import { getItemsToIds } from "../market/MarketUtils";

export class ItemDatabase {
  /*
    Map of IDs to names:
      {
        0: "spruce_log",
        1: "pine_log",
        ...
      }
  */
  idsToNames;

  /*
    Map of names to IDs:
      {
        "spruce_log": 0,
        "pine_log": 1,
        ...
      }
  */
  namesToIds;
  longestItemName;

  constructor() {
    this.idsToNames = {};
    this.namesToIds = {};
    this.longestItemName = "";
  }

  getAllItemNames() {
    console.log("calling getAllItemNames");
    if (
      this.namesToIds === null ||
      this.namesToIds === undefined ||
      Object.keys(this.namesToIds).length === 0
    ) {
      this.refreshItemCache().then(() => {
        return Object.keys(this.namesToIds);
      });
    }
    return Object.keys(this.namesToIds);
  }

  getItemName(itemId) {
    itemId = itemId.toString();

    if (itemId in this.idsToNames) {
      return this.idsToNames[itemId];
    }

    // Couldn't find item, try updating cache
    this.refreshItemCache().then(() => {
      if (itemId in this.idsToNames) {
        return this.idsToNames[itemId];
      } else {
        console.error("Could not find item with ID: " + itemId);
        return "";
      }
    });
  }

  getLongestItemName() {
    return this.longestItemName;
  }

  getItemId(itemName) {
    if (itemName in this.namesToIds) {
      return this.namesToIds[itemName];
    } else {
      return "";
    }
  }

  refreshItemCache() {
    return getItemsToIds()
      .then((data) => {
        // Refreshes entire cache.
        // Could look to add some additional optimization later (e.g. comparing checksums)
        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          if ("name_id" in item && "internal_id" in item) {
            this.idsToNames[item["internal_id"]] = item["name_id"];
            this.namesToIds[item["name_id"]] = item["internal_id"];

            this.longestItemName =
              this.longestItemName.length > item["name_id"].length
                ? this.longestItemName
                : item["name_id"];
          }
        }
      })
      .then((data) => {
        console.log("Item cache refreshed.");
        return data;
      });
  }
}
