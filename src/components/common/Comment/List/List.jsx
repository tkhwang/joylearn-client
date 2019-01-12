import React from 'react';
import styled from 'styled-components';
import remark from 'remark';
import remark2react from 'remark-react';

const List = ({ comments }) => {
  return comments.map((comment, index, comments) => {
    return (
      <ul>
        <li>
          By User {comment.writer}
          <DivFull>
            {
              remark()
                .use(remark2react)
                .processSync(comment.content).contents
            }
          </DivFull>
        </li>
      </ul>
    );
  });
};

const DivFull = styled.div`
  width: 1200px;
  right: 0px;
  top: 100px;
  height: 200px;
  background-color: lightgray;
`;

export default List;
