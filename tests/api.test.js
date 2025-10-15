const getCitation = require("../src/api");

test("L\’ API retourne une citation valide", async () => {
  const citation = await getCitation();
  expect(typeof citation).toBe("string");
  expect(citation.length).toBeGreaterThan(0);
});