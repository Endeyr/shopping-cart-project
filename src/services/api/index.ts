// Type definitions for item price data
type PriceType = {
  avgHighPrice: number | null;
  avgLowPrice: number | null;
};
// Type definition for an object mapping item IDs to PriceType
type PriceDataType = {
  [key: string]: PriceType;
};
// Function to fetch item price data by item ID from an external API
export const fetchPriceById = async (id: string, isMounted: boolean) => {
  try {
    // API endpoint URL for fetching item prices
    const url = "https://prices.runescape.wiki/api/v1/osrs/5m";
    const response = await fetch(url);
    // Check if component is unmounted before proceeding
    if (!isMounted) return; // Exit if component is unmounted
    // Handle different HTTP response statuses
    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error("Bad request: Network response 400");
        case 401:
          throw new Error("Unauthorized: Network response 401");
        case 404:
          throw new Error("Not found: Network response 404");
        case 500:
          throw new Error("Internal server error: Network response 500");
        default:
          throw new Error(
            `Unexpected error: Network response ${response.status}`,
          );
      }
    }
    // Parse JSON response from the API
    const data = await response.json();
    // Function to filter price data by item ID
    const filterDataById = (
      data: PriceDataType,
      id: string,
    ): PriceType | undefined => {
      return data[id]; // Return price data for the given item ID, if exists
    };
    // Filter price data by the provided item ID
    const priceObj = filterDataById(data.data, id);
    // Throw error if item ID is not found in the price data
    if (priceObj) {
      return priceObj;
    } else {
      throw new Error("Id not found");
    }
  } catch (error) {
    console.log(error); // Log any caught errors to the console
    throw error;
  }
};
// Type definition for an object mapping item names to item IDs
type ItemDataType = {
  [itemName: string]: number;
};
// Function to fetch item name by item ID from an external API
export const fetchNameById = async (id: string, isMounted: boolean) => {
  try {
    // API endpoint URL for fetching item ID to name mapping
    const url =
      "https://oldschool.runescape.wiki/?title=Module:GEIDs/data.json&action=raw&ctype=application%2Fjson";
    const response = await fetch(url);
    // Check if component is unmounted before proceeding
    if (!isMounted) return; // Exit if component is unmounted
    // Handle different HTTP response statuses
    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error("Bad request: Network response 400");
        case 401:
          throw new Error("Unauthorized: Network response 401");
        case 404:
          throw new Error("Not found: Network response 404");
        case 500:
          throw new Error("Internal server error: Network response 500");
        default:
          throw new Error(
            `Unexpected error: Network response ${response.status}`,
          );
      }
    }
    // Parse JSON response from the API (item name to item ID mapping)
    const data = await response.json();
    // Function to create a reverse lookup dictionary (item IDs mapped to item names)
    const createItemIdLookup = (
      itemData: ItemDataType,
    ): { [itemId: number]: string } => {
      const itemIdLookup: { [itemId: number]: string } = {};
      // Iterate over each item in itemData and populate the reverse lookup dictionary
      Object.entries(itemData).forEach(([itemName, itemId]) => {
        itemIdLookup[itemId] = itemName;
      });
      return itemIdLookup;
    };
    // Create a reverse lookup dictionary for item IDs mapped to item names
    const itemIdLookup = createItemIdLookup(data);
    // Function to retrieve item name by item ID using the reverse lookup dictionary
    const getItemNameById = (itemId: number): string | undefined => {
      return itemIdLookup[itemId];
    };
    // Retrieve item name for the provided item ID
    const itemName = getItemNameById(Number(id));
    // Throw error if item name is not found for the provided item ID
    if (itemName !== undefined) {
      return itemName;
    } else {
      throw new Error("Item with Id not found.");
    }
  } catch (error) {
    console.log(error); // Log any caught errors to the console
    throw error;
  }
};
