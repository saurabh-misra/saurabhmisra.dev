// @flow
import React from "react";
import renderer from "react-test-renderer";
import { useStaticQuery, StaticQuery } from "gatsby";
import PostFooterOptions from "./PostFooterOptions";
import siteMetadata from "../../../../jest/__fixtures__/site-metadata";
import type { RenderCallback } from "../../../types";

describe("PostFooterOptions", () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata)
    );
  });

  it("renders correctly", () => {
    const tree = renderer.create(<PostFooterOptions />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
