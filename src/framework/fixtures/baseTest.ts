import { test as base, expect } from "@playwright/test";
import { DataContext } from "../../data/DataContext";

type FrameworkFixtures = {};

export const baseTest = base.extend<FrameworkFixtures>({});

baseTest.beforeEach(async () => {
  DataContext.clear();
});

export { expect };