import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/layout"

export const BlogPostTemplate = props => {
  return (
    // <Layout>
    <div className="blog-content">
      <Seo title={props.title} description={props.description} />

      <h1>{props.title}</h1>

      <p style={{ fontStyle: "italic" }}>{props.description}</p>

      <section
        dangerouslySetInnerHTML={{ __html: props.content }}
        itemProp="articleBody"
      />
    </div>
    // </Layout>
  )
}

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data

  return (
    <BlogPostTemplate
      content={post.html}
      title={post.frontmatter.title}
      featuredimage={post.frontmatter.featuredimage}
      description={post.frontmatter.description}
    />
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`
