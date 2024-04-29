import { ItemType, PriceDataType, PriceType } from "@/types/type";
import { getWikiFileURL } from "./../../helpers/getWikiFileUrl";
// Function to fetch item price data by item ID from an external API
export const fetchPriceById = async (id: string, isMounted: boolean) => {
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
};
// Function to fetch item name by item ID from an external API
export const fetchIdByName = async (name: string, isMounted: boolean) => {
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
  const nameLower = name.toLowerCase();
  const nameReformatted =
    nameLower.charAt(0).toUpperCase() + nameLower.slice(1);
  // Parse JSON response from the API (item name to item ID mapping)
  const data = await response.json();
  const itemId = data[nameReformatted];
  // Throw error if item name is not found for the provided item ID
  if (itemId !== undefined) {
    return itemId;
  } else {
    throw new Error("Item with name not found.");
  }
};
// Function to fetch all items from an external API
export const fetchAllItems = async (isMounted: boolean) => {
  const url = "https://prices.runescape.wiki/api/v1/osrs/mapping";
  const response = await fetch(url);
  if (!isMounted) return;
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
  const data = await response.json();
  if (data !== undefined) {
    const itemData: ItemType[] = data.map((data: ItemType) => ({
      examine: data.examine,
      id: data.id,
      iconSrc: getWikiFileURL(data.icon),
      name: data.name,
    }));
    return itemData;
  } else {
    throw new Error("Unable to retrieve data");
  }
};
