// fetch calls to api
type PriceType = {
  avgHighPrice: number | null;
  avgLowPrice: number | null;
};

type PriceDataType = {
  [key: string]: PriceType;
};

const filterDataById = (
  data: PriceDataType,
  id: string,
): PriceType | undefined => {
  return data[id];
};

export const fetchPriceById = async ({
  id,
  isMounted,
}: {
  id: string;
  isMounted: boolean;
}) => {
  try {
    const url = "https://prices.runescape.wiki/api/v1/osrs/5m";
    const response = await fetch(url);
    if (!isMounted) return; // Exit if component is unmounted
    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error("Network response 400");
        case 401:
          throw new Error("Network response 401");
        case 404:
          throw new Error("Network response 404");
        case 500:
          throw new Error("Network response 500");
      }
    }
    const data = await response.json();
    const price = filterDataById(data, id);
    if (price) {
      return price;
    } else {
      throw new Error("Id not found");
    }
  } catch (error) {
    console.log(error);
  }
};

type ItemDataType = {
  [itemName: string]: number;
};

// Function to create a reverse lookup dictionary (item IDs mapped to item names)
const createItemIdLookup = (
  itemData: ItemDataType,
): { [itemId: number]: string } => {
  const itemIdLookup: { [itemId: number]: string } = {};

  // Iterate over each item in itemData
  Object.entries(itemData).forEach(([itemName, itemId]) => {
    itemIdLookup[itemId] = itemName;
  });

  return itemIdLookup;
};

export const fetchNameById = async ({
  id,
  isMounted,
}: {
  id: number;
  isMounted: boolean;
}) => {
  try {
    const url =
      "https://oldschool.runescape.wiki/?title=Module:GEIDs/data.json&action=raw&ctype=application%2Fjson";
    const response = await fetch(url);
    if (!isMounted) return; // Exit if component is unmounted
    if (!response.ok) {
      switch (response.status) {
        case 400:
          throw new Error("Network response 400");
        case 401:
          throw new Error("Network response 401");
        case 404:
          throw new Error("Network response 404");
        case 500:
          throw new Error("Network response 500");
      }
    }
    // data json = name: number
    const data = await response.json();
    // Create a reverse lookup dictionary for item IDs mapped to item names
    const itemIdLookup = createItemIdLookup(data);
    // Function to retrieve item name by item ID using the reverse lookup dictionary
    const getItemNameById = (itemId: number): string | undefined => {
      return itemIdLookup[itemId];
    };
    const itemName = getItemNameById(id);
    if (itemName !== undefined) {
      return itemName;
    } else {
      throw new Error("Item with Id not found.");
    }
  } catch (error) {
    console.log(error);
  }
};
