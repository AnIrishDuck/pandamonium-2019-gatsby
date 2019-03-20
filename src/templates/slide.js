import React from 'react';
import { graphql } from 'gatsby';
import Wrapper from '../components/wrapper'

export default ({ data, transition }) => (
  <Wrapper index={data.slide.index}>
    <div
      style={transition && transition.style}
      dangerouslySetInnerHTML={{ __html: data.slide.html }}
    />
  </Wrapper>
);

export const query = graphql`
  query SlideQuery($index: Int!) {
    slide(index: { eq: $index }) {
      html
      index
    }
  }
`;
