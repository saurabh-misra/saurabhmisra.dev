"use strict";

module.exports = {
  markdownRemark: {
    id: "test-123",
    html: "<p>test</p>",
    fields: {
      tagSlugs: ["/test_0", "/test_1"],
      slug: "/posts/foo-bar-baz"
    },
    frontmatter: {
      date: "2016-09-01",
      description: "test",
      title: "test",
      tags: ["test_0", "test_1"]
    }
  }
};
