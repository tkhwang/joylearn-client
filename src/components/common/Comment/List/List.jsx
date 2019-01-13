import React from 'react';
import styled from 'styled-components';
import CommonCommentRender from '../../../common/Comment/Render/Render';

const List = ({ comments }) => {
  return comments.map((comment, index, comments) => {
    return (
      <ul>
        <li>
          By User {comment.writer}
          <DivFull>
            <CommonCommentRender comments={comment.content} />
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
