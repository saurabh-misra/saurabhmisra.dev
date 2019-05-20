import getEditPostURL from "./get-edit-post-url.js";

test("getEditPostURL", () => {
  expect(
    getEditPostURL(new Date("2019-05-16T12:49:16.701Z"), "/posts/foo-bar-baz")
  ).toBe(
    "https://github.com/saurabh-misra/saurabhmisra.dev/edit/master/content/posts/2019-05-16---foo-bar-baz.md"
  );
});
