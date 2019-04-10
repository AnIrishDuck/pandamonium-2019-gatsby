# Gatsby in Sixty Seconds

---

# The Life and Death of a Gatsby Site

* Bootstrapping
* Data Sourcing
* Page Generation
* In-Browser Code

---

##  Bootstrapping / Data Sourcing

<!--

- plugins loading - walk through gatsby-config.js
  - show how this is not hot loaded
- data ingestion and transformation - walk through gatsby-node.js
  - show the ugly hack and point and laugh

-->

---
## GraphQL

`iframe:http://localhost:8000/___graphql`

<!--
The previous step just exposed our data to be queried via GraphQL.
Let's take a look at what that looks like...

query IndexQuery {
  site {
    siteMetadata {
      name
      title
      date
    }
  }
  allSlide {
    edges {
      node {
        id
      }
    }
  }
}

query SlideQuery {
  slide(index: { eq: 15 }) {
    html
    index
  }
}

-->

---

## Hot Loading and React

```markdown
# The Life and Death of a Gatsby Site

* Bootstrapping
* Data Sourcing
* Page Generation
* In-Browser Magic
```

<!--
The nodes generated from before are only the first step in the site generation
process. Let's look at what converts the data we expose via GraphQL into HTML.

Start at gatsby-node.js

From there, we can see the template generated in our source directory.

This is used to actually render and build the site.

Let's look at how the site is actually built.

TODO: explanation of how static vs dynamic components work.

-->

---
# Deploying Gatsby Sites

https://www.gatsbyjs.org/docs/deploying-and-hosting/

<!--
There are lots of backend plugins for deploying Gatsby sites to everything
under the sun.

-->

---
## Configuration

```js
{
  resolve: `gatsby-plugin-s3`,
  options: {
    bucketName: 'inst-eng-blog'
  },
},
```

<!--
This is literally all the configuration I needed for the eng blog concept
-->

---
## Deploy

```bash
npm run deploy
```

<!-- This is all we need to run to deploy. (deploy 60s demo here) -->
