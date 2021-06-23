import React from 'react';
import styled from 'styled-components';

const Testing = () => {
  return (
    <Wrapper>
      <h3>hello world</h3>
      <p>hello people</p>
      <div className="article">
        <p>this is article</p>
      </div>
      <button>hello button</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3 {
    color: red;
  }
  .article {
    p {
      color: purple;
    }
  }
`;

export default Testing;
