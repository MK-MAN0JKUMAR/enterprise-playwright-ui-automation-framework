import { test } from "../../../src/framework/fixtures/flowFixtures";

test("user can search product", async ({ searchProductFlow }) => {

  await searchProductFlow.searchProduct("Blue Top");

});