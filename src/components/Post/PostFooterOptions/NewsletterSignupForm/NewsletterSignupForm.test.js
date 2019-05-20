// @flow
import React from "react";
import renderer from "react-test-renderer";
import NewsletterSignupForm from "./NewsletterSignupForm";

describe("NewsletterSignupForm", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<NewsletterSignupForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
