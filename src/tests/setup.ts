import * as matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

// vitest-fetch-mock
const fetchMocker = createFetchMock(vi);

// sets globalThis.fetch and globalThis.fetchMock to our mocked version
fetchMocker.enableMocks();
