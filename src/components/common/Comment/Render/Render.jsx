import React from 'react';
import remark from 'remark';
import remark2react from 'remark-react';
import styled from 'styled-components';

const Render = props => {
  return (
    <DivFull>
      {
        remark()
          .use(remark2react)
          .processSync(props.contents).contents
      }
    </DivFull>
  );
};

const DivFull = styled.div`
  width: 1200px;
  right: 0px;
  top: 100px;
  height: 200px;
  background-color: lightgray;
`;

export default Render;
