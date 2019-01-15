import React from 'react';
import PaperSheet from '../../common/PaperSheet/PaperSheet.jsx';

const BookCardInner = ({ book }) => {
  return (
    <ul>
      <li>
        Url : <a href={book.mainUrl}>{book.mainUrl}</a>
      </li>
      <li>
        Github: <a href={book.gitHub}>{book.gitHub}</a>
      </li>
    </ul>
  );
};

const Card = ({ book }) => (
  <React.Fragment>
    <PaperSheet title={book.fullName ? book.fullName : book.name}>
      <BookCardInner book={book} />
    </PaperSheet>
  </React.Fragment>
);

export default Card;
