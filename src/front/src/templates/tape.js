import React from "react"
import { graphql } from "gatsby"
import PrimaryLayout from "../layouts/primaryLayout";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <PrimaryLayout>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </PrimaryLayout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
