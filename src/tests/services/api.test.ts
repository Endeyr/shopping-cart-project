import { fetchIdByName, fetchPriceById } from "@/services/api/index";
import { beforeEach, describe, expect, it } from "vitest";
// Possible improvements could be adding test for each failed status, edge cases, api being down, ect
describe("testing api", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("calls osrs and returns price by id", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        data: {
          "1": {
            avgHighPrice: 10,
            highPriceVolume: 2,
            avgLowPrice: 5,
            lowPriceVolume: 1,
          },
        },
        timestamp: 1713275100,
      }),
    );

    // assert on the response
    const response = await fetchPriceById("1", true);

    expect(response).toEqual(7.5);

    // assert on the times called and arguments given to fetch
    expect(fetchMock.requests().length).toEqual(1);
    expect(fetchMock.requests()[0].url).toEqual(
      "https://prices.runescape.wiki/api/v1/osrs/5m",
    );
  });

  it("calls osrs wiki and returns id by name", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        "Abyssal whip": 4151,
      }),
    );

    // assert on the response
    const response = await fetchIdByName("Abyssal Whip", true);

    expect(response).toEqual(4151);

    // assert on the times called and arguments given to fetch
    expect(fetchMock.requests().length).toEqual(1);
    expect(fetchMock.requests()[0].url).toEqual(
      "https://oldschool.runescape.wiki/?title=Module:GEIDs/data.json&action=raw&ctype=application%2Fjson",
    );
  });
});
