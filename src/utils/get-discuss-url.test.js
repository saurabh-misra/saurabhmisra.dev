import getDiscussURL from "./get-discuss-url.js";

test("getDiscussURL", () => {
  expect(getDiscussURL("https://example.com", "/posts/foo-bar-baz")).toBe(
    "https://mobile.twitter.com/search?q=https://example.com/posts/foo-bar-baz"
  );
});
